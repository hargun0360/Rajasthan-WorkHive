import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Row,
} from "reactstrap";
import classnames from "classnames";
import { isEmpty } from "lodash";

import  SocketIOClient from "socket.io-client";

//Import Star Ratings
import StarRatings from "react-star-ratings";

//Import Product Images
import { productImages } from "../assets/images/product";

//Import Breadcrumb
import Breadcrumbs from "../Components/Common/Breadcrumb";

//Import actions
import {
  getProductDetail as onGetProductDetail,
  getProductComments,
  onAddReply as onAddReplyAction,
  onAddComment as onAddCommentAction,
} from "../store/actions"

//redux
import { useSelector, useDispatch } from "react-redux"

const Store_detail = () => {    

    const dispatch = useDispatch()

    // const [time , setTime ] = useState();

    // useEffect(()=>{
    //     const socket = SocketIOClient("Backend url");
    //     socket.on("message" , (data) => {
    //         setTime(data)
    //         this.render();
    //     })
    // },[])

const product = [{
    category : "hello",
    name : "hergun" , 
    reviews : "3.5",
    features : [{
        type : "zimba",
        value : "2"
    }]
} , 
{
    category : "hello",
    name : "hergun" , 
    reviews : "3.5",
    features : [{
        type : "zimba",
        value : "2"
    }]
}]

//   const {
//     match: { params },
//   } = 1
//   const [activeTab, setActiveTab] = useState("1")

//   useEffect(() => {
//     if (params && params.id) {
//       dispatch(onGetProductDetail(params.id))
//     } else {
//       dispatch(onGetProductDetail(1))
//     }
//   }, [dispatch, params])

//   const toggleTab = tab => {
//     if (activeTab !== tab) {
//       setActiveTab(tab)
//     }
//   }

//   const imageShow = (img, id) => {
//     const expandImg = document.getElementById("expandedImg" + id)
//     expandImg.src = img
//   }

  

    return (
        <React.Fragment>
          <div>
            
            <Container>
              <Breadcrumbs title="Ecommerce" breadcrumbItem="Product Detail" />
              {!isEmpty(product) && (
                <Row>
                  <Col>
                    <Card>
                      <CardBody>
                        <Row>
    
                          <Col xl="12">
                            <div className="mt-4 mt-xl-3">
                              <Link to="#" className="text-primary">
                                {product.category}
                              </Link>
                              <h4 className="mt-1 mb-3">{product.name}</h4>
    
                              <div className="text-muted float-start me-3">
                                <StarRatings
                                  rating={4}
                                  starRatedColor="#F1B44C"
                                  starEmptyColor="#2D363F"
                                  numberOfStars={5}
                                  name="rating"
                                  starDimension="14px"
                                  starSpacing="3px"
                                />
                              </div>
                              <p className="text-muted mb-4">
                                ( {product.reviews} Customers Review )
                              </p>
    
                            
                              <p className="text-muted mb-4">
                                To achieve this, it would be necessary to have
                                uniform grammar pronunciation and more common words
                                If several languages coalesce
                              </p>
                              <Row className="mb-3">
                                <Col md="6">
                                  {product.features &&
                                    product.features.map((item, i) => (
                                      <div key={i}>
                                        <p className="text-muted">
                                          <i
                                            className={classnames(
                                              item.icon,
                                              "font-size-16 align-middle text-primary me-2"
                                            )}
                                          />
                                          {item.type && `${item.type}: `}
                                          {item.value}
                                        </p>
                                      </div>
                                    ))}
                                </Col>
                                <Col md="6">
                                  {product.features &&
                                    product.features.map((item, i) => (
                                      <div key={i}>
                                        <p className="text-muted">
                                          <i
                                            className={classnames(
                                              item.icon,
                                              "font-size-16 align-middle text-primary me-2"
                                            )}
                                          />
                                          {item.type && `${item.type}:`}
                                          {item.value}
                                        </p>
                                      </div>
                                    ))}
                                </Col>
                              </Row>
                            </div>
                          </Col>
                        </Row>
                        <Row className="d-flex justify-content-end">
                            
                            <button className="btn btn-primary" style={{width:"fit-content"}}>
                                Join in Queue
                            </button>
                        </Row>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              )}
              
            </Container>
          </div>
        </React.Fragment>
      )
    
}

export default Store_detail