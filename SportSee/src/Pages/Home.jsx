import React from 'react'
import Header from '../compoments/Header/Header'
import NavBar from '../compoments/NavBar/NavBar'
import KeyData from '../compoments/KeyData/KeyData'
import BarChart from '../compoments/BarChart/BarChart'

import "./Home.css"



export default function Home() {
  return (
    <>
      <Header></Header>
      <NavBar></NavBar>
      <section className='UserName'>
        <h1> Bonjour <span>Thomas</span></h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </section>
      <section className='UserData'>
        <section className='ChartData'> 
        <BarChart></BarChart>
        </section>
        <KeyData></KeyData>
      </section>
    </>
  )
}
