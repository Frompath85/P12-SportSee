import React from 'react'
import { PieChart, Pie, Sector, Cell } from "recharts";
import './Score.css'

export default function ScoreChart(props) {
 const score = props.UserScore;
 //console.log(score)
//  if(!score)
//  console.log("nooooo score")

 const data = [
  { name: "score", value: score },
  { name: "no score", value: 1 - score}
];

  return (
    <div className='container3'>  
    <p className='ScoreTitle'>Score</p>
    <div className='objectif'><span>{score*100}%</span> <p>de votre <br /> objectif</p></div>
      <PieChart  width={200} height={160}>
        <Pie
          data={data}
          cx={95}
          cy={70}
          innerRadius={55}
          outerRadius={68}
          startAngle={90}
          endAngle={450}
          dataKey="value"
        >
        <Cell  fill= "#FF0000" cornerRadius={10} />
        <Cell  fill = "transparent" stroke="transparent"/>
      </Pie>
    </PieChart>
  </div>
  )
}
