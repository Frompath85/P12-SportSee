import React, { useEffect, useState } from 'react'
import { getPerformance } from '../../services/Api';
import './Performance.css'
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis
} from "recharts";

export default function PerformanceChart(props) {

  const DataPerformance = getPerformance(props.UserId)
//console.log(DataPerformance)
  return (
    <div className='container2'>
      <RadarChart
      cx={180}
      cy={150}
      outerRadius={150}
      width={300}
      height={300}
      data={DataPerformance}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="kind" />
      {/* <PolarRadiusAxis /> */}
      <Radar
        dataKey="Value"
        stroke="#FF0101"
        fill="#FF0101"
        fillOpacity={0.7}
      />
    </RadarChart>
    </div>
  )
}
