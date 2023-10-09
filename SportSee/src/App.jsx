import Home from "./Pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {

  const isDataMocked = true;

  if(isDataMocked){
    fetch('./datamocked.json')
  } else {
    fetch('http://localhost:3000/user/12/')
  }
  
  return (
    <Router>
            <Routes>
                <Route path="/" element={<Home />} />           
            </Routes>
    </Router> 
  )      
}

export default App
