
import '../styles/Navbar.css'
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link, useLocation,useNavigate } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import {  } from 'react-router-dom';
import "../styles/Navbar.css";
import IconButton from "@mui/joy/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import logo from '../assets/logotipo.png';
import { isMobile } from "react-device-detect";

function Navbar(props) {
  const [expandedNavbar, setExpandedNavbar] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setExpandedNavbar(false);
  }, [location]);

  const navigate = useNavigate ();

  const handleLogoClick = () => {
    navigate('/');
  };
  
  return (

    <>
    {/* <div className='navbar'>
      
      <div className='logotipo'>
        <img src={logo} alt="logotipo" style={{ maxWidth: "80px"}}/>
      </div>
       
       </div> */}
      

       {isMobile ? (
        <div className="navbar" id={expandedNavbar ? "open" : "close"}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {" "}
            <div onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
              {" "}
               <img style={{ maxWidth: "75px", marginLeft:"20px" }} src={logo} alt="logotipo-ecodental" /> 
            </div>
            <div className="toggleButton">
              <IconButton
                onClick={() => {
                  setExpandedNavbar((prev) => !prev);
                }}
              >
                {expandedNavbar ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
            </div>
          </div>
          <div className="links">
          <Link to="/">Inicio</Link>
        {/* <Link to="/tratamientos">Tratamientos</Link> */}
        <HashLink to="/#tratamientos">Tratamientos</HashLink>
        <Link to="/financiamiento">Financiamiento</Link>
        <Link to="/blog">Blog</Link>
        <HashLink to="/#mapa">Contacto</HashLink>
          </div>
        </div>
        ):(
          <div className="navbar" id={expandedNavbar ? "open" : "close"}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              maxWidth:'75%',
              marginLeft:'auto',
              marginRight:'auto'
            }}
          >
            {" "}
            <div onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
              {" "}
              <img style={{ maxWidth: "75px" }} src={logo} alt="escudo-capurro" />
            </div>
           
          
          <div className="links">
          <Link to="/">Inicio</Link>
        {/* <Link to="/tratamientos">Tratamientos</Link> */}
        <HashLink to="/#tratamientos">Tratamientos</HashLink>
        <Link to="/financiamiento">Financiamiento</Link>
        <Link to="/blog">Blog</Link>
        <HashLink to="/#mapa">Contacto</HashLink>
          </div>
          </div>
        </div>
    
        )}
        </>
  )
}



export default Navbar
