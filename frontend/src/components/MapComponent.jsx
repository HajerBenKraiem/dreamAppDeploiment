import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "../styles/MapComponent.scss"; // Assurez-vous que le chemin est correct

const MapComponent = () => {
  return (
    <div className="map-form-container">
      <h2>Map</h2>
      <MapContainer center={[51.505, -0.09]} zoom={13} className="small-map">
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
      {/* Autres éléments de votre formulaire ici */}
    </div>
  );
};

export default MapComponent;
