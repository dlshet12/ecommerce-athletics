import { useState } from 'react'
import logo from "../../Assest/logo.png";
import { NavLink } from "react-router-dom";
import  Hamburger  from '../../Assest/hamburger.png';
import favorite from '../../Assest/love.png';
import { useSelector } from 'react-redux';
import './navbar.css'
const Navbar = ( )=>{
    const [showNavbar, setShowNavbar] = useState(false)

    const handleShowNavbar = () => {
      setShowNavbar(!showNavbar)
    }
    const cartProducts = useSelector(state => state.cart)
    return(
        <nav className="navbar">
        <div className="container">
            <div className="logo">
        <div>ZARA</div>
         </div>
         <div className="menu-icon" onClick={handleShowNavbar}>
         <img src={Hamburger} style={{width:'30px',height:'35px'}}/>
        </div>
    
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
          <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/favorite"><img src={favorite} style={{height:'20px',width:'20px'}}/></NavLink>
            </li>
            <li>
              <NavLink to="/cart">My Bag {cartProducts.length}</NavLink>
            </li>
          </ul>
        </div>
        </div>
      </nav>
    )
}

export default Navbar