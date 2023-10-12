import "./ActivityChart.css"
import React, { useEffect, useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from "recharts"

export default function ActivityChart(props) {

  const [DataActivity, GetActivity] = useState([]); 
  useEffect(()=>{
    const fetchData = async ()=> {
        const response = await fetch("http://localhost:3000/user/"+props.UserId+"/activity")
        const UserData = await response.json()  
        //console.log(UserData)    
        GetActivity(UserData.data)
        }
        fetchData(); 
  },[]);

  return (
    <div>
      <p className="TitreActivity">Activité quotidienne</p>
    
     <BarChart
     width={600}
     height={300}
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
     <Bar dataKey="kilogram" fill="#282D30" />
     <Bar dataKey="calories" fill="#E60000" />
   </BarChart>
   
 </div>
    
  )
}
