import React, { useEffect, useState } from 'react'
import Header from '../compoments/Header/Header'
import NavBar from '../compoments/NavBar/NavBar'
import KeyData from '../compoments/KeyData/KeyData'
import ActivityChart from '../compoments/BarChart/ActivityChart'
import SessionChart from '../compoments/SessionChart/SessionChart'
import PerformanceChart from '../compoments/Performance/PerformanceChart'
import ScoreChart from '../compoments/Score/ScoreChart'
import { useParams } from "react-router-dom";

import "./Home.css"

export default function Home() {

  const {id}= useParams();

  const [data, setData] = useState([]); 
  const {userInfos, keyData } = data;

  useEffect(()=>{
    const fetchData = async ()=> {
        const response = await fetch("http://localhost:3000/user/"+id)
        const UserData = await response.json()      
        setData(UserData.data)
        }
        fetchData(); 
  },[]);

  if (data.length === 0) return null;
  
  return (
    <>
      <Header></Header>
      <NavBar></NavBar>
      <section className='UserName'>
        <h1> Bonjour <span> {userInfos.firstName} </span></h1>
        {/* <h1> Bonjour <span> </span></h1> */}
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </section>
      <section className='UserData'>
        <section className='UserChart'> 
        <ActivityChart UserId={id}></ActivityChart>
        <div className='Chart2'>
          <SessionChart  UserId={id}></SessionChart>
          {/* <PerformanceChart  UserId={id}></PerformanceChart> */}
          {/* <ScoreChart  UserId={id}></ScoreChart> */}
        </div>
        </section>
        <KeyData calories ={keyData.calorieCount} proteins ={keyData.proteinCount} glucides={keyData.carbohydrateCount} lipides={keyData.lipidCount}></KeyData>
        {/* <KeyData > </KeyData> */}
      </section>
    </>
  )
}
