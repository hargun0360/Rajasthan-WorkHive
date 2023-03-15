import React, { Suspense } from "react";
import BootstrapTable from "react-bootstrap-table-next";
const Breadcrumb = React.lazy(() => import("components/Common/Breadcrumb2"));
const MetaTags = React.lazy(() => import("react-meta-tags"));
import { Alert, Badge, Button, Card, CardBody, CardText, Col, Container, DropdownItem, DropdownMenu, DropdownToggle, FormFeedback, Input, Modal, Nav, NavItem, NavLink, Row, TabContent, Table, TabPane, UncontrolledDropdown } from "reactstrap";
import DroneImage from "../../assets/images/droneImage.jpg";
import classnames from "classnames";
import { useState } from "react";
import AllAssetsTable from "./AssetComponents/AllAssetsTable";
import MyAssetsTable from "./AssetComponents/MyAssetsTable";
import { confirmFileDeletion } from "./Functions";
import DeleteConfirmationByInputModal from "components/Common/DeleteConfirmationByInputModal";


const ManageAssets = () => {
    const [activeTab, setActiveTab] = useState("1");
    const [deleteModal, setDeleteModal] = useState(false);
    const [modalInput, setModalInput] = useState("");

    function tog_DeleteModal() {
        setDeleteModal(!deleteModal);
    }

    const toggle = tab => {
        if (activeTab !== tab) {
            setActiveTab(tab);
        }
    }


    return (
        <React.Fragment>
            <Suspense fallback={<div>Loading...</div>}>
                <div className="page-content">
                    <MetaTags>
                        <title>Manage Assets | IG One</title>
                    </MetaTags>
                    <Container fluid>
                        <Breadcrumb title="Manage Assets" breadcrumbItems={[{ title: "Asset" }, { title: "Manage Assets" }]} />
                        <Row>
                            {/* <Col lg={4}>
                                <Nav pills className="navtab-bg nav-justified">
                                    <NavItem>
                                    <NavLink
                                        style={{ cursor: "pointer" }}
                                        className={classnames({
                                        active: activeTab === "1",
                                        })}
                                        onClick={() => {
                                            toggleTabs("1")
                                        }}
                                    >
                                        All Assets
                                    </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            style={{ cursor: "pointer" }}
                                            className={classnames({
                                                active: activeTab === "2",
                                            })}
                                            onClick={() => {
                                                toggleTabs("2")
                                            }}
                                        >
                                            My Assets
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                            </Col> */}
                            <Col lg={4}>
                                <Nav tabs>
                                    <NavItem>
                                        <NavLink
                                            style={{ cursor: "pointer" }}
                                            className={classnames({
                                                active: activeTab === "1",
                                            })}
                                            onClick={() => {
                                                toggle("1");
                                            }}
                                        >
                                            All Assets
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            style={{ cursor: "pointer" }}
                                            className={classnames({
                                                active: activeTab === "2",
                                            })}
                                            onClick={() => {
                                                toggle("2");
                                            }}
                                        >
                                            My Assets
                                        </NavLink>
                                    </NavItem>

                                </Nav>
                            </Col>

                            <TabContent activeTab={activeTab} className="p-3 text-muted">
                                <TabPane tabId="1">
                                    <AllAssetsTable onDelete={tog_DeleteModal} />
                                </TabPane>
                                <TabPane tabId="2">
                                    <MyAssetsTable />
                                </TabPane>
                            </TabContent>
                        </Row>
                        <DeleteConfirmationByInputModal isOpen={deleteModal} toggle={tog_DeleteModal} onInputChange={setModalInput} originalValue="Drone" modalInput={modalInput} onDelete={tog_DeleteModal} />
                    </Container>
                </div>
            </Suspense>
        </React.Fragment>
    )
}

export default ManageAssets;