import CreateEventForm from "../pages/forms/EventCreationForm"; // Assuming the form component is imported
import { useEffect, useRef, useState } from "react";
import { FaCalendarPlus } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import EventDetailCard from "../components/EventDetailCard";

const members = [
  {
    id: 1,
    name: "John Doe",
    profilePic: "path/to/profile1.jpg",
    isCoordinator: true,
  },
  {
    id: 2,
    name: "Jane Smith",
    profilePic: "path/to/profile2.jpg",
    isCoordinator: false,
  },
  {
    id: 3,
    name: "Alice Johnson",
    profilePic: "path/to/profile3.jpg",
    isCoordinator: false,
  },
  {
    id: 3,
    name: "Alice Johnson",
    profilePic: "path/to/profile3.jpg",
    isCoordinator: false,
  },
  {
    id: 3,
    name: "Alice Johnson",
    profilePic: "path/to/profile3.jpg",
    isCoordinator: false,
  },
  {
    id: 3,
    name: "Alice Johnson",
    profilePic: "path/to/profile3.jpg",
    isCoordinator: false,
  },
  {
    id: 3,
    name: "Alice Johnson",
    profilePic: "path/to/profile3.jpg",
    isCoordinator: false,
  },
  {
    id: 3,
    name: "Alice Johnson",
    profilePic: "path/to/profile3.jpg",
    isCoordinator: false,
  },
  {
    id: 3,
    name: "Alice Johnson",
    profilePic: "path/to/profile3.jpg",
    isCoordinator: false,
  },
  {
    id: 3,
    name: "Alice Johnson",
    profilePic: "path/to/profile3.jpg",
    isCoordinator: false,
  },
  {
    id: 3,
    name: "Alice Johnson",
    profilePic: "path/to/profile3.jpg",
    isCoordinator: false,
  },
  {
    id: 3,
    name: "Alice Johnson",
    profilePic: "path/to/profile3.jpg",
    isCoordinator: false,
  },
  {
    id: 3,
    name: "Alice Johnson",
    profilePic: "path/to/profile3.jpg",
    isCoordinator: false,
  },
  {
    id: 3,
    name: "Alice Johnson",
    profilePic: "path/to/profile3.jpg",
    isCoordinator: false,
  },
  {
    id: 3,
    name: "Alice Johnson",
    profilePic: "path/to/profile3.jpg",
    isCoordinator: false,
  },
  {
    id: 3,
    name: "Alice Johnson",
    profilePic: "path/to/profile3.jpg",
    isCoordinator: false,
  },
  {
    id: 3,
    name: "Alice Johnson",
    profilePic: "path/to/profile3.jpg",
    isCoordinator: false,
  },
  {
    id: 3,
    name: "Alice Johnson",
    profilePic: "path/to/profile3.jpg",
    isCoordinator: false,
  },
  {
    id: 3,
    name: "Alice Johnson",
    profilePic: "path/to/profile3.jpg",
    isCoordinator: false,
  },
  {
    id: 3,
    name: "Alice Johnson",
    profilePic: "path/to/profile3.jpg",
    isCoordinator: false,
  },
  {
    id: 3,
    name: "Alice Johnson",
    profilePic: "path/to/profile3.jpg",
    isCoordinator: false,
  },
  // Add more members here
];

const ongoingEvents = [
  {
    name: "Flood Relief 2023",
    disaster: "Flood",
    timeRange: "June 2023 - July 2023",
    area: "Sylhet",
    coordinators: "John Doe, Jane Smith",
  },
  {
    name: "Flood Relief 2023",
    disaster: "Flood",
    timeRange: "June 2023 - July 2023",
    area: "Sylhet",
    coordinators: "John Doe, Jane Smith",
  },
  {
    name: "Flood Relief 2023",
    disaster: "Flood",
    timeRange: "June 2023 - July 2023",
    area: "Sylhet",
    coordinators: "John Doe, Jane Smith",
  },
  {
    name: "Flood Relief 2023",
    disaster: "Flood",
    timeRange: "June 2023 - July 2023",
    area: "Sylhet",
    coordinators: "John Doe, Jane Smith",
  },
  // Add more ongoing events here
];

const upcomingEvents = [
  {
    name: "Cyclone Preparedness",
    disaster: "Cyclone",
    timeRange: "October 2023 - November 2023",
    area: "Cox's Bazar",
    coordinators: "Alice Johnson",
  },
  {
    name: "Cyclone Preparedness",
    disaster: "Cyclone",
    timeRange: "October 2023 - November 2023",
    area: "Cox's Bazar",
    coordinators: "Alice Johnson",
  },
  {
    name: "Cyclone Preparedness",
    disaster: "Cyclone",
    timeRange: "October 2023 - November 2023",
    area: "Cox's Bazar",
    coordinators: "Alice Johnson",
  },
  {
    name: "Cyclone Preparedness",
    disaster: "Cyclone",
    timeRange: "October 2023 - November 2023",
    area: "Cox's Bazar",
    coordinators: "Alice Johnson",
  },
  // Add more upcoming events here
];

const pastEvents = [
  {
    name: "Earthquake Drill 2022",
    disaster: "Earthquake",
    timeRange: "April 2022",
    area: "Chittagong",
    coordinators: "John Doe",
  },
  // Add more past events here
];

const scrollbarHideStyle = {
  overflow: "auto",
  scrollbarWidth: "none", // Firefox
  msOverflowStyle: "none", // Internet Explorer and Edge
};

const scrollbarHideWebkit = {
  overflow: "auto",
};

function CommunityDashboard() {
  const [isIncidentPopupVisible, setIsIncidentPopupVisible] = useState(false);
  const [isEventPopupVisible, setIsEventPopupVisible] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const popupRef = useRef(null);
  const location = useLocation();
  const community = location.state;
  console.log(community);

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
        <h2 className="text-2xl font-bold mb-6">{community.orgName}</h2>
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
            {ongoingEvents.map((event, index) => (
              <EventDetailCard key={index} event={event} />
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-bold mb-4">Upcoming Events</h3>
          <div className="space-y-4">
            {upcomingEvents.map((event, index) => (
              <EventDetailCard key={index} event={event} />
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-bold mb-4">Past Events</h3>
          <div className="space-y-4">
            {pastEvents.map((event, index) => (
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
