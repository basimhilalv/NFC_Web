import React from 'react'
import './Navbar.css'
import { assets } from '../assets/assets'
import {Link} from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='navbar'>
      <Link to="/"><img className='logo' src={assets.NFC_Logo} alt="" /></Link>
      <ul className='navbar-middle'>
        <a href="#home" className='home'>Home</a>
        <a href="#menu" className='menu'>Menu</a>
        <a href="#about" className='about'>About</a>
        <a href="#contact" className='contact'>Contact</a>
      </ul>
      <div className="navbar-right">
        <button>Order Online</button>
      </div>
    </div>
  )
}

export default Navbar
