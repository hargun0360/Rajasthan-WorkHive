import React, { useState, useEffect } from 'react'
import CardShop from '../Components/Cards/CardShop'
import driver from "../assets/images/driver.png"
import { geoLocation } from './geoLocation'
import Navbar from '../Components/Navbar' 
import { getNearbyStore } from '../Services/ApiServices'

import {
  Card,
  Col,
  Row,
  CardBody,
  CardTitle,
  Table,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Avg_time } from './Avg-time'
import ioClient from "socket.io-client"
import moment from 'moment'
import { useCountdown } from './Countdown'
import DateTimeDisplay from './DateTimeDisplay';

const Categories = () => {
  const [productList, setproductList] = useState([]);
  const [nearStore, setNearStore] = useState([]);
  const [bank, setBank] = useState([]);
  const [gov, setGov] = useState([]);
  const [hospital, setHospital] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [registration, setRegistration] = useState([]);
  const [ticket, setTicket] = useState([]);
  const [counter , setCounter]  = useState([])
  const [avg , setAvg] = useState([]);
  const [avgPer , setAvgPer] = useState([])

  const latitude = localStorage.getItem("latitude");
  const longitude = localStorage.getItem("longitude");

 const socket = ioClient.connect("http://192.168.137.67:3000/")



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
      // console.log(avgPer);
    }

  }, [avgPer ])

  let a = [];
  useEffect(() => {
    if(productList && productList.length > 0 && avgPer.length>0){
      productList.forEach((item,ind) => {
        a.push(Avg_time(item.customers, "6929999929" , avgPer[ind]));
    })
      setAvg(a);
    }
  },[productList , avgPer])

  useEffect(() => {
   
    if(a){
      // console.log(a);
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
          setRegistration(res.data.reg_camp_stores)
          setTicket(res.data.ticket_system_stores)
          setHospital(res.data.hospital_stores)
        }).catch((err) => {
          console.log(err);
        })
    }
  }, [])

  
  const [timer,setTimer] = useState(0)

  // console.log(nearStore);

  function removeCartItem(id) {
    socket.emit("leave", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiI5MTE4ODgyNTE3Iiwic3ViIjoiVXNlciIsImV4cCI6MTY3OTYwMTQ3N30.fipVJRuBudDA4m8ukz2vMFc4mhelnqwK7tkHhO-nEA4", 1)
    socket.on("queue", (data) => {
      console.log(JSON.stringify(data))
  })
  }

  
  const ShowCounter = ({ days, hours, minutes, seconds }) => {
    return (
      <div className="show-counter">
        <a
          href="https://tapasadhikary.com"
          target="_blank"
          rel="noopener noreferrer"
          className="countdown-link"
        >
          <DateTimeDisplay value={days} type={'Days'} isDanger={days <= 3} />
          <p>:</p>
          <DateTimeDisplay value={hours} type={'Hours'} isDanger={false} />
          <p>:</p>
          <DateTimeDisplay value={minutes} type={'Mins'} isDanger={false} />
          <p>:</p>
          <DateTimeDisplay value={seconds} type={'Seconds'} isDanger={false} />
        </a>
      </div>
    );
  };

  const CountdownTimer = ({ targetDate }) => {
    const [days, hours, minutes, seconds] = useCountdown(targetDate);
  
   
      return (
        <ShowCounter
          days={days}
          hours={hours}
          minutes={minutes}
          seconds={seconds}
        />
      );
    
  };
  
  const NOW_IN_MS = new Date().getTime();
return (<>
  <Navbar />
  

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
                    
                    <td>{avg && avg.length > 0 ? <CountdownTimer targetDate={ (avg[ind] * 60 * 1000) + NOW_IN_MS  } /> : null}</ td>
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
    <CardShop Image={driver} name={"Registration Camps"} worker={registration ? registration.length : 0} />
    <CardShop Image={driver} name={"ticket system"} worker={ticket ? ticket.length : 0} />

  </Row>
  </>)
}

export default Categories


