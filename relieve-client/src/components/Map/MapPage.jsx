// src/components/MapPage.jsx
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MapComponent from "./MapComponent";

const MapPage = () => {

  return (
    <div className="flex justify-end mx-10 mt-8">
      <MapComponent />
    </div>
  );
};

export default MapPage;
