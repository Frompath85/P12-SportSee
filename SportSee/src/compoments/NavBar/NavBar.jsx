import "./NavBar.css"
import { Link } from "react-router-dom"
import icon1 from "../../assets/icon1.png"
import icon2 from "../../assets/icon2.png"
import icon3 from "../../assets/icon3.png"
import icon4 from "../../assets/icon4.png"

export default function NavBar() {
  return (
    <div className="LeftNav">
        <nav>
          <ul>
              <li><Link to="#"> <img src={icon1} alt='Meditation' /></Link></li>
              <li><Link to="#"> <img src={icon2} alt='Swimming' /></Link></li>
              <li><Link to="#"> <img src={icon3} alt='Bike' /></Link></li>
              <li><Link to="#"> <img src={icon4} alt='Dumbell' /></Link></li>
            </ul>
        </nav>
        <p>Copyright, SportSee 2020</p>
    </div>
  
  )
}
