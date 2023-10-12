import React, { useEffect, useState } from 'react'
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis
} from "recharts";

export default function PerformanceChart(props) {

  const [DataActivity, GetActivity] = useState([]); 
  console.log(DataActivity.kind)
  console.log(DataActivity.data)
  useEffect(()=>{
    const fetchData = async ()=> {
        const response = await fetch("http://localhost:3000/user/"+props.UserId+"/performance")
        const UserData = await response.json()     
        GetActivity(UserData.data)
        }
        fetchData(); 
  },[]);

  return (
    <div>
       <RadarChart
      cx={180}
      cy={150}
      outerRadius={150}
      width={500}
      height={500}
      data={DataActivity.data}
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
