import React from "react";
import DroneImage from "../../../assets/images/droneImage.jpg";
import { Badge, Card, CardBody, CardText, Col, Container, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink, Row, TabContent, Table, TabPane, UncontrolledDropdown } from "reactstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";


const AllAssetsTable = (props) => {
    return(
            <Card>
            <CardBody>
                <div className="table-responsive overflow-visible">
                    <Table className="table table-hover">
                        <thead className="table-light">
                            <tr>
                                <th>#</th>
                                <th>Asset</th>
                                <th>Name</th>
                                <th>Serial Number</th>
                                <th>Category</th>
                                <th>Asset Status</th>
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
                                <td>
                                    <Badge
                                        className={"font-size-11 badge-soft-light"}
                                        color={"success"}
                                        pill
                                    >
                                        Available
                                    </Badge>
                                </td>
                                <td>07-07-2022</td>
                                <td>
                                    <UncontrolledDropdown>
                                        <DropdownToggle href="#" className="card-drop" tag="i">
                                            <i className="mdi mdi-dots-horizontal font-size-18" />
                                        </DropdownToggle>
                                        <DropdownMenu className="dropdown-menu-end">
                                            <Link to={"/assets/1"}>
                                                <DropdownItem
                                                        href="#"
                                                        onClick={() => console.log("1")}
                                                >
                                                    <i className="mdi mdi-eye font-size-16 text-success me-1" />{" "}
                                                    View
                                                </DropdownItem>                                            
                                            </Link>
                                            <Link to={"/requestAsset/1"}>
                                                <DropdownItem
                                                        href="#"
                                                        onClick={() => console.log("1")}
                                                >
                                                    <i className="mdi mdi-pencil font-size-16 text-warning me-1" />{" "}
                                                    Request
                                                </DropdownItem>
                                            </Link>
                                            <DropdownItem
                                                    href="#"
                                                    onClick={() => console.log("1")}
                                            >
                                                <i className="mdi mdi-pencil font-size-16 text-success me-1" />{" "}
                                                Edit
                                            </DropdownItem>
                                            <DropdownItem
                                                    href="#"
                                                    onClick={() => props.onDelete()}
                                            >
                                                <i className="mdi mdi-trash-can font-size-16 text-danger me-1" />{" "}
                                                Delete
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                </td>
                            </tr>
                            <tr scope="row" key="2">
                                <td>2</td>
                                <td>
                                    <img src={DroneImage} alt="" className="me-2" height="18" />
                                </td>
                                <td>Drone</td>
                                <td>C2143AD54</td>
                                <td>
                                    <Badge className="me-2 bg-warning">
                                        Miscellaneous
                                    </Badge>
                                </td>
                                <td>
                                <Badge
                                        className={"font-size-11 badge-soft-light"}
                                        color={"danger"}
                                        pill
                                    >
                                        Not Available
                                    </Badge>
                                </td>
                                <td>07-07-2022</td>
                                <td>
                                    <UncontrolledDropdown>
                                        <DropdownToggle href="#" className="card-drop" tag="i">
                                            <i className="mdi mdi-dots-horizontal font-size-18" />
                                        </DropdownToggle>
                                        <DropdownMenu className="dropdown-menu-end">
                                            <Link to={"/assets/2"}>
                                                <DropdownItem
                                                        href="#"
                                                        onClick={() => console.log("1")}
                                                >
                                                    <i className="mdi mdi-eye font-size-16 text-success me-1" />{" "}
                                                    View
                                                </DropdownItem>                                            
                                            </Link>
                                            <DropdownItem
                                                    href="#"
                                                    onClick={() => console.log("1")}
                                            >
                                                <i className="mdi mdi-pencil font-size-16 text-success me-1" />{" "}
                                                Edit
                                            </DropdownItem>
                                            <DropdownItem
                                                    href="#"
                                                    // onClick={() => onClickDelete("2")}
                                                    onClick={() => props.onDelete()}
                                            >
                                                <i className="mdi mdi-trash-can font-size-16 text-danger me-1" />{" "}
                                                Delete
                                            </DropdownItem>
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


AllAssetsTable.propTypes = {
    onDelete: PropTypes.func
}

export default AllAssetsTable;