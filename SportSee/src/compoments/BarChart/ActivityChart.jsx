import "./ActivityChart.css"
import React, { useEffect, useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from "recharts"
import {getUserActivity} from '../../services/Api'

export default function ActivityChart(props) {
  const DataActivity = getUserActivity(props.UserId)

  return (
    <div className="container">
      <div className="legend">
        <p className="TitreActivity">Activité quotidienne</p>
        <div className="ValueActivity">
          <p>poids (Kg)</p>
          <p>Calories brûlées (kCal)</p>
        </div>
      </div>
      
    
     <BarChart
     width={835}
     height={250}
     data={DataActivity}
     margin={{
       top: 5,
       right: 30,
       left: 20,
       bottom: 5
     }}
     >
     <CartesianGrid vertical={false} strokeDasharray="2 2" />
     <XAxis dataKey="day" />
     <YAxis  />
     <Tooltip />
     <Legend hide={true} />

     <Bar dataKey="kilogram"
           fill="#282D30" 
          barSize={7}
					radius={[50, 50, 0, 0]}/>

     <Bar dataKey="calories" 
          fill="#E60000"
          barSize={7}
					radius={[50, 50, 0, 0]} />
   </BarChart>
   
 </div>
    
  )
}
