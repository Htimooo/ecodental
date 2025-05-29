import React from "react";
import { Button, Grid, Typography, Box } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import jovenOrtodoncia from "../assets/niña-ortodoncia.jpg";
import isotipo from '../assets/isoTipo.png'
import { isMobile } from "react-device-detect";
import CheckIcon from "@mui/icons-material/Check";

const LandingOrtopedia = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        backgroundColor:'#fafafa',
        paddingTop: isMobile ? "6.5rem" : "7.5rem",
      }}
    >
      <Box sx={{ backgroundColor: "#45c07d" }}>
        <Box item xs={12} md={12} py="2rem">
          <Typography
            variant="h1"
            textTransform="uppercase"
            sx={{
              fontSize: isMobile ? "2rem" : "4rem",
              color: "#fafafa",
              fontWeight: 700,
            }}
          >
            Ortodoncia
          </Typography>
          <Typography
            variant="h6"
            sx={{ color: "#fafafa" }}
            textTransform="uppercase"
          >
            Tratamientos con brackets y alineadores invisibles
          </Typography>
        </Box>
      </Box>
      <Grid
        container
        sx={{
          width: !isMobile ? "75%" : "100%",
          height: "100%",
          margin: "0 auto",
          maxWidth: "60rem",
        }}
      >
        {/* Hero Section */}
        <Grid item xs={12} md={6} py="2rem">
          <img
            src={jovenOrtodoncia}
            alt="Tratamiento Ortopedia"
            style={{
              width: isMobile ? "96%" : "70%",
              height: "auto",
              margin: "0 auto",
              borderRadius: "4px",
            }}
          />
        </Grid>
        <Grid item xs={12} md={6} py="2rem">
          <Box pb="1.5rem" sx={{ width: "85%", margin: "0 auto" }}>
            {[
              "Mejora la mordida",
              "Corrije dientes torcidos",
              "Favorece el crecimiento oseo",
              "Fomenta habitos saludables",
            ].map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <CheckIcon
                  fontSize="large"
                  color="success"
                  sx={{ marginRight: ".5rem" }}
                />
                <Typography sx={{ fontWeight: 700 }} variant="h6">
                  {item}
                </Typography>
              </Box>
            ))}
          </Box>
          <Box pb="1.5rem" sx={{ width: "70%", margin: "0 auto" }}>
            <a
              href="https://wa.me/59899401776?text=Quiero%20agendar%20una%20consulta"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="contained"
                color="success"
                startIcon={<WhatsAppIcon />}
                sx={{
                  textTransform: "none",
                  fontWeight: "bold",
                  width: "100%",
                }}
              >
                Agenda por WhatsApp
              </Button>
            </a>
          </Box>
          {!isMobile && (
            <Box
              p="1.5rem"
              sx={{
                width: "70%",
                margin: "0 auto",                
                borderRadius: "4px",
                textAlign: "center",               
                display:'flex',
                flexDirection:'column',
                alignItems:'center'
               
              }}
            >
              <Typography variant="h6" >
                Somos Econdental.uy 
              </Typography>
               <img
            src={isotipo}
            alt="Tratamiento Ortopedia"
            style={{
              width: "30%",
              height: "auto",
              margin: "0 auto",
             
            }}
          />
              <Typography mt='.5rem' variant="body-1" fontStyle='italic'>
               Escribinos
                por WhatsApp o completá el formulario y agendá tu consulta. ¡Tu
                nueva sonrisa empieza hoy!
              </Typography>
            </Box>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default LandingOrtopedia;
