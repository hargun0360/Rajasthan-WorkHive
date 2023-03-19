import React from 'react'
import { Workerdet } from './Workerdet'
import '../assets/scss/app.scss'
import { Workcard } from './Workcard'
import Chart from './Chart'

const Workerside = () => {
  return (
    <div>
        <Workerdet/>
        <Workcard/>
        <Chart />
    </div>
  )
}

export default Workerside