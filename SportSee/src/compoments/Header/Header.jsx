import { Link } from 'react-router-dom'
import logo from "../../assets/logo.png"
import "./Header.css"

export default function Header() {
  return (
    <header>
      <Link to="#"><img src={logo} alt="logo SportSee" /></Link>
      <nav>
        <ul>
          <li><Link to="#">Accueil</Link></li>
          <li><Link to="#">Profil</Link></li>
          <li><Link to="#">Réglage</Link></li>
          <li><Link to="#">Communauté</Link></li>
        </ul>
      </nav>
    </header>
  )
}
