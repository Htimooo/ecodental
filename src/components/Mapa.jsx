import React from "react";
import PropTypes from "prop-types";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import logo from "../assets/logo.png";
import { Grid, Typography } from "@mui/material";
import "../styles/Mapa.css";
import Markers from "./Markers";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { isMobile } from "react-device-detect";
import WsButton from "./WsButton";

const Mapa = (props) => {
  return (
    <div
      id="mapa"
      style={{
        backgroundColor: "#45c07d",
        width: "100%"
      }}
    >
      <Grid
        container
        xs={12}
        sx={{ margin: "0 auto", width: !isMobile ? "80%" : "100%" }}
      >
        <Grid item xs={isMobile ? 12 : 6}>
          <Typography
            variant="h6"
            sx={{ color: "#fafafa", margin: "1.5rem", marginTop: "1rem" }}
          >
            {" "}
            Zona World Trade Center{" "}
          </Typography>
          <MapContainer center={{ lat: -34.90203, lng: -56.16436 }} zoom={12}>
            <TileLayer
              url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Markers />
          </MapContainer>
        </Grid>
        <Grid item xs={isMobile ? 12 : 6}>
          <div
            style={{
              width: isMobile ? "auto" : "70%",
              margin: "0 auto",
              marginTop: isMobile ? "1.5rem" : "5rem",
              padding: ".3rem",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                color: "#fafafa",
                marginBottom: "1rem",
                justifyContent: isMobile ? "center" : "flex-start",
              }}
            >
              <PhoneIphoneOutlinedIcon />{" "}
              <Typography ml=".5rem" variant="h5">
                {" "}
                099 401 776{" "}
              </Typography>{" "}
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                color: "#fafafa",
                justifyContent: isMobile ? "center" : "flex-start",
                marginBottom: "1rem",
              }}
            >
              <EmailIcon />
              <Typography ml=".5rem" variant="h5">
                {" "}
                inesalvarezirrazabal@gmail.com
              </Typography>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                color: "#fafafa",
                justifyContent: isMobile ? "center" : "flex-start",
                marginBottom: "1rem",
              }}
            >
              {" "}
              <LocationOnIcon />
              <Typography ml=".5rem" variant="h5">
                {" "}
                Pablo Galarza 3629 apto 205
              </Typography>
            </div>
            <div style={{ width: isMobile ? "50%" : "50%", margin: "0 auto" }}>
              <WsButton footer />
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

Mapa.propTypes = {};

export default Mapa;
