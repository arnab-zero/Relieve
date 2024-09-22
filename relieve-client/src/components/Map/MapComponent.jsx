// src/components/MapComponent.jsx
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const MapComponent = () => {
  const position = [23.777176, 90.399452]; // Replace with your desired latitude and longitude

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: "60vh", width: "45%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          Center of the map
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
