import React from 'react'
import { Workerdet } from './Workerdet'
import '../assets/scss/app.scss'
import { Workcard } from './Workcard'
import Chart from './Chart'
import Navbar from '../Components/Navbar'

const Workerside = () => {
  return (
    <div>
      <Navbar />
        <Workerdet/>
        <Workcard/>
        <Chart />
    </div>
  )
}

export default Workerside