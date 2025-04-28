
import React from "react";
import "../styles/Whatsapp.css";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';



const WhatsAppButton = () => {
  const phoneNumber = "59899401776"; 
  const message = "Quiero agendar una consulta";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappLink}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat en WhatsApp"
    >
     <WhatsAppIcon sx={{color:'#fafafa'}} />
     
    </a>
  );
};

export default WhatsAppButton;