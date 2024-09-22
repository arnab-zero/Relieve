import React from "react";

const EventDetailCard = ({event}) => {
    const {eventName, } = event;
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h4 className="font-bold mb-2">{event.name}</h4>
      <p>
        <strong>Disaster:</strong> {event.disaster}
      </p>
      <p>
        <strong>Time Range:</strong> {event.timeRange}
      </p>
      <p>
        <strong>Area:</strong> {event.area}
      </p>
      <p>
        <strong>Coordinators:</strong> {event.coordinators}
      </p>
    </div>
  );
};

export default EventDetailCard;
