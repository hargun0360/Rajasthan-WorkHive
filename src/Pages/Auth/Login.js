import React, {useState} from 'react'
import {
    Row,
    Col,
    Card,
    CardBody,
    Modal,
    Button,
ModalHeader,
ModalBody
} from 'reactstrap'
import SweetAlert from "react-bootstrap-sweetalert"
import P01 from '../../assets/images/qwait.png'
import { Loginapi } from '../../Services/ApiServices'

//import Loginscreen from './Loginscreen'
function Login() {
    const [modal , setmodal] =useState(false)
    const [success_msg, setsuccess_msg] = useState(false)

    const [call , setCall] = useState(null);
    const handleClick = (e) => {
        e.preventDefault() ;
        let obj = {
            phone_no : "+91" + call
        }
        Loginapi(obj)
        .then((res) => {
            console.log(res);
            setsuccess_msg(true);
        }).catch((e) => console.log(e))

    }


  return (
    <>
    <React.Fragment>
      <Row>
        <Col lg="12">
          <Card>
            <CardBody>
              <Row>
                <Col lg="11">
                  <div className="d-flex">
                    <div className="me-3">
                      <img
                        src={P01}
                        alt=""
                        className="avatar-md  img-thumbnail"
                      />
                    </div>
                    <div className="flex-grow-1 align-self-center">
                      <div className="text-muted">
                        <h3 className="mb-1">Q wait </h3>
                      </div>
                    </div>
                  </div>
                </Col>


                <Col lg="1" className="d-none d-lg-block">
                  <div className="clearfix mt-4 mt-lg-0">
                  <div>
        <Modal 
         isOpen={modal} 
         toggle={()=>setmodal(!modal)}>
            <ModalHeader 
            toggle={()=>setmodal(!modal)}
            >
                <div className='fs-3 text-center'>Welcome to Q wait </div> 
            </ModalHeader>
            <ModalBody>
                <form>
                    <Row className='d-flex justify-content-center'>
                        <Col lg={8}>
                        <form className="app-search d-none d-md-block">
                        <div className="position-relative" >
                            <input
                                type={Number}
                                className="form-control"
                                placeholder='Enter the mobile number'
                                onChange={(e) => setCall(e.target.value)}
                            />
                            <span className="bx bxs-phone-call" />
                        </div>
                    </form>
                        </Col>
                    </Row>
                    <br/>
                    <div className='text-center'>
                    <Button
                      color="primary"
                      onClick={handleClick}
                      id="sa-success"
                    >
                      SUBMIT
                    </Button>
                  {success_msg ? (
                    <SweetAlert
                      title="SMS send successfully"
                      success
                      showCancel
                      confirmBtnBsStyle="success"
                      cancelBtnBsStyle="danger"
                      onConfirm={() => {
                        setsuccess_msg(false)
                      }}
                      onCancel={() => {
                        setsuccess_msg(false)
                      }}
                    >
                     
                    </SweetAlert>
                  ) : null}
                    </div>
                </form>
            </ModalBody>
        </Modal>
    </div>
                    <button className='btn btn-success btn-lg d-flex space-between' style={{justifyContent:"end"}} onClick={()=>setmodal(true)}>Login</button>
                  </div>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
    </>
  )
}

export default Login