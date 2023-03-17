import React from 'react'
import CardShop from '../Components/Cards/CardShop'
import driver from "../assets/images/driver.png"
import carpenter from "../assets/images/carpenter.png"
import catering from "../assets/images/catering.png"
import deliveyMan from "../assets/images/delivery-man.png"
import deliveryTruck from "../assets/images/delivery-truck.png"
import electrician from "../assets/images/electrician.png"
import maid from "../assets/images/maid.png"
import massage from "../assets/images/massage.png"
import painter from "../assets/images/painter.png"
import photographer from "../assets/images/photographer.png"
import plumber from "../assets/images/plumber.png"
import rent from "../assets/images/rent.png"

import {   
  Card,
  Col,
  Container,
  Row,
  CardBody,
  CardTitle,
  Label,
  Button,
  Form,
  Input,
  InputGroup,
} from "reactstrap";

const Categories = () => {
  return (
    <Row>
        <Row className='px-4 mx-0'>
            <Col lg={12}>
              <Card>
                <CardBody>
                  <CardTitle className="h5 mb-4">Find Local Workers</CardTitle>

                  <Form className="row row-cols-lg-auto g-3 align-items-center d-flex" style={{justifyContent:"space-evenly"}}>
                      <Col lg={3}>
                        <div className="mb-3">
                          <Label htmlFor="formrow-InputState">State</Label>
                          <select
                            id="formrow-InputState"
                            className="form-control"
                          >
                            <option defaultValue>Choose...</option>
                            <option>...</option>
                          </select>
                        </div>
                      </Col>
                      <Col lg={3}>
                        <div className="mb-3">
                          <Label htmlFor="formrow-InputCity">City</Label>
                          <Input
                            type="text"
                            className="form-control"
                            id="formrow-InputCity"
                            placeholder="Enter Your Living City"
                          />
                        </div>
                      </Col>

                      <Col lg={3}>
                        <div className="mb-3">
                          <Label htmlFor="formrow-InputZip">Pin Code</Label>
                          <Input
                            type="text"
                            className="form-control"
                            id="formrow-InputZip"
                            placeholder="Enter Your Area Pin Code"
                          />
                        </div>
                      </Col>
                      <Col>
                     
                      <button type="submit" className="btn btn-primary w-md">
                        Find Local Workers
                      </button>

                      </Col>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        <CardShop Image = {driver} name = "Driver" worker = "15" expected = "₹1200" />
        <CardShop Image = {carpenter} name = "Mistri" worker = "15" expected = "₹1200" />
        <CardShop Image = {catering} name = "Catering" worker = "15" expected = "₹1200" />
        <CardShop Image = {deliveyMan} name = "Delivery Man" worker = "15" expected = "₹1200" />
        <CardShop Image = {deliveryTruck} name = "Delivery Truck" worker = "15" expected = "₹1200" />
        <CardShop Image = {electrician} name = "Electrician" worker = "15" expected = "₹1200" />
        <CardShop Image = {maid} name = "Maid" worker = "15" expected = "₹1200" />
        <CardShop Image = {massage} name = "Massage" worker = "15" expected = "₹1200" />
        <CardShop Image = {painter} name = "Painter" worker = "15" expected = "₹1200" />
        <CardShop Image = {photographer} name = "Photographer" worker = "15" expected = "₹1200" />
        <CardShop Image = {plumber} name = "Plumber" worker = "15" expected = "₹1200" />
        <CardShop Image = {rent} name = "Rent" worker = "15" expected = "₹1200" />

    </Row>
  )
}

export default Categories