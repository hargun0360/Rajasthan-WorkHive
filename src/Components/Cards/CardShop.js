import React from "react"
import { Link } from "react-router-dom"
import { Card, Col, Row } from "reactstrap"

const CardShop = props => {

  const imgsrc = props.Image
  
 
  return (
    <React.Fragment>
      <Col xl="3" sm="6">
        <Card className="rounded shadow-lg p-3 mb-5 bg-white rounded">
          <Row>
            <Col xl="4">
              <div className="text-center p-4 border-end">
                <div className="avatar-lg mx-auto mb-3 mt-1">
                 
                    <img src={imgsrc} className="mt-4" style={{width:"50px" , height:"50px"}}></img>
                 
                </div>
              </div>
            </Col>

            <Col xl="8">
              <div className="p-4 text-center text-xl-start">
                <Row>
                <Row >
                    <div>
                      <h5 className="text-muted mb-2 text-truncate">{props.name}</h5>
                    </div>
                  </Row>
                  <Col xs="5">
                    <div>
                      <p className="text-muted mb-2 text-truncate">Workers</p>
                      <h5>{props.worker}</h5>
                    </div>
                  </Col>
                  <Col xs="7">
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
