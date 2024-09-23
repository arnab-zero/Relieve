import CreateEventForm from "../pages/forms/EventCreationForm"; // Assuming the form component is imported
import { useEffect, useRef, useState } from "react";
import { FaCalendarPlus } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import EventDetailCard from "../components/EventDetailCard";

function CommunityDashboard() {
  const [isIncidentPopupVisible, setIsIncidentPopupVisible] = useState(false);
  const [isEventPopupVisible, setIsEventPopupVisible] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const popupRef = useRef(null);
  const location = useLocation();
  const { community, events } = location.state;
  console.log("Community from dashboard: ", community, events);

  const handleIncidentFormSubmit = () => {
    setIsIncidentPopupVisible(false);
  };

  const handleEventFormSubmit = () => {
    setIsEventPopupVisible(false);
  };

  const handleReportClick = () => {
    setIsIncidentPopupVisible(true);
  };

  // Function to close the form when clicked outside
  const handleCloseForm = (e) => {
    if (e.target.id === "formModal") {
      setIsFormOpen(false);
    }
  };

  // Handle form submission
  const handleFormSubmit = () => {
    setIsFormOpen(false); // Close the form once it's submitted
  };

  const handleCreateEventClick = () => {
    setIsEventPopupVisible(true);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsIncidentPopupVisible(false);
        setIsEventPopupVisible(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [popupRef]);

  return (
    <div className="flex w-full h-screen overflow-hidden">
      {/* Members List Section */}
      <div className="flex-grow-[2] bg-gray-100 p-4 overflow-y-auto scrollbar-hide">
        <h2 className="text-xl font-bold mb-4">Members List</h2>
        <div className="space-y-4">
          {community?.volunteers.map((member) => (
            <div key={member.id} className="flex items-center">
              <img
                src={member.profilePic}
                alt={`${member.name} profile`}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <p className="font-medium">{member.name}</p>
                {member.isCoordinator && (
                  <span className="text-green-500 text-sm">Co-ordinator</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Community Details Section */}
      <div className="flex-grow-[10] p-6 bg-white">
        <h2 className="text-2xl font-bold mb-6">{community?.orgName}</h2>
        <div className="flex space-x-4 mb-6">
          {/* Create Event Button */}
          <button
            onClick={handleCreateEventClick}
            className="btn btn-outline text-blue-600 text-lg"
          >
            <FaCalendarPlus /> Create Event
          </button>

          {/* Add Member Button */}
          <button className="flex items-center bg-blue-500 text-white py-2 px-4 rounded">
            <i className="mr-2">➕</i> Add Member
          </button>
        </div>
        <div className="mt-6">{/* Add any community details here */}</div>
      </div>

      {/* Events Details Section */}
      <div className="flex-grow-[1] p-4 bg-gray-100 overflow-y-auto scrollbar-hide">
        <div className="mb-8">
          <h3 className="text-lg font-bold mb-4">Ongoing Events</h3>
          <div className="space-y-4">
            {events.length !== 0 &&
              events
                .filter((event) => event.orgId === community.orgId) // Filter by orgId
                .map((event, index) => (
                  <EventDetailCard key={index} event={event} />
                ))}
          </div>
        </div>
      </div>

      {/* <div className="mb-8">
          <h3 className="text-lg font-bold mb-4">Upcoming Events</h3>
          <div className="space-y-4">
            {upcomingEvents.length !== 0 &&
              upcomingEvents.map((event, index) => (
                <EventDetailCard key={index} event={event} />
              ))}
          </div>
        </div> */}

      {/* <div className="mb-8">
          <h3 className="text-lg font-bold mb-4">Past Events</h3>
          <div className="space-y-4">
            {pastEvents.length !== 0 &&
              pastEvents.map((event, index) => (
                <EventDetailCard key={index} event={event} />
              ))}
          </div>
        </div> */}
      {/* </div> */}

      {/* Popup Modal for CreateEventForm */}
      {isEventPopupVisible && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
          <div
            ref={popupRef}
            className="bg-white rounded-lg shadow-lg p-6 relative w-[27%] max-h-[80vh] overflow-y-auto scrollbar-hide"
          >
            <CreateEventForm
              communityId={community.orgId}
              onSubmit={handleEventFormSubmit}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default CommunityDashboard;
