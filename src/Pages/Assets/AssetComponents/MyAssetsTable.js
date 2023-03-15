import React from "react";
import DroneImage from "../../../assets/images/droneImage.jpg";
import { Badge, Card, CardBody, CardText, Col, Container, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink, Row, TabContent, Table, TabPane, UncontrolledDropdown } from "reactstrap";
import { Link } from "react-router-dom";


const MyAssetsTable = () => {
    return(
            <Card>
            <CardBody>
                <div className="table-responsive">
                    <Table className="table table-hover mb-0">
                        <thead className="table-light">
                            <tr>
                                <th>#</th>
                                <th>Asset</th>
                                <th>Name</th>
                                <th>Serial Number</th>
                                <th>Category</th>
                                <th>Date of Addition</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr scope="row" key="1">
                                <td>1</td>
                                <td>
                                    <img src={DroneImage} alt="" className="me-2" height="18" />
                                </td>
                                <td>Drone</td>
                                <td>C2143AD54</td>
                                <td>
                                    <Badge className="me-2 bg-success">
                                        Drones
                                    </Badge>
                                </td>
                                <td>07-07-2022</td>
                                <td>
                                    <UncontrolledDropdown>
                                        <DropdownToggle href="#" className="card-drop" tag="i">
                                            <i className="mdi mdi-dots-horizontal font-size-18" />
                                        </DropdownToggle>
                                        <DropdownMenu className="dropdown-menu-end">
                                            <Link to={"/returnAssets/1"}>
                                                <DropdownItem
                                                        href="#"
                                                        onClick={() => console.log("1")}
                                                >
                                                    <i className="mdi mdi-keyboard-return font-size-16 text-success me-1" />{" "}
                                                    Return
                                                </DropdownItem>
                                            </Link>
                                            {/* /transferAssets/:id */}
                                            <Link to={"/transferAssets/1"}>
                                                <DropdownItem
                                                        href="#"
                                                        onClick={() => onClickDelete("2")}
                                                >
                                                    <i className="mdi mdi-transit-transfer font-size-16 text-warning me-1" />{" "}
                                                    Transfer
                                                </DropdownItem>                                            
                                            </Link>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                </td>
                            </tr>
                            <tr scope="row" key="2">
                                <td>1</td>
                                <td>
                                    <img src={DroneImage} alt="" className="me-2" height="18" />
                                </td>
                                <td>Battery</td>
                                <td>D423f55aaF</td>
                                <td>
                                    <Badge className="me-2 bg-success">
                                        Miscellaneous
                                    </Badge>
                                </td>
                                <td>07-07-2022</td>
                                <td>
                                    <UncontrolledDropdown>
                                        <DropdownToggle href="#" className="card-drop" tag="i">
                                            <i className="mdi mdi-dots-horizontal font-size-18" />
                                        </DropdownToggle>
                                        <DropdownMenu className="dropdown-menu-end">
                                            <Link to={"/returnAssets/2"}>
                                                <DropdownItem
                                                        href="#"
                                                        onClick={() => console.log("1")}
                                                >
                                                    <i className="mdi mdi-keyboard-return font-size-16 text-success me-1" />{" "}
                                                    Return
                                                </DropdownItem>
                                            </Link>
                                            {/* /transferAssets/:id */}
                                            <Link to={"/transferAssets/2"}>
                                                <DropdownItem
                                                        href="#"
                                                        onClick={() => onClickDelete("2")}
                                                >
                                                    <i className="mdi mdi-transit-transfer font-size-16 text-warning me-1" />{" "}
                                                    Transfer
                                                </DropdownItem>                                            
                                            </Link>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                </td>
                            </tr>

                        </tbody>
                    </Table>
                </div>
            </CardBody>
        </Card>
    )
}

export default MyAssetsTable;