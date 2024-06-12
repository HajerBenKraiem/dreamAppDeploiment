import React from 'react';
import "../styles/MapComponent.scss"; // Assurez-vous que le chemin est correct

const MapComponent = () => {
  return (
    <div className="map-form-container">
      <p className="map-description">Discover your destination by exploring the map below</p>
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.292292615509614!3d48.85837007928746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1647531560805!5m2!1sfr!2sfr" 
        width="1300" 
        height="400" 
        allowFullScreen 
        loading="lazy"
        className="embedded-map"
      ></iframe>
    </div>
  );
};

export default MapComponent;
