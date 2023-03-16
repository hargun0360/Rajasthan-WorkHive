import React, { useState } from 'react'
import { Link } from "react-router-dom";
// import 'react-drawer/lib/react-drawer.css';
// reactstrap
import { Row, Col, Dropdown, DropdownToggle, DropdownMenu } from "reactstrap";
import "../assets/scss/bootstrap.scss"
import "../assets/scss/theme.scss"
import "../assets/scss/app.scss"
import "../assets/scss/icons.scss"
import "../assets/scss/chartist.scss"
import "../assets/scss/datatables.scss"
import "../assets/scss/tasks.scss"
import megamenu from "../assets/images/megamenu-img.png"
import NotificationDropdown from './CommonForBoth/TopbarDropdown/NotificationDropdown';
import ProfileMenu from './CommonForBoth/TopbarDropdown/ProfileMenu'


const Navbar = (props) => {
    const [menu, setMenu] = useState(false);
    const [isSearch, setSearch] = useState(false);

    return (<>
        <header id="page-topbar" style={{ left: "0" , display:"flex" , justifyContent:"space-between" , width:"100vw" }}>
            <div className="navbar-header" >
                <div className="d-flex mx-5">

                    <form className="app-search d-none d-lg-block">
                        <div className="position-relative">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search..."
                            />
                            <span className="bx bx-search-alt" />
                        </div>
                    </form>
                    <Dropdown
                        className="dropdown-mega d-none d-lg-block ms-2"
                        isOpen={menu}
                        toggle={() => setMenu(!menu)}
                    >
                        <DropdownToggle
                            className="btn header-item "
                            caret
                            tag="button"
                        >
                            Categories <i className="mdi mdi-chevron-down" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-megamenu">
                            <Row>
                                <Col sm={8}>
                                    <Row>
                                        <Col md={4}>
                                            <h5 className="font-size-14 mt-0">
                                                UI Components
                                            </h5>
                                            <ul className="list-unstyled megamenu-list">
                                                <li>
                                                    Lightbox
                                                </li>
                                                <li>
                                                    Range Slider
                                                </li>
                                                <li>
                                                    Sweet Alert
                                                </li>
                                                <li>
                                                    Rating
                                                </li>
                                            </ul>
                                        </Col>

                                        <Col md={4}>
                                            <h5 className="font-size-14 mt-0">
                                                Applications
                                            </h5>
                                            <ul className="list-unstyled megamenu-list">
                                                <li>
                                                    Lightbox
                                                </li>
                                                <li>
                                                    Range Slider
                                                </li>
                                                <li>
                                                    Sweet Alert
                                                </li>
                                                <li>
                                                    Rating
                                                </li>
                                            </ul>
                                        </Col>

                                        <Col md={4}>
                                            <h5 className="font-size-14 mt-0">
                                                Extra Pages
                                            </h5>
                                            <ul className="list-unstyled megamenu-list">
                                                <li>
                                                    Lightbox
                                                </li>
                                                <li>
                                                    Range Slider
                                                </li>
                                                <li>
                                                    Sweet Alert
                                                </li>
                                                <li>
                                                    Rating
                                                </li>
                                            </ul>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col sm={4}>
                                    <Row>
                                        <Col sm={6}>
                                            <h5 className="font-size-14 mt-0">
                                ``                UI Components
                                            </h5>
                                            <ul className="list-unstyled megamenu-list">
                                                <li>
                                                    Lightbox
                                                </li>
                                                <li>
                                                    Range Slider
                                                </li>
                                                <li>
                                                    Sweet Alert
                                                </li>
                                                <li>
                                                    Rating
                                                </li>
                                            </ul>
                                        </Col>

                                        <Col sm={5}>
                                            <div>
                                                <img
                                                    src={megamenu}
                                                    alt=""
                                                    className="img-fluid mx-auto d-block"
                                                />
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </DropdownMenu>
                    </Dropdown>
                </div>

                <div className='d-flex' style={{width:"65vw" , justifyContent:"right"}}>

                    <div className='d-flex' style={{alignItems:"center" , marginRight:"15px" , cursor:"pointer"}}> Booking History</div>

                    <div className=''>
                        <NotificationDropdown />

                    </div>
                    <div className=''>
                        <ProfileMenu />
                    </div>
                </div>

                <div className="d-flex">
                    <div className="dropdown d-inline-block d-lg-none ms-2">
                        <button
                            type="button"
                            className="btn header-item noti-icon"
                            id="page-header-search-dropdown"
                            onClick={() => setSearch(!isSearch)}
                        >
                            <i className="mdi mdi-magnify" />
                        </button>
                        <div
                            className={
                                isSearch
                                    ? "dropdown-menu dropdown-menu-lg dropdown-menu-end p-0 show"
                                    : "dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                            }
                            aria-labelledby="page-header-search-dropdown"
                        >
                            <form className="p-3">
                                <div className="form-group m-0">
                                    <div className="input-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder={"Search" + "..."}
                                            aria-label="Recipient's username"
                                        />
                                        <div className="input-group-append">
                                            <button className="btn btn-primary" type="submit">
                                                <i className="mdi mdi-magnify" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </>
    )
}

export default Navbar