import "./ActivityChart.css"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from "recharts"
import {getUserActivity} from '../../services/Api'
import RedCircle from '../../assets/Oval red.png'
import BlackCircle from '../../assets/Oval black.png'
import ActivityTooltips from '../BarChart/ActivityChartToolTip'


export default function ActivityChart(props) {
  const DataActivity = getUserActivity(props.UserId)

  const KilogramArray = DataActivity.map((el) => el.kilogram)
  const MinKg = Math.min(...KilogramArray)-30
  const MaxKg = Math.max(...KilogramArray)+10

  // const CaloriesArray = DataActivity.map((el) => el.calories)
  // const MinCal = Math.min(...CaloriesArray)-30
  // const MaxCal = Math.max(...CaloriesArray)+10

  return (
    <div className="Chart1">
      <div className="legend">
        <p className="TitreActivity">Activité quotidienne</p>
        <div className="ValueActivity">
          <p> <span><img src={BlackCircle} alt="" /></span>  poids (Kg)</p>
          <p><span><img src={RedCircle} alt="" /></span> Calories brûlées (kCal)</p>
        </div>
      </div>
    
     <BarChart
        width={600}
        height={220}
        data={DataActivity}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        barGap={8}
     >
     <CartesianGrid vertical={false} strokeDasharray="2 2" />
     <XAxis dataKey="day" 
            axisLine={false} 
            tickLine={false}
      />
     <YAxis datakey="kilogram"
						orientation="right"
            axisLine={false}
            tickLine={false} 
            tickCount={4}
            tickMargin={30}
            domain={[MinKg, MaxKg]}
      />
      {/* <YAxis
						datakey="calories"
						 //hide={true}
						 domain={[MinCal, MaxCal]}
			/> */}
      
     {/* <Tooltip  /> */}
     <Tooltip content={ActivityTooltips}
     />

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
