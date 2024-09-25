import React, { useState } from "react";
import { MapPin, Phone, ExternalLink, CheckCircle } from "lucide-react";

const IncidentCard = ({ incident, setIncidents }) => {
  const {
    contact,
    description,
    eventId,
    incidentId,
    isVerified,
    location,
    mapLink,
    requestType,
    status,
    upazilla,
    userId,
    zilla,
  } = incident;

  const [currentStatus, setCurrentStatus] = useState(status);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [verified, setVerified] = useState(isVerified);

  const handleDropdownClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleOptionClick = async (option) => {
    // Update the current status immediately in state
    setCurrentStatus(option);
    setShowDropdown(!showDropdown);
  
    try {
      // Make the PUT request to update the status with the updated option
      const response = await fetch(
        `http://localhost:8080/incident/${incidentId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...incident,
            status: option.toLowerCase(), // Use the option directly
          }), // Send the status in lowercase
        }
      );
  
      if (response.ok) {
        // Check if the response is JSON, then parse it
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          const updatedIncident = await response.json();
          console.log("Incident updated successfully", updatedIncident);
        } else {
          const textResponse = await response.text(); // Handle plain text response
          console.log("Incident updated successfully:", textResponse);
        }
      } else {
        console.error("Failed to update incident status");
      }
    } catch (error) {
      console.error("Error updating incident:", error);
    }
  };
  

  const handleConfirm = () => {
    setCurrentStatus(selectedOption.toLowerCase()); // Update the status to the selected option
    setIncidents((prevIncidents) =>
      prevIncidents.map((inc) =>
        inc.incidentId === incidentId
          ? { ...inc, status: selectedOption.toLowerCase() }
          : inc
      )
    );
    setShowPrompt(false); // Hide the prompt
  };

  const handleCancel = () => {
    setShowPrompt(false); // Hide the prompt
  };

  // Status colors based on the three given status values
  const statusColors = {
    pending: "border-red-500",
    processing: "border-brown-500", // using Tailwind's "brown" class
    resolved: "border-green-500",
  };

  const statusColorClass = statusColors[currentStatus] || "border-gray-500";

  return (
    <div
      className={`mb-3 px-5 py-3 flex rounded-lg shadow-lg overflow-hidden border-2 ${
        currentStatus === "Pending"
          ? "border-red-600"
          : currentStatus === "Processing"
          ? "border-[#a58d34]"
          : "border-green-500"
      } relative`}
    >
      {/* Left side (2/5 width) */}
      <div className="w-2/5 bg-gray-50 p-4 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-2">
            <span
              className={`${
                currentStatus === "Pending"
                  ? "text-red-600"
                  : currentStatus === "Processing"
                  ? "text-[#a58d34]"
                  : "text-green-500"
              } font-semibold text-sm border rounded px-2 py-1`}
            >
              {currentStatus.charAt(0).toUpperCase() + currentStatus.slice(1)}
            </span>
            {verified && (
              <span className="flex items-center text-green-500 text-sm font-medium">
                <CheckCircle className="w-4 h-4 mr-1" />
                Verified
              </span>
            )}
          </div>
          <h3 className="text-lg font-bold text-gray-800 mb-1">
            {zilla}, {upazilla}
          </h3>
          <p className="text-sm text-gray-600 flex items-center mb-1">
            <MapPin className="w-4 h-4 mr-1" />
            {location}
          </p>
          <p className="text-sm text-gray-600 flex items-center mb-1">
            <Phone className="w-4 h-4 mr-1" />
            {contact}
          </p>
          {mapLink && (
            <a
              href={mapLink}
              className="text-blue-600 text-sm flex items-center hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="w-4 h-4 mr-1" />
              View on Map
            </a>
          )}
        </div>
      </div>

      {/* Right side (3/5 width) */}
      <div className="w-3/5 bg-white p-4 ">
        <div className="flex justify-between mb-2">
          <span className="text-sm font-semibold text-gray-700">
            Request Type: <span className="capitalize">{requestType}</span>
          </span>
          <span className="text-sm text-gray-600">ID: {incidentId}</span>
        </div>
        <p className="text-gray-800 mb-4">{description}</p>

        <div className="flex gap-5">
          <div className="relative">
            <button
              onClick={handleDropdownClick}
              className={`btn btn-outline mt-4 bg-blue-500 text-white font-medium py-2 px-4 rounded  transition duration-300 ${
                currentStatus === "Pending"
                  ? "bg-red-600"
                  : currentStatus === "Processing"
                  ? "bg-[#a58d34]"
                  : "bg-green-500"
              }`}
            >
              {currentStatus.charAt(0).toUpperCase() + currentStatus.slice(1)}
            </button>

            {/* Dropdown options */}
            {showDropdown && (
              <div className="absolute top-0 left-full ml-2 flex z-50 bg-white border border-gray-300 rounded shadow-md w-max">
                <ul className="flex">
                  <li
                    className="p-2 text-red-500 cursor-pointer"
                    onClick={() => handleOptionClick("Pending")}
                  >
                    Pending
                  </li>
                  <li
                    className="p-2 text-[#a97a30] hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleOptionClick("Processing")}
                  >
                    Processing
                  </li>
                  <li
                    className="p-2 text-green-600 cursor-pointer"
                    onClick={() => handleOptionClick("Resolved")}
                  >
                    Resolved
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncidentCard;