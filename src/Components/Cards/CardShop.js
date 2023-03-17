import React from "react"
import { Link } from "react-router-dom"
import { Card, Col, Row } from "reactstrap"

const CardShop = props => {

  const imgsrc = props.Image
  
 
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
                    <div>
                      <h5 className="text-muted mb-2 text-truncate">{props.name}</h5>
                    </div>
                  </Row>
                  <Col xs="5" className="p-0">
                    <div>
                      <p className="text-muted mb-2 text-truncate p-0">Workers</p>
                      <h5>{props.worker}</h5>
                    </div>
                  </Col>
                  <Col xs="7" className="p-0">
                    <div>
                      <p className="text-muted mb-2 text-truncate">
                        Avg. Price
                      </p>
                      <h5>{props.expected}</h5>
                    </div>
                  </Col>
                </Row>
                <div className="mt-2">
                  <Link to="/worker" className="text-decoration-underline text-reset">More info <i className="mdi mdi-arrow-right"></i></Link>
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
