import React , {useState} from 'react'
import {
    Row,
    Col,
    Card,
    CardBody,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
  } from "reactstrap"
  
  import '../assets/scss/app.scss'
  import '../assets/scss/theme.scss'
  import '../assets/scss/custom.scss'
  import '../assets/scss/bootstrap.scss'
  //Import Images
  import avatar1 from "../workerside/imgs/labprofile.jpg"
  

export const Workerdet = () => {
    const [settingsMenu, setSettingsMenu] = useState(false)
    //Setting Menu
    const toggleSettings = () => {
      setSettingsMenu(settingsMenu)
    }
  
    return (
      <React.Fragment>
        <Row className="d-flex" style={{justifyContent : "center"}}>
          <Col lg="11">
            <Card  >
              <CardBody>
                <Row>
                  <Col lg="5">
                    <div className='row row-cols-lg-auto g-3 align-items-center d-flex'>
                      <div className="me-3">
                        <img
                          src={avatar1}
                          alt=""
                          className="avatar-md rounded-circle img-thumbnail"
                        />
                      </div>
                      <div className="flex-grow-1 align-self-center">
                        <div className="text-muted">
                          <p className="mb-2">Welcome to WorkHive </p>
                          <h5 className="mb-1">Prem Narayan</h5>
                          <p className="mb-0"> Plumber </p>
                        </div>
                      </div>
                    </div>
                  </Col>
  
                  <Col lg="5" className="align-self-center">
                    <div className="text-lg-center mt-4 mt-lg-0">
                      <Row>
                        <Col xs="4">
                          <div>
                            <p className="text-muted text-truncate mb-2">
                              Experience
                            </p>
                            <h5 className="mb-0">3 + yrs</h5>
                          </div>
                        </Col>
                        <Col xs="4">
                          <div>
                            <p className="text-muted text-truncate mb-2">
                              Ratings
                            </p>
                            <h5 className="mb-0">3.5</h5>
                          </div>
                        </Col>
                        <Col xs="4">
                          <div>
                            <p className="text-muted text-truncate mb-2">
                              Pending Requests
                            </p>
                            <h5 className="mb-0">5+ </h5>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Col>
  
                  <Col lg="2" className="d-none d-lg-block">
                    <div className="clearfix mt-5 mt-lg-3 mx-5">
                      <button className='btn btn-primary md'> Update</button>
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </React.Fragment>
    )
}
