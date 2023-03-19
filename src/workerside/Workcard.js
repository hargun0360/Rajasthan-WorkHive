import React from 'react'

import { Col, Card, CardBody , Row} from "reactstrap"

export const Workcard = () => {
  return (
   
        <React.Fragment >
          <Row className='d-flex' style={{justifyContent:"center"}} >
          
        <Card style={{width:"450px"}} className="mx-3"> 
            <CardBody>
              <div className="d-flex align-items-center mb-3">
                <div className="avatar-xs me-3">
                  <span className="avatar-title rounded-circle bg-primary bg-soft text-primary font-size-18">
                  </span>
                </div>
                <h5 className="font-size-14 mb-0">Customers</h5>
              </div>
              <div className="text-muted mt-4">
                <h4>
                  30{" "}
                </h4>
                <div className="d-flex">
                  
                  <span className="ms-2 text-truncate">+6 % from previous period</span>
                </div>
              </div>
            </CardBody>
          </Card>
          <Card style={{width:"380px"}} className="mx-3"> 
            <CardBody>
              <div className="d-flex align-items-center mb-3">
                <div className="avatar-xs me-3">
                  <span className="avatar-title rounded-circle bg-primary bg-soft text-primary font-size-18">
                  </span>
                </div>
                <h5 className="font-size-14 mb-0">Earnings</h5>
              </div>
              <div className="text-muted mt-4">
                <h4>
                ₹12,000 {" "}
                </h4>
                <div className="d-flex">
                  
                  <span className="ms-2 text-truncate">+5 % from previous period</span>
                </div>
              </div>
            </CardBody>
          </Card>
          <Card style={{width:"380px"}} className="mx-3"> 
            <CardBody>
              <div className="d-flex align-items-center mb-3">
                <div className="avatar-xs me-3">
                  <span className="avatar-title rounded-circle bg-primary bg-soft text-primary font-size-18">
                  </span>
                </div>
                <h5 className="font-size-14 mb-0">Average Earnings</h5>
              </div>
              <div className="text-muted mt-4">
                <h4>
                ₹1300 / month{" "}
                </h4>
                <div className="d-flex">
                  {/* <span
                    className={
                      "badge badge-soft-" +  " font-size-12"
                    }
                  >
                    {" "}
                    23435{" "}
                  </span>{" "} */}
                  <span className=" text-truncate">+3 % from previous period</span>
                </div>
              </div>
            </CardBody>
          </Card>
          </Row>
        </React.Fragment>

  )
}
