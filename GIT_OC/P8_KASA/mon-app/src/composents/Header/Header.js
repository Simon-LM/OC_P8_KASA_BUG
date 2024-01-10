import { Link } from 'react-router-dom'

// import redLogo from '../Header/Logo_Kasa_red.png'a
import redLogo from '../../assets/images/Logo_Kasa_red.png'
import './Header.scss'

function Header() {
  return (
    <div className="header">
      <img src={redLogo} className="header__logo" alt="logo" />
      <nav className="header__menu">
        <Link className="links" to="/">
          Accueil
        </Link>
        <Link className="links" to="/about">
          À Propos
        </Link>
      </nav>
    </div>
  )
}

export default Header