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
import { Row } from 'reactstrap'

const Categories = () => {
  return (
    <Row>
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