import React from 'react';
import { LOGO_URL } from '../utils/constants';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='header'>
        
        <div className="logo">
            <img src={LOGO_URL}/>
        </div>

        <div className="nav-links">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/cart">Cart</Link></li>
            </ul>
        </div>

    </div>
  )
}

export default Header