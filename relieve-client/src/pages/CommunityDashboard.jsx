import CreateEventForm from "../pages/forms/EventCreationForm"; 
import { useEffect, useRef, useState, useContext } from "react";
import { FaCalendarPlus } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import EventDetailCard from "../components/EventDetailCard";
import { AuthContext } from "./Authentication/AuthProvider";

function CommunityDashboard() {
  const [isIncidentPopupVisible, setIsIncidentPopupVisible] = useState(false);
  const [isEventPopupVisible, setIsEventPopupVisible] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false); // isAdmin state
  const popupRef = useRef(null);
  const location = useLocation();
  const { community, events } = location.state;
  // console.log("Community from dashboard: ", community, events);

  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user && community) {
      const isAdminCheck = user.communityIds.includes(community.orgId);
      setIsAdmin(isAdminCheck);
    }
  }, []);

  // console.log(isAdmin);
  
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
    <div className="grid grid-cols-5 w-full h-screen overflow-hidden">
      {/* Members List Section */}
      <div className=" bg-gray-100 p-4 overflow-y-auto scrollbar-hide">
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
      <div className="col-span-3 p-6 bg-white">
        <h2 className="text-3xl font-bold text-center text-blue-primary my-6">Community Dashboard</h2>

        <div className="my-10 flex flex-col md:flex-row justify-around">
          <figure className="max-w-lg md:p-20 bg-base-200 rounded-lg">
            <img src={community?.orgImage} alt="Shelter" className="rounded-lg" />
          </figure>

          <div className="py-4">
            <h2 className="text-4xl font-bold font-playfair">{community?.orgName}</h2>
            <p className="mt-4 text-xl text-gray-600 font-medium font-work-sans">
              Description : {community?.description}
            </p>
            <hr className="text-gray-500 my-4" />
            <p className="font-work-sans text-xl font-medium text-gray-600">
              {community?.location}
            </p>
            <hr className="text-gray-500 my-4" />

            <div className="flex gap-2 items-center md:gap-8 mt-6 font-work-sans">
              <h2 className="font-semibold text-black">Contacts:</h2>
              <p className="text-blue-primary font-work-sans gap-2 flex items-center md:gap-6">
                {community?.contactNumbers.map((contact, index) => (
                  <span key={index}>{contact}</span>
                ))}
              </p>
            </div>
            <hr className="text-gray-500 mt-5 md:mt-8" />
          </div>
        </div>

        {
          isAdmin && 
          <div className="flex space-x-4 mb-6">
          {/* Create Event Button */}
          {isAdmin && ( // Show only if the user is an admin
            <button
              onClick={handleCreateEventClick}
              className="btn btn-outline text-blue-600 text-lg"
            >
              <FaCalendarPlus /> Create Event
            </button>
          )}

          {/* Add Member Button */}
          {isAdmin && ( // Show only if the user is an admin
            <button className="flex items-center bg-blue-500 text-white py-2 px-4 rounded">
              <i className="mr-2">➕</i> Add Member
            </button>
          )}
        </div>
        }
      </div>

      {/* Events Details Section */}
      <div className=" p-4 bg-gray-100 overflow-y-auto scrollbar-hide">
        <div className="mb-8">
          <h3 className="text-lg font-bold mb-4">Ongoing Events</h3>
          <div className="space-y-4">
            {events.length !== 0 &&
              events
                .filter((event) => event.communityId === community.orgId) // Filter by orgId
                .map((event, index) => (
                  <EventDetailCard key={index} event={event} />
                ))}
          </div>
        </div>
      </div>

      {/* Popup Modal for CreateEventForm */}
      {isEventPopupVisible && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
          <div
            ref={popupRef}
            className="bg-white rounded-lg shadow-lg p-6 relative min-w-[30%] max-h-[80vh] overflow-y-auto scrollbar-hide"
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
