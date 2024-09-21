import "./Navbar.css"
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <nav className='navbar-box'>
      <div className="navbar-logo">TechSymposium</div>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About Us</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contact</NavLink>
                </li>
                <li>
                    <NavLink to="/register">Register</NavLink>
                </li>
                
            </ul>
      </nav>
    </div>
  )
}
export default Navbar
