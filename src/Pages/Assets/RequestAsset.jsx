import React, { Suspense } from "react";
import { Badge, Button, Card, CardBody, Container, Form, Input, Row } from "reactstrap";
const Breadcrumb = React.lazy(() => import("components/Common/Breadcrumb2"));
const MetaTags = React.lazy(() => import("react-meta-tags"));
import DroneImage from "../../assets/images/droneImage.jpg";

const RequestAsset = () => {
    return (
        <React.Fragment>
            <Suspense fallback={<div>Loading....</div>}>
                <div className="page-content">
                    <MetaTags>
                        <title>Request Asset | IG One</title>
                    </MetaTags>
                    <Container fluid>
                        <Breadcrumb title="Request Asset" breadcrumbItems={[{title : "Asset"},{title : "Request Asset"}]} />
                        <Card className="mt-3">
                            <CardBody style={{
                                display : "flex",
                                flexDirection : "row",
                                justifyContent : "space-between",
                                alignItems : "center"
                            }}>
                                <div>
                                    <h4>Drone</h4>
                                    <h5>C2143AD54</h5>
                                    <h5>
                                        <Badge className="me-2 bg-success">
                                            Drones
                                        </Badge>
                                    </h5>
                                </div>
                                <div>
                                    <img src={DroneImage} alt="" className="me-2 rounded" height="100" />
                                </div>
                            </CardBody>
                        </Card>

                        <Form>
                            <Card>
                                <CardBody>
                                    <Row className="mb-3">
                                        <label htmlFor="name" className="col-md-2 col-form-label">
                                            Reason for Requesting
                                        </label>
                                        <div className="col-md-10">
                                            <Input 
                                                className="form-control"
                                                type="textarea"
                                                name="name"
                                                required
                                                rows="5"
                                                placeholder="Enter Reason for Requesting of Asset"
                                                onChange={() => {}}
                                            />
                                        </div>
                                    </Row>
                                    <Row className="d-flex mt-5" style={{display:"flex", alignItems:"right", justifyContent:"right", marginRight:"3px"}}>
                                        <Button color="dark" type="submit" className="btn-xs" style={{ width: "15%" }}>
                                            Request Asset
                                        </Button>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Form>
                    </Container>
                </div>
            </Suspense>
        </React.Fragment>
    )
}

export default RequestAsset;