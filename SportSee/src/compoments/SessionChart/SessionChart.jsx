import React, { useEffect, useState } from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

export default function SessionChart(props) {

  const [DataActivity, GetActivity] = useState([]); 
  //console.log(DataActivity.sessions)
  useEffect(()=>{
    const fetchData = async ()=> {
        const response = await fetch("http://localhost:3000/user/"+props.UserId+"/average-sessions")
        const UserData = await response.json()     
        GetActivity(UserData.data)
        }
        fetchData(); 
  },[]);

  return (
    <div>
      <LineChart 
      width={300}
      height={200}
      data={DataActivity.sessions}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="day" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="sessionLength"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
     
    </LineChart>
    </div>
  )
}
