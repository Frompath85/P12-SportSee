import React, { useEffect, useState } from 'react'
import { getUserSessions } from '../../services/Api';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Rectangle
} from "recharts";
import SessionsTooltips from './SessionsTooltips';
import  './SessionChart.css'

export default function SessionChart(props) {

  const averageSessions = getUserSessions(props.UserId)
 // console.log(averageSessions)// execution 4fois !!!!

  function CustomizedCursor(props){
    console.log("x, y")
    const { points } = props
   const { x, y } = points[0]
    
    return (
      <Rectangle
        fill="black"
        opacity={0.1}
        width={100}
        height={700}
        x={x}
        y={y - 20}
      />
    )
  }

  return (
    <div className='container1'>
      <p className='title'>Durée moyenne des sessions</p>
      <LineChart className='diagramme' width={200} height={140} data={averageSessions}>
      <XAxis 
        dataKey="day" 
        color="#fff" 
        tickLine={false}
        axisLine= {false}
        stroke="rgba(255, 255, 255, 0.5)"
        tick={{ fontSize: 12 }}
        padding={{ left: 10, right: 10 }}
        />
      <YAxis 
        hide={true}
        dataKey={"sessionLength"} 
        />
      <Tooltip 
        content={SessionsTooltips}
        cursor={CustomizedCursor}  
      />
  
      <Line
      width={200}
        type="monotone"
        dataKey="sessionLength"
        stroke="#FFFFFF67"
        strokeWidth={2}
        dot={false}
        activeDot={{
              stroke: "rgba(255, 255, 255, 0.3)",
							strokeWidth: 10,
              r: 4,
              fill: "rgba(255, 255, 255, 255)" }}
      />
     
    </LineChart>
    </div>
  )
}
