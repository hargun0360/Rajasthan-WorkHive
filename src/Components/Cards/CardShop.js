import React , {useState , useEffect} from "react"
import { Link } from "react-router-dom"
import { Card, Col, Row } from "reactstrap"
import { geoLocation } from "../../Pages/geoLocation"
import { getNearbyStore } from "../../Services/ApiServices"
import { useNavigate } from "react-router-dom"
import { BASE_URL } from "../../Services/ApiUrls"

const CardShop = props => {

  const imgsrc = props.Image
  const name = props.name


  const navigate = useNavigate()

  const handleClick = () => {
      if(name == "Hospital"){
        navigate("/place/hospital");
      }else if(name == "Govt. Office"){
        navigate("/place/gov")
      }else if(name == "Bank"){
        navigate("/place/bank") 
      }else if(name == "Registration Camps"){
        navigate("/place/reg") 
      }else if(name == "ticket system"){
        navigate("/place/ticket") 
      }
  } 

 
  return (
    <React.Fragment>
      <Col xl="3" sm="6" style={{padding:"0px 0px"}}>
        <Card className="shadow-lg px-1 mx-4 bg-white" style={{border:"1px solid transparent" , borderRadius:"9px" , width:"87%"}}>
          <Row>
            <Col xl="4">
              <div className="text-center mt-3 border-end">
                <div className="avatar-lg mx-auto mb-1 mt-4">
                 
                    <img src={imgsrc} className="mt-4" style={{width:"50px" , height:"50px"}}></img>
                 
                </div>
              </div>
            </Col>

            <Col xl="7">
              <div className="p-2 mt-2 text-center text-xl-start">
                <Row>
                <Row >
                    <div style={{margin : "0" , padding:"0"}}>
                      <h5 className="text-muted mb-2 text-truncate">{props.name}</h5>
                    </div>
                  </Row>
                  <Col xs="12" className="p-0">
                    <div>
                      <p className="text-muted mb-2 text-truncate p-0">Number of {props.name}</p>
                      <h5>{props.worker}</h5>
                    </div>
                  </Col>
                  
                </Row>
                <div className="mt-1 mb-1" style={{marginLeft : "-12px" , padding:"0"}}>
                  <p style={{margin:"0" , padding : "0" , cursor : "pointer"}} onClick={handleClick} className="text-decoration-underline text-reset">More info <i className="mdi mdi-arrow-right"></i></p>
                </div>
              </div>
            </Col>
          </Row>
        </Card>
      </Col>
    </React.Fragment>
  )
}


export default CardShop
