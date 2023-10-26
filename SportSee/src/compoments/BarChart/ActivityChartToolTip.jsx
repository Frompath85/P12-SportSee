import './ActivityChart.css'

export default function ActivityTooltips({active, payload}){
    if(active){
    return  <div className="activity-tooltips">
              <p>{payload[0].value}kg</p>
              <p>{payload[1].value}kCal</p>
           </div>
  }
}
