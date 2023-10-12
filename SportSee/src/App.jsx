import Home from "./Pages/Home";
import { BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";

function App() {  
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Navigate to="/user/12" />} />  
          <Route path="/user/:id" element={<Home />} />      
      </Routes>
    </Router> 
  )      
}
export default App
