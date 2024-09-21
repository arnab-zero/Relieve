import { useState } from "react";

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

  const handleStatusChange = (newStatus) => {
    setCurrentStatus(newStatus);

    // Update the incidents state
    setIncidents((prevIncidents) =>
      prevIncidents.map((inc) =>
        inc.incidentId === incidentId ? { ...inc, status: newStatus } : inc
      )
    );

    // Here you would typically also make an API call to update the backend
    // For example:
    // fetch(`http://localhost:8080/incident/${incidentId}`, {
    //     method: 'PATCH',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ status: newStatus }),
    // }).then(response => response.json())
    //   .then(data => console.log('Success:', data))
    //   .catch((error) => console.error('Error:', error));
  };

  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between bg-gray-100 border border-gray-300 rounded-lg shadow-lg p-4 mb-4">
      {/* Left Section: Zilla, Upazilla, and Contact */}
      <div className="flex flex-col md:w-1/3">
        <h3 className="text-lg font-bold text-gray-600">
          {zilla}, {upazilla}
        </h3>
        <span
          className={`text-sm ${
            isVerified ? "text-green-500" : "text-red-500"
          }`}
        >
          {isVerified ? "Verified" : "Not Verified"}
        </span>
        <p className="text-gray-600">Contact: {contact}</p>
      </div>

      {/* Center Section: Location, Request Type, and Status */}
      <div className="flex flex-col md:w-1/3 my-4 md:my-0">
        <p className="text-gray-600">Location: {location}</p>
        {mapLink && (
          <a
            href={mapLink}
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on Map
          </a>
        )}
        <p className="text-gray-600">Request Type: {requestType}</p>
        <div className="flex items-center">
          <p
            className={`text-gray-600 ${
              currentStatus === "pending"
                ? "text-yellow-500"
                : currentStatus === "resolved"
                ? "text-green-500"
                : "text-red-500"
            }`}
          >
            Status: {currentStatus}
          </p>
          {/* <select
            value={currentStatus}
            onChange={(e) => handleStatusChange(e.target.value)}
            className="ml-2 p-1 border rounded"
          >
            <option value="pending">Pending</option>
            <option value="in progress">In Progress</option>
            <option value="resolved">Resolved</option>
          </select> */}
        </div>
      </div>

      {/* Right Section: Event and Incident Details */}
      <div className="flex flex-col md:w-1/3 text-gray-600">
        <p>Event ID: {eventId}</p>
        <p>Incident ID: {incidentId}</p>
        {updateDetail && <p className="text-sm">Update: {updateDetail}</p>}
        <p>Description: {description}</p>
      </div>
    </div>
  );
};

export default IncidentCard;
