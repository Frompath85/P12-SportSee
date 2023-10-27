import './SessionChart.css'

export default function SessionsTooltips({active, payload}){
   // console.log(payload)//Q : execuion plusieurs fois
    if(active){
        // console.log(payload)
        return <div className="sessions-tooltips">{payload[0].value} min</div>
    }
}