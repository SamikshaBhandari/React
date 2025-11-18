import React from 'react'
import "./Navbar.css"
import CreateBlog from './CreateBlog';
import { Link ,useNavigate} from 'react-router-dom';

function Navbar() {
  const Navigate=useNavigate();
  const handelsubmit=()=>{
    Navigate('/createblog')
  }

  return (
    <>
   <nav className="navbar">
    <div className="logo">mywebsite</div>
    <ul className="nav-links">
      <li><Link to="#">Blogs</Link></li>
      <li>< button onClick={handelsubmit}>Add Blog</button></li>
      
    </ul>
  </nav>


    </>
  )
}

export default Navbar;