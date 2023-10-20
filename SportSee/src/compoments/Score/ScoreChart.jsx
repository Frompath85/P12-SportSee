import React from 'react'
import { PieChart, Pie, Sector, Cell } from "recharts";
import './Score.css'

export default function ScoreChart(props) {
 const score = props.UserScore;
 const data = [
  { name: "score", value: score },
  { name: "no score", value: 1 - score }
];
const COLORS =['#FF0000',"#8884d8"]
  return (
    <div className='container3'>  
      <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx={100}
        cy={100}
        innerRadius={73}
        outerRadius={85}
        paddingAngle={0}
        startAngle={90}
        dataKey="value"
      >
      {/* <Cell  fill= "#FF0000" /> */}
      {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
      ))}
      
      </Pie>
    </PieChart>
  </div>
  )
}
