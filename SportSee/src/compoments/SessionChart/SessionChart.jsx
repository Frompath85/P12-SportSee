import  { useState } from 'react'
import { getUserSessions } from '../../services/Api';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";
import SessionsTooltips from './SessionsTooltips';
import  './SessionChart.css'

export default function SessionChart(props) {

const averageSessions = getUserSessions(props.UserId)

 const [overlayX, setOverlayX] = useState(null);
 const [widthValue, setOverlayXWidth] = useState(null);

 const handleClick = (e) => {
    if(e){
      setOverlayX(e.activeCoordinate.x);
      setOverlayXWidth(200 - e.activeCoordinate.x)
    }
    else{
      setOverlayX(200); 
      setOverlayXWidth(0)  }
 }
  
 const StyleOverlay = {
  position :'absolute',
  background: '#000000',
  opacity : '0.2',
  height: '200px',
  width : widthValue,
  left: overlayX
}

  return (
    <div className='container1'>
      <p className='title'>Durée moyenne des sessions</p>
      <div className="overlay" style={StyleOverlay} />
      <LineChart onClick={handleClick} className='diagramme' width={200} height={140} data={averageSessions}>
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