import React, { Suspense } from "react";
import { Badge, Button, Card, CardBody, Container, Form, Input, Row } from "reactstrap";
const Breadcrumb = React.lazy(() => import("components/Common/Breadcrumb2"));
const MetaTags = React.lazy(() => import("react-meta-tags"));
import DroneImage from "../../assets/images/droneImage.jpg";

const ReturnAssets = () => {
    return(
        <React.Fragment>
            <Suspense fallback={<div>Loading....</div>}>
                <div className="page-content">
                    <MetaTags>
                        <title>Return Asset | IG One</title>
                    </MetaTags>
                    <Container fluid>
                        <Breadcrumb title="Return Asset" breadcrumbItems={[{title : "Asset"} , {title : "Return Asset"}]} />
                        <Card className="mt-3">
                            <CardBody style={{
                                display : "flex",
                                flexDirection : "row",
                                justifyContent : "space-between",
                                alignItems : "center"
                            }}>
                                <div>
                                    <h4>Asset Name : Drone</h4>
                                    <h5>Serial Number : C2143AD54</h5>
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
                            <Card className="mt-3">
                                <CardBody>
                                    <Row className="mb-3">
                                        <label htmlFor="name" className="col-md-2 col-form-label">
                                            Images
                                        </label>
                                        <div className="col-md-10">
                                            <Input 
                                                className="form-control" 
                                                id="formFileSm" 
                                                type="file" 
                                                placeholder="Add Images of Asset" />
                                        </div>
                                    </Row>
                                    <Row className="mb-3">
                                        <label htmlFor="name" className="col-md-2 col-form-label">
                                            Videos
                                        </label>
                                        <div className="col-md-10">
                                            <Input 
                                                className="form-control" 
                                                id="formFileSm" 
                                                type="file" 
                                                placeholder="Add Videos of Asset" />
                                        </div>
                                    </Row>
                                    <Row className="mb-3">
                                        <label htmlFor="name" className="col-md-2 col-form-label">
                                            Description
                                        </label>
                                        <div className="col-md-10">
                                            <Input 
                                                className="form-control"
                                                type="textarea"
                                                name="name"
                                                required
                                                placeholder="Enter Description of Asset"
                                                onChange={() => {}}
                                            />
                                        </div>
                                    </Row>
                                    <Row className="mb-3">
                                        <label htmlFor="name" className="col-md-2 col-form-label">
                                            Audio
                                        </label>
                                        <div className="col-md-10">
                                            <Input 
                                                className="form-control" 
                                                id="formFileSm" 
                                                type="file" 
                                                placeholder="Add Audio of Asset" />
                                        </div>
                                    </Row>
                                    <Row className="d-flex justify-content-center mt-4">
                                        <Button color="dark" type="submit" className="btn-xs" style={{ width: "40%" }}>
                                            Confirm Return
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

export default ReturnAssets;