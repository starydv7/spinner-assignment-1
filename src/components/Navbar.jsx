import React from 'react'
import "./navbar.css";
import logo from "../assets/Luxi-Hosting-Logo.png";
import sett from "../assets/Shape.png";
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='header'>
      <div className='navbar'>
      <div className='menu'>
        <Link to=""><img src={logo}alt="logo" className='logoImg'/></Link>
        
      </div>
      <div className='menu'>
      <Link to="/social" className='links'>
        <h3 className='h3'>Socail</h3>
      </Link>
      </div>
      <div className='menu'>
      <Link to="/features" className='links'>Features</Link>
      </div>
      <div className='menu'><Link to="/stories" className='links'>Stories</Link></div>
      <div className='menu'><Link to="/comm" className='links'>Community</Link></div>
      <div className='menu'><Link to="/blog" className='links'>Blog</Link></div>
      <div className='menu'><Link to="/login" className='links'>Login</Link></div>
      <div className='menu'><Link to="/social" className='details'>
        <button className='btn'>See Details</button></Link></div>
      <div className='menu'>
      <Link to="/social">  <img src={sett}alt="settings" className='settingImg'/></Link>
      </div>
      </div>
    </div>
  )
}

export default Navbar;
