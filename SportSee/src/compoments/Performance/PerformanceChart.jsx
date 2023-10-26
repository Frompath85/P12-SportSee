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
      cx="50%" cy="50%"
       outerRadius="60%"
      width={190}
      height={190}
      data={DataPerformance}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="kind" 
            stroke="white"
						 tickLine={false}
             tickSize={10}
             tick={{ fontSize: 10 }}  
						 />
      <PolarRadiusAxis   />
      <Radar
        dataKey="value"
        stroke="#FF0101"
        fill="#FF0101"
        fillOpacity={0.7}
      />
    </RadarChart>

    </div>
  )
}
