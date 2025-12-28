import React from 'react'
import './Navbar.css'
import { useNavigate } from 'react-router-dom'
const NavBar = () => {
  const navigate =  useNavigate()
  return (
    <>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet"></link>
    
<nav className="navbar">
        <div className="logo">
            <a href="/">  C<span>MS</span></a>
        </div>

    
        <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a onClick={()=> navigate('/createblog')}>Create</a></li>
            <li><a href="/portfolio">Portfolio</a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>
        
        
        <a href="#" className="cta-button">Get Started</a>
    </nav>

    </>
  )
}

export default NavBar