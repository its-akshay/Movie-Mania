import React from 'react';
import './Navbar.css'

import image from '../assets/mmm.png';
function Navbar() {
  return (
    <div className='navbar'>
      <img 
      className='navbarLogo'
      src = {image}
      alt = "Movie-Mania"
      />
    </div>
  )
}

export default Navbar