import React from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { Stack, Typography } from "@mui/material";
import "../styles/Tratamientos.css";
import {blogList} from '../helpers/BlogList'
import { tratamientosList } from "../helpers/TratamientosList";
import { isMobile } from "react-device-detect";
import BlogAsoc from '../components/BlogAsoc'

function Tratamiento(props) {
  const { id } = useParams();
  const tratamiento = tratamientosList[id - 1];

  return (
    <div
      style={{       
        height:'100%',
        marginTop: "6rem",
      }}
    >
      <div className="tratamiento">
      <div className="tratamientoOverlay"></div>
        <Typography variant="h1" sx={{ fontSize: !isMobile ? "3rem" : "2rem" }}>{tratamiento.name}</Typography>
      </div>

      <div
        style={{          
          height: "100%",
          width: isMobile ? "96%" : "60%",
          margin: "0 auto",
        }}
      >
        <div style={{width:'100%',display: "flex", ustifyContent: !isMobile ?'flex-start': "center", alignItems:'center', margin:'0 auto' }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent:  "center",
              width: "75px",
              height: "75px",
              margin: ".5rem",
              borderRadius: "50%",
              boxShadow: "0 15px 35px rgba(8, 160, 105, 0.2)",
            }}
          >
            <img
              style={{ width: "40px" }}
              src={tratamiento.icon}
              alt={tratamiento.name}
            />
          </div>

          <Typography
            sx={{
              fontSize: isMobile ? "2rem" : "2.6rem",
              textAlign: "start",
              margin:'2.5rem 0',
              marginLeft: !isMobile ?'2rem' :'.5rem'
            }}
            variant="h2"
          >
            {tratamiento.name}
          </Typography>
        </div>{" "}

      
        <Typography sx={{ textAlign: "start", margin:'2.5rem 0'}}> 
      {tratamiento.resumen.split('.').map((linea, index) => (
        <React.Fragment key={index}>
          {linea}
          <br />
        </React.Fragment>
      ))}
    </Typography>
      </div>
      <div
        style={{
          
          height: "100%",
          width: isMobile ? "96%" : "60%",
          margin: "2rem auto",
        }}
      >
        <Typography variant='h6' sx={{fontSize:isMobile ?'1rem': '', fontWeight: 700, textAlign: "start", marginBottom: '2rem', textAlign: isMobile ?'center': 'start' }}>
          Encuentra más información relativa a este tratamiento en nuestro blog
          odotológico:
        </Typography>

        <Stack sx={{ flexDirection: !isMobile ? 'row': 'column',  display:'flex', alignItems:'center', justifyContent:'flex-start'}}>
      {tratamiento.blogs.map((id) => {
        const cardInfo = blogList[id];  // Obtener la información correspondiente a cada ID
        return <BlogAsoc key={id} blog={cardInfo} />;
      })}
    </Stack>
        
      </div>
      
    </div>
  );
}

Tratamiento.propTypes = {};

export default Tratamiento;
