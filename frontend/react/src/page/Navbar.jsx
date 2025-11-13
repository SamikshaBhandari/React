import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
    <nav>
      
       <Link to="#">Blog</Link>
      
      <Link to="#">Add</Link>

  </nav>

    </>
  )
}

export default Navbar;