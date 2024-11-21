import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../assets/assets'
import {Link} from 'react-router-dom';
const Navbar = () => {

  const [menu, setMenu] = useState("home")

  return (
    <div className='navbar'>
      <Link to="/"><img className='logo' src={assets.NFC_Logo} alt="" /></Link>
      <ul className='navbar-middle'>
        <Link to="/" onClick={()=>setMenu("home")} className={menu === "home"?"active":""}>Home</Link>
        <a href='#menu' onClick={()=>setMenu("menu")} className={menu === "menu"?"active":""}>Menu</a>
        <a href='#contact' onClick={()=>setMenu("about")} className={menu === "about"?"active":""}>About</a>
        <a href='#about' onClick={()=>setMenu("contact")} className={menu === "contact"?"active":""}>Contact</a>
      </ul>
      <div className="navbar-right">
        <a href='#menu'><button>Order Online</button></a>
      </div>
    </div>
  )
}

export default Navbar
