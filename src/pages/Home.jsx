import React from "react";
import PropTypes from "prop-types";
import "../styles/Home.css";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Tratamiento from "../components/Tratamientos";
import Perfil from "../components/Perfil";
import AntesDespues from "../components/AntesDespues";
import WsButton from "../components/WsButton";

import Blog from "../components/Blog";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { Box, Typography } from "@mui/material";
import { isMobile } from "react-device-detect";

function Home(props) {
  const footer = false;
  return (
    <div className="home">
      <div className="portada">
        <div className="overlay" />
        <h1> Clínica odontológica</h1>

        <p>Excelencia en tratamientos odontológicos para niños y adultos</p>

        <WsButton footer={footer} />

        {isMobile ? (
          <Box sx={{ position: "absolute", bottom: "3rem", zIndex: 100 }}>
            <Box
              sx={{
                border: "solid 3px white",
                borderRadius: 2,
                display: "flex",
                flexDirection: "column",
                padding: ".5rem",
                alignItems: "flex-start",
                justifyContent: "flex-start",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  padding: ".5rem",
                  alignItems: "center",
                }}
              >
                {" "}
                <PhoneIphoneOutlinedIcon />{" "}
                <Typography variant="h6"> 099 401 776 </Typography>{" "}
              </Box>
              <Box
                sx={{
                  display: "flex",
                  padding: ".5rem",
                  alignItems: "center",
                }}
              >
                {" "}
                <LocationOnOutlinedIcon />{" "}
                <Typography variant="h6">
                  {" "}
                  Pablo Galarza 3629 apto 205{" "}
                </Typography>{" "}
              </Box>
            </Box>
          </Box>
        ) : (
          <Box sx={{ position: "absolute", bottom: "3rem", zIndex: 100 }}>
            <Box
              sx={{
                display: "flex",
                padding: ".5rem",
                alignItems: "center",
                width: "100%",
                justifyContent: "space-around",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  border: "solid 3px white",
                  borderRadius: 2,
                  padding: ".5rem",
                  alignItems: "center",
                }}
              >
                {" "}
                <PhoneIphoneOutlinedIcon />{" "}
                <Typography variant="h6"> 099 401 776 </Typography>{" "}
              </Box>
              <Box
                sx={{
                  border: "solid 3px white",
                  borderRadius: 2,
                  display: "flex",
                  padding: ".5rem",
                  alignItems: "center",
                }}
              >
                {" "}
                <LocationOnOutlinedIcon />{" "}
                <Typography variant="h6">
                  {" "}
                  Pablo Galarza 3629 apto 205{" "}
                </Typography>{" "}
              </Box>
            </Box>
          </Box>
        )}
      </div>
      <div>
        {" "}
        <Tratamiento />
        <Perfil />
        <Blog />
        <AntesDespues />
      </div>
    </div>
  );
}

Home.propTypes = {};

export default Home;
