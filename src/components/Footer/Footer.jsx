import React from 'react'
import './footer.css'
import { FaFacebook, FaInstagram, FaTelegramPlane, FaTwitter, FaWhatsapp } from "react-icons/fa";

const footer = () => {
  return (
  <footer>
  <div className="card text-center">
   <div className="card-header">
    ¡CONTÁCTANOS!
    </div>
    <div className="card-body">
    <h5 className="card-title">Redes Sociales</h5>
    <p className="card-text"><FaFacebook/> <FaInstagram/> <FaTelegramPlane/> <FaTwitter/> <FaWhatsapp/> </p>
   </div>
    <div className="card-footer text-muted">
    Desarrollado por José Cerna & Esteban Poblete
    </div>
   </div>
  </footer>
  )
}

export default footer



