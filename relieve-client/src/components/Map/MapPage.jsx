// src/components/MapPage.jsx
import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MapComponent from "./MapComponent";
import WeatherApp from "../weather/WeatherApp";
import AskAI from "../../pages/AskAI";

const MapPage = () => {
  const [active, setActive] = useState("weather")

  const handleMapButton = () => {
    setActive('map');
  }

  const handleWeatherButton = () => {
    setActive('weather');
  }

  return (
    <div className="container mx-auto">
      {/* <div className="flex justify-center my-10 gap-20">
        <button className={`text-xl font-semibold text-gray-500 ${active === 'map' ? "border-2 border-b-gray-500 border-t-0 border-l-0 border-r-0" : ""}`} onClick={handleMapButton}>Site Map</button>
        <button className={`text-xl font-semibold text-gray-500 ${active === 'weather' ? "border-2 border-b-gray-500 border-t-0 border-l-0 border-r-0" : ""}`} onClick={handleWeatherButton}>Weather Update</button>
      </div>
      <div className="">
        {
          active === "map" ? <MapComponent /> : <WeatherApp />
        }
      </div> */}

      <AskAI></AskAI>
    </div>
  );
};

export default MapPage;
