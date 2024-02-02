import React from 'react'
import "./Navbar.css"
import Logo from "../../assets/qr-angadi.png"
import { Link } from 'react-router-dom'

export default function Navbar () {
  return (
    <div className='navbar'>
        <div className='navbar-wraper'>
                <div className='navbar-logo'>
                    <img src={Logo} width={90} height={50} alt='logo' />
                </div>
                <div className='navnar-menu'>
                  <Link to="/" className='list-items' href="/">Home</Link>
                  <Link to="/aboutus" className='list-items'>
                      About us
                  </Link>
                  <Link to="/qrcodesolutions"className='list-items'>QR Code Solutions</Link>
                  <li  className='list-items' href="/">Gamifying Solutions</li>
                  <li  className='list-items' href="/">Pricing</li>
                  <Link to="/profile"  className='list-items'>Profile</Link>
                  <li  className='list-items' href="/">Contact us</li>
                </div>
                <div className='navbar-login'>
                    <button className='btn-login'>Login</button>
                    <button className='btn-signup'>Sign up</button>
                </div>
        </div>
    </div>
  )
}