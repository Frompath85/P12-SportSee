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

  function CustomizedCursor({points}){
    return (
      <Rectangle
        fill="black"
        opacity={0.1}
        width={500}
        height={700}
        x={points[1].x}
        y={-20}
        overflow={"visible"}
        accentHeight={'120%'}
      />
    )
  }

  return (
    <div className='container1'>
      <p className='title'>Durée moyenne des sessions</p>
      <LineChart className='diagramme' width={258}height={200} data={averageSessions}>
      <XAxis 
        dataKey="day" 
        color="#fff" 
        />
      <YAxis 
        hide={true}
        dataKey={"sessionLength"} 
        />
      <Tooltip 
        content={SessionsTooltips}
        cursor={CustomizedCursor}  
          />
      {/* <Tooltip content={"sessionLength"}/> */}
      <Line
        type="monotone"
        dataKey="sessionLength"
        stroke="#FFFFFF67"
        strokeWidth={2}
        activeDot={{
              stroke: "rgba(255, 255, 255, 0.5)",
							strokeWidth: 10,
               r: 5 }}
      />
     
    </LineChart>
    </div>
  )
}
