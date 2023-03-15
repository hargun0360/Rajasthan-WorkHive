import React, { Suspense } from "react";
import { Link } from "react-router-dom";
const Breadcrumb = React.lazy(() => import("components/Common/Breadcrumb2"));
const MetaTags = React.lazy(() =>  import("react-meta-tags"));
import { Badge, Button, Card, CardBody, Col, Container, Row, Table } from "reactstrap";
import DroneImage from "../../assets/images/droneImage.jpg";
import AssetTimeLine from "./AssetComponents/AssetTimeLine";

const AssetDetails = () => {

    const statuses = [
        {
          id: 1,
          stausTitle: "Requested",
          iconClass: "bx-badge-check",
          date : "17-July-2022",
          description:"Asset Requested by Monil.",
        },
        {
          id: 2,
          stausTitle: "Returned",
          iconClass: "bx-car",
          date : "16-July-2022",
          description:"Asset Returned to IG One by Naveen",
        },
        {
          id: 3,
          stausTitle: "Requested",
          iconClass: "bx-package",
          date : "14-July-2022",
          description:"Asset Requested by Naveen.",
        },
        {
          id: 4,
        stausTitle: "Added",
          iconClass: "bx-copy-alt",
          date : "12-July-2022",
          description: "Asset Added to IG One.",
        },
      ];    


    return(
        <React.Fragment>
            <Suspense fallback={"Loading..."}>
                <div className="page-content">
                    <MetaTags>
                        <title>
                            Asset Details | IG One
                        </title>
                    </MetaTags>
                    <Container fluid>
                        <Breadcrumb title="Asset Details" breadcrumbItems={[{title : "Asset"},{title : "Drone"}]} />
                        <Row>
                            <Col>
                                <Card>
                                    <CardBody>
                                        <Row>
                                            <Col xl={6}>
                                                <img src={DroneImage} alt="DroneImage" className="img-fluid mx-auto d-block rounded"  />
                                                <div className="text-center">
                                                    <Link to={"/requestAsset/1"}>
                                                        <Button
                                                            type="button"
                                                            color="primary"
                                                            className="btn  mt-2 me-1"
                                                        >
                                                            <i className="bx bx-cart me-2" /> Request Asset
                                                        </Button>
                                                    </Link>
                                                </div>
                                            </Col>
                                            <Col xl={6}>
                                                <div className="mt-4 mt-xl-3">
                                                    <Link to="#" className="text-primary">
                                                        Drones
                                                    </Link>
                                                    <h4 className="mt-1 mb-3">Drone</h4>
                                                    <Badge
                                                        className={"font-size-13 badge-soft-light mb-4"}
                                                        color={"success"}
                                                        pill
                                                    >
                                                        Available to Take
                                                    </Badge>
                                                    <p className="text-muted mb-4">
                                                        To achieve this, it would be necessary to have
                                                        uniform grammar pronunciation and more common words
                                                        If several languages coalesce
                                                    </p>
                                                    <h5>
                                                        Features of Asset
                                                    </h5>
                                                </div>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={4}>
                                <Card>
                                    <CardBody>
                                        <h4 className="mb-3">Asset TimeLine</h4>
                                        <div className="">
                                            <ul className="verti-timeline list-unstyled">
                                            {/* Render Horizontal Timeline Events */}
                                            {statuses.map((status, key) => (
                                                <li key={key} className="event-list">
                                                <div className="event-timeline-dot">
                                                    <i
                                                    className={
                                                        status.id === 1
                                                        ? "bx bx-right-arrow-circle text-success bx-fade-right"
                                                        : "bx bx-right-arrow-circle"
                                                    }
                                                    />
                                                </div>
                                                <div className="d-flex">
                                                    <div className="me-3">
                                                    <i
                                                        className={
                                                        "bx " + status.iconClass + " h2 text-primary"
                                                        }
                                                    />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                    <div>
                                                        <h5>{status.stausTitle}</h5>
                                                        <p className="text-muted">
                                                        {status.description}
                                                        </p>
                                                    </div>
                                                    </div>
                                                </div>
                                                </li>
                                            ))}
                                            </ul>
                                        </div>

                                    </CardBody>
                                </Card>
                            </Col>
                            <Col xs={8}>
                                <Card>
                                    <CardBody>
                                        <h4 className="mb-3">Previous History</h4>
                                        <Table className="table table-hover mb-0">
                                            <thead className="table-light">
                                                <tr>
                                                    <th>#</th>
                                                    <th>Name</th>
                                                    <th>Taken Date</th>
                                                    <th>Returned Date</th>
                                                    <th>Feedback</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr scope="row" key="1">
                                                   <td>1</td>
                                                   <td>Naveen</td>
                                                   <td>14-July-2022</td>
                                                   <td>16-July-2022</td>
                                                   <td>
                                                    <p>No Feedback</p>
                                                   </td>
                                                </tr>
                                                <tr scope="row" key="2">
                                                   <td>1</td>
                                                   <td>Naveen</td>
                                                   <td>14-July-2022</td>
                                                   <td>16-July-2022</td>
                                                   <td>
                                                    <p>No Feedback</p>
                                                   </td>
                                                </tr>
                                                <tr scope="row" key="3">
                                                   <td>1</td>
                                                   <td>Naveen</td>
                                                   <td>14-July-2022</td>
                                                   <td>16-July-2022</td>
                                                   <td>
                                                    <p>No Feedback</p>
                                                   </td>
                                                </tr>
                                                <tr scope="row" key="4">
                                                   <td>1</td>
                                                   <td>Naveen</td>
                                                   <td>14-July-2022</td>
                                                   <td>16-July-2022</td>
                                                   <td>
                                                    <p>No Feedback</p>
                                                   </td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Suspense>
        </React.Fragment>
    )
}

export default AssetDetails;