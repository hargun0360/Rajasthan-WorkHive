import React, { Suspense } from "react";
import { Button, Card, CardBody, Container, Form, Input, Row } from "reactstrap";
const Breadcrumb = React.lazy(() => import("components/Common/Breadcrumb2"));
const MetaTags = React.lazy(() => import("react-meta-tags"));
import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

const AddAssets = () => {
    const categoryOptions = [
        {
            label : "Usables",
            options : [
                { label: "Laptops", value: "Laptops" },
                { label: "Drones", value: "Drones" },
                { label: "Batteries", value: "Batteries" }
            ]
        },
        {
            label : "Others",
            options : [
                { label: "Miscellaneous", value: "Misc" }
            ]
        }
    ];

    return(
        <React.Fragment>
            <Suspense fallback={<div>Loading....</div>}>
                <div className="page-content">
                    <MetaTags>
                        <title>Add Asset | IG One</title>
                    </MetaTags>
                    <Container fluid>
                        <Breadcrumb title="Add Asset" breadcrumbItems={[{title : "Asset"},{title : "Add Asset"}]} />
                        <Form>
                            <Card>
                                <CardBody>
                                    <Row className="mb-3">
                                        <label style={{width:"10%"}} htmlFor="name" className="col-md-2 col-form-label">
                                            Name
                                        </label>
                                        <div className="col-md-10" style={{width:"88%"}} >
                                            <Input 
                                                className="form-control"
                                                type="text"
                                                name="name"
                                                required
                                                placeholder="Enter Name of Asset"
                                                onChange={() => {}}
                                            />
                                        </div>
                                    </Row>
                                    <Row className="mb-3">
                                        <label style={{width:"10%"}} htmlFor="name" className="col-md-2 col-form-label">
                                            Serial Number
                                        </label>
                                        <div className="col-md-10" style={{width:"88%"}}>
                                            <Input 

                                                className="form-control"
                                                type="text"
                                                name="name"
                                                required
                                                placeholder="Serial Number of Asset"
                                                onChange={() => {}}
                                            />
                                        </div>
                                    </Row>
                                    <Row className="mb-3">
                                        <label style={{width:"10%"}} htmlFor="name" className="col-md-2 col-form-label">
                                            Description
                                        </label>
                                        <div className="col-md-10" style={{width:"88%"}}>
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
                                        <label style={{width:"10%"}} htmlFor="name" className="col-md-2 col-form-label">
                                            Category
                                        </label>
                                        <div className="col-md-10" style={{width:"88%"}}>
                                            <Select 
                                                options = {categoryOptions}
                                                onChange={(e) => {
                                                    console.log("e :- ",e)
                                                }}
                                                classNamePrefix = "select2-selection"
                                            />
                                        </div>
                                    </Row>
                                    <Row className="mb-3">
                                        <label style={{width:"10%"}} htmlFor="name" className="col-md-2 col-form-label">
                                            Images
                                        </label>
                                        <div className="col-md-10" style={{width:"88%"}}>
                                            <Input 
                                                className="form-control" 
                                                id="formFileSm" 
                                                type="file" 
                                                placeholder="Add Images of Asset" />
                                        </div>
                                    </Row>
                                    <Row className="mb-3">
                                        <label style={{width:"10%"}} htmlFor="name" className="col-md-2 col-form-label">
                                            Videos
                                        </label>
                                        <div className="col-md-10" style={{width:"88%"}}>
                                            <Input 
                                                className="form-control" 
                                                id="formFileSm" 
                                                type="file" 
                                                placeholder="Add Images of Asset" />
                                        </div>
                                    </Row>
                                    <Row className="d-flex mt-5" style={{display:"flex", alignItems:"right", justifyContent:"right", marginRight:"3px"}}>
                                        <Button color="dark" type="submit" className="btn-xs" style={{ width: "15%" }}>
                                            Add Asset
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

export default AddAssets;