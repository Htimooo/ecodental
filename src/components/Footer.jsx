import React from "react";
import "../styles/Footer.css";
import { Box, Typography } from "@mui/material";
import Mapa from "../components/Mapa";


function Footer(props) {
  const currentYear = new Date().getFullYear();

  return (
    <div style={{width:'100%',backgroundColor:'#45c07d'}}>
    <Typography
            variant="h5"
            sx={{ color: "#fafafa", margin: "1.5rem", marginTop: "1rem" }}
          >
          Información de
            Contacto
          </Typography>
    <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Mapa />
        </div>
          <div className="footer">      
      <div><p>&copy; {currentYear} econdental.uy</p></div>
    </div>
    </div>
  );
}

Footer.propTypes = {};

export default Footer;
