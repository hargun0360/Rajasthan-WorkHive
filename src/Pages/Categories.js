import React, { useState, useEffect } from 'react'
import CardShop from '../Components/Cards/CardShop'
import driver from "../assets/images/driver.png"
import { geoLocation } from './geoLocation'
import { getNearbyStore } from '../Services/ApiServices'

import {
  Card,
  Col,
  Container,
  Row,
  CardBody,
  CardTitle,
  Label,
  Button,
  Form,
  Input,
  InputGroup,
  Table,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Avg_time } from './Avg-time'

const Categories = () => {
  const [productList, setproductList] = useState([]);
  const [nearStore, setNearStore] = useState([]);
  const [bank, setBank] = useState([]);
  const [gov, setGov] = useState([]);
  const [hospital, setHospital] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [counter , setCounter]  = useState([])
  const [avg , setAvg] = useState([]);
  const [avgPer , setAvgPer] = useState([])

  const latitude = localStorage.getItem("latitude");
  const longitude = localStorage.getItem("longitude");

  useEffect(() => {
    if (!latitude && !longitude) {
      geoLocation();
    }
  }, [])
  useEffect(() => {
      setAvg(localStorage.getItem("avg"))
  }, [localStorage.getItem("avg")]);

  let arr = [];
  useEffect(() => {
    if(productList && productList.length > 0){
      productList.forEach((item) => {
       arr.push(item.customers.join().split(","))
    })
      setCustomers(arr);
    }

  }, [productList])
 
  // useEffect(() => {
   
  //   if(arr){
  //     console.log(arr);
  //   }

  // }, [arr])
  let b = [];
  useEffect(() => {
    if(productList && productList.length > 0){
      productList.forEach((item) => {
        b.push(item.avg_time_per_person);
    })
      setAvgPer(b);
    }
  },[productList])

  useEffect(() => {
   
    if(avgPer){
      console.log(avgPer);
    }

  }, [avgPer ])

  let a = [];
  useEffect(() => {
    if(productList && productList.length > 0 && avgPer.length>0){
      productList.forEach((item,ind) => {
        a.push(Avg_time(item.customers, "7207665893" , avgPer[ind]));
    })
      setAvg(a);
    }
  },[productList , avgPer])

  useEffect(() => {
   
    if(a){
      console.log(a);
    }

  }, [a])

  



  // useEffect(() => {
  //     if(counter){
  //       console.log(counter);
  //     }
  // },[counter])

  useEffect(() => {
    if (!latitude && !longitude) {
      geoLocation();
    } else {
      let obj = {
        latitude: parseFloat(latitude),
        longitude: parseFloat(longitude)
      }
      getNearbyStore(obj)
        .then((res) => {
          console.log(res);
          setNearStore(res.data.near_stores);
          setproductList(res.data.joined_stores)
          setBank(res.data.bank_stores)
          setGov(res.data.govt_office_stores)
          setHospital(res.data.hospital_stores)
        }).catch((err) => {
          console.log(err);
        })
    }
  }, [])

  

  // console.log(nearStore);

  function removeCartItem(id) {
    var filtered = productList.filter(function (item) {
      return item.id !== id;
    });

    setproductList(filtered);
  }




return (

  <Row className='px-4 mx-0'>


    <Col lx="8">
      <Card>
        <CardTitle className='mx-4 py-2 mt-3' >Queues Joined</CardTitle>
        <CardBody>
          <div className="table-responsive">
            <Table className="table align-middle mb-0 table-nowrap">
              <thead className="table-light">
                <tr style={{ textAlign: "center" }}>
                  <th>Place</th>
                  <th>Location</th>
                  <th>Number of Customers</th>
                  <th>Number of Counters</th>
                  <th >Average Time</th>
                  <th>Leave Queue</th>
                </tr>
              </thead>
              <tbody>
                {productList && productList.length > 0 ? productList.map((product,ind) => (
                  <tr key={product.id} style={{ textAlign: "center" }}>
                    <td>
                      <img
                        src={product.profile_pic}
                        alt="product-img"
                        title="product-img"
                        className="avatar-md"
                      />
                    </td>
                    <td>
                      <h5 className="font-size-14 text-truncate">
                        <Link
                          to={"/ecommerce-product-detail/" + product.id}
                          className="text-dark"
                        >
                          {product.name}
                        </Link>
                      </h5>

                    </td>
                    <td>
                    {customers && customers.length ?  (
                       customers[ind].length
                    ) : null}
                    </td>
                      <td>{product.counters}</td>
                    
                    <td>{avg && avg.length > 0 ? avg[ind] : null}</ td>
                    <td>
                      <Link
                        to="#"
                        onClick={() => removeCartItem(product.id)}
                        className="action-icon text-danger"
                      >
                        {" "}
                        <i className="mdi mdi-trash-can font-size-18" />
                      </Link>
                    </td>
                  </tr>
                )) : null}
              </tbody>
            </Table>
          </div>
        </CardBody>
      </Card>
    </Col>


    <div className='mx-3  py-2 mb-2'>
      <h4> Nearby Places </h4>
    </div>

    <CardShop Image={driver} name={"Bank"} worker={bank ? bank.length : 0} />
    <CardShop Image={driver} name={"Govt. Office"} worker={gov ? gov.length : 0} />
    <CardShop Image={driver} name={"Hospital"} worker={hospital ? hospital.length : 0} />

  </Row>
)
}

export default Categories


