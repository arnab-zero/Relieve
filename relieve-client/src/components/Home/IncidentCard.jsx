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
    updateDetail,
    userId,
    zilla,
  } = incident;
  const [currentStatus, setCurrentStatus] = useState(status);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const handleDropdownClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setShowPrompt(true); // Show the confirmation prompt
  };

  const handleConfirm = () => {
    setShowPrompt(false);
    alert(`${selectedOption} confirmed!`); // Placeholder for actual action
  };

  const handleCancel = () => {
    setShowPrompt(false); // Hide the prompt
  };

  const handleStatusChange = (newStatus) => {
    setCurrentStatus(newStatus);
    setIncidents((prevIncidents) =>
      prevIncidents.map((inc) =>
        inc.incidentId === incidentId ? { ...inc, status: newStatus } : inc
      )
    );
  };

  const statusColors = {
    pending: "red",
    processing: "blue",
    resolved: "green",
    verified: "green",
  };

  const statusColor = statusColors[currentStatus] || "gray";

  return (
    <div
      className={`mb-3 px-5 py-3 flex rounded-lg shadow-lg overflow-hidden border-2 border-${statusColor}-500`}
    >
      {/* Left side (2/5 width) */}
      <div className="w-2/5 bg-gray-50 p-4 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-2">
            <span
              className={`text-${statusColor}-500 font-semibold text-sm border border-${statusColor}-500 rounded px-2 py-1`}
            >
              {currentStatus.charAt(0).toUpperCase() + currentStatus.slice(1)}
            </span>
            {isVerified && (
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
      <div className="w-3/5 bg-white p-4">
        <div className="flex justify-between mb-2">
          <span className="text-sm font-semibold text-gray-700">
            Request Type: <span className="capitalize">{requestType}</span>
          </span>
          <span className="text-sm text-gray-600">ID: {incidentId}</span>
        </div>
        <p className="text-gray-800 mb-4">{description}</p>
        {/* {updateDetail && (
          <div className="bg-gray-100 p-2 rounded">
            <p className="text-sm text-gray-700">
              <span className="font-semibold">Update:</span> {updateDetail}
            </p>
          </div>
        )} */}

        <div className="flex gap-5">
          <button
            onClick={() => {
              /* Implement update logic */
            }}
            className="mt-4 bg-blue-500 text-white font-medium py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
          >
            Update
          </button>
          <div>
            <button
              onClick={handleDropdownClick}
              className="mt-4 bg-blue-500 text-white font-medium py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
            >
              Update
            </button>

            {/* Dropdown options */}
            {showDropdown && (
              <div className="relative z-20">
                <ul className="absolute bg-white border border-gray-300 rounded shadow-md mt-2 w-48">
                  <li
                    className="p-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleOptionClick("Update")}
                  >
                    Update
                  </li>
                  <li
                    className="p-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleOptionClick("Update1")}
                  >
                    Update1
                  </li>
                  <li
                    className="p-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleOptionClick("Update2")}
                  >
                    Update2
                  </li>
                </ul>
              </div>
            )}

            {/* Confirmation Prompt */}
            {showPrompt && (
              <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
                <div className="bg-white p-6 rounded shadow-lg">
                  <p className="text-lg font-semibold">
                    Are you sure you want to take care of it?
                  </p>
                  <div className="flex justify-end mt-4">
                    <button
                      onClick={handleConfirm}
                      className="bg-green-500 text-white font-medium py-2 px-4 rounded hover:bg-green-600 mr-2"
                    >
                      We are sure
                    </button>
                    <button
                      onClick={handleCancel}
                      className="bg-red-500 text-white font-medium py-2 px-4 rounded hover:bg-red-600"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncidentCard;
