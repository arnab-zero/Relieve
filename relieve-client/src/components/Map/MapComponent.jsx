import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const MapComponent = () => {
  const position = [23.777176, 90.399452];
  const [incidents, setIncidents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/incident')
      .then(res => res.json())
      .then(data => setIncidents(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const extractLatLng = (mapLink) => {
    const googleMapLinkPattern = /@(.*),(.*),/;
    const googleMapsSearchPattern = /q=(.*),(.*)/;

    if (googleMapsSearchPattern.test(mapLink)) {
      const match = mapLink.match(googleMapsSearchPattern);
      if (match) {
        return [parseFloat(match[1]), parseFloat(match[2])];
      }
    }

    if (googleMapLinkPattern.test(mapLink)) {
      const match = mapLink.match(googleMapLinkPattern);
      if (match) {
        return [parseFloat(match[1]), parseFloat(match[2])];
      }
    }

    return null;
  };

  return (
    <MapContainer center={position} zoom={8} style={{ height: "60vh", width: "80%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {incidents.map((incident, index) => {
        const latLng = extractLatLng(incident.mapLink);
        if (!latLng) return null;

        return (
          <Marker key={index} position={latLng}>
            <Popup>
              <div>
                <strong>Location:</strong> {incident.location}, {incident.upazilla}, {incident.zilla} <br />
                <strong>Request Type:</strong> {incident.requestType} <br />
                <strong>Contact:</strong> {incident.contact} <br />
                {incident.updateDetail && (
                  <div><strong>Update:</strong> {incident.updateDetail}</div>
                )}
                {incident.description && (
                  <div><strong>Description:</strong> {incident.description}</div>
                )}
                <strong>Status:</strong> {incident.status}
              </div>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default MapComponent;
