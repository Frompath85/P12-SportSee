import { useState, useEffect } from 'react'
import MokedData from "../data/data.json"
import { json } from 'react-router-dom';

const USE_MOCK_SERVICE = false;

export default function getUserInfos(id) {
    const [data, setData] = useState([]); 
    useEffect(()=>{
      const fetchData = async ()=> {
        let result = [];
        if(USE_MOCK_SERVICE){
          console.log("utilisation donnée mocké")
          result = MokedData.USER_MAIN_DATA.find(ele => ele.id == id)
        }
        else{
          console.log("utilisation donnée NON mocké")
          const response = await fetch("http://localhost:3000/user/"+id)
          const UserData = await response.json()  
          result = UserData.data;
        }
        setData(result)
      }
      return () => fetchData();   
     },[]);
  return data;
}

export function getUserActivity(id) {
    
     const [DataActivity, setActivity] = useState([]); 
     
      useEffect(()=>{
        const fetchData = async ()=> {
        let result2 = [] 
          if(USE_MOCK_SERVICE){
            result2 = MokedData.USER_ACTIVITY.find(ele => ele.userId == id).sessions
          }
          else{
            const response = await fetch("http://localhost:3000/user/"+id+"/activity")
            const UserData = await response.json()
            result2 = UserData.data.sessions;
          } 
          //modifier la date en mettant que le jour
          for(let i=0; i<result2.length; i++){
            const jour = new Date(result2[i].day).getDate()
             result2[i].day=jour;
          }  
        setActivity(result2)
        }
       return ()=> fetchData();   
      },[]);
  return DataActivity;
}

export function getUserSessions(id) {
  const [DataSession, setAverageSession] = useState([]); 
   useEffect(()=>{
      const fetchData = async ()=> {
        let result3 = []
        if(USE_MOCK_SERVICE){
          result3 = MokedData.USER_AVERAGE_SESSIONS.find(ele => ele.userId == id)
        }
        else{
            const response = await fetch("http://localhost:3000/user/"+id+"/average-sessions")
            const UserData = await response.json()   
            result3 = UserData.data
        }
        setAverageSession(result3.sessions)
      }
      return () => fetchData();   
   },[]);
 return DataSession;
}

export function getPerformance(id) {
  const [DataPerformance, setPerformance] = useState([]); 
   useEffect(()=>{
      const fetchData = async ()=> {
        let result4 = []
        if(USE_MOCK_SERVICE){
            result4 = MokedData.USER_PERFORMANCE.find(ele => ele.userId == id)
        }
        else{
            const response = await fetch("http://localhost:3000/user/"+id+"/performance")
            const UserData = await response.json()
            result4 = UserData.data
        }
      // modification des données selon demandé
        for(let i=0; i<result4.data.length; i++){
          result4.data[i].kind = result4.kind[i+1]
        }
        
        setPerformance(result4.data)
      }
      return () => fetchData();   
   },[]);   
 return DataPerformance;
}