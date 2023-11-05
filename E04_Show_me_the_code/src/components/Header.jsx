import React from 'react'

function Header() {
  return (
    <div className='header'>
        
        <div className="logo">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSddccotAtSgd1R7LzWO7dn9PV2Zdc7_IgVhw&usqp=CAU" alt="" srcset="" />
        </div>

        <div className="nav-links">
            <ul>
                <li>Home</li>
                <li>Food</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>

    </div>
  )
}

export default Header