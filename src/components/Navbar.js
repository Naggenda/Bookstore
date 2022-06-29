import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import '../App.css';
import { FaUserAlt } from "react-icons/fa"; 

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo-sect">
              <span><Link to="/" className="logo">Bookstore CMS</Link></span>
           </div>
           <div className="nav-links">
              <ul>
                 <li><Link to="/Books" className="links"> Books </Link></li>
                 <li><Link to="/Category" className="links"> Category </Link></li>
              </ul>  
           </div>
           <div className="user">
              <Link to="/User" className="user-img"> <FaUserAlt /> </Link>
           </div>
        </div>
    )
}

export default Navbar
