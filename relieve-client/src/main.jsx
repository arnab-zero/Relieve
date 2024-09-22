import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import router from "./routers/router.jsx";
import { RouterProvider } from "react-router-dom";

// Leaflet imports
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
