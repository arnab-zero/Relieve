import React from "react";

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

// function CommunityDashboard() {
//   return (
//     <div className="flex w-full h-screen overflow-hidden">
//       {/* Members List Section */}
//       <div className="flex-grow-[2] bg-gray-100 p-4 overflow-y-auto">
//         <h2 className="text-xl font-bold mb-4">Members List</h2>
//         <div className="space-y-4">
//           {members.map((member) => (
//             <div key={member.id} className="flex items-center">
//               <img
//                 src={member.profilePic}
//                 alt={`${member.name} profile`}
//                 className="w-12 h-12 rounded-full mr-4"
//               />
//               <div>
//                 <p className="font-medium">{member.name}</p>
//                 {member.isCoordinator && (
//                   <span className="text-green-500 text-sm">Co-ordinator</span>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Community Details Section */}
//       <div className="flex-grow-[10] p-6 bg-white">
//         <h2 className="text-2xl font-bold mb-6">Community Name</h2>
//         <div className="flex space-x-4 mb-6">
//           <button
//             className="flex items-center bg-blue-500 text-white py-2 px-4 rounded"
//             onClick={() => setIsFormOpen(true)}
//           >
//             <i className="mr-2">🛠️</i> Create Event
//           </button>
//           {/* Popup for CreateEventForm */}
//           <button className="flex items-center bg-blue-500 text-white py-2 px-4 rounded">
//             <i className="mr-2">➕</i> Add Member
//           </button>
//         </div>
//         <div className="mt-6">{/* Add any community details here */}</div>
//       </div>

//       {/* Events Details Section */}
//       <div className="flex-grow-[1] p-4 bg-gray-100 overflow-y-auto">
//         <div className="mb-8">
//           <h3 className="text-lg font-bold mb-4">Ongoing Events</h3>
//           <div className="space-y-4">
//             {ongoingEvents.map((event, index) => (
//               <div key={index} className="p-4 bg-white rounded-lg shadow-md">
//                 <h4 className="font-bold mb-2">{event.name}</h4>
//                 <p>
//                   <strong>Disaster:</strong> {event.disaster}
//                 </p>
//                 <p>
//                   <strong>Time Range:</strong> {event.timeRange}
//                 </p>
//                 <p>
//                   <strong>Area:</strong> {event.area}
//                 </p>
//                 <p>
//                   <strong>Coordinators:</strong> {event.coordinators}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="mb-8">
//           <h3 className="text-lg font-bold mb-4">Upcoming Events</h3>
//           <div className="space-y-4">
//             {upcomingEvents.map((event, index) => (
//               <div key={index} className="p-4 bg-white rounded-lg shadow-md">
//                 <h4 className="font-bold mb-2">{event.name}</h4>
//                 <p>
//                   <strong>Disaster:</strong> {event.disaster}
//                 </p>
//                 <p>
//                   <strong>Time Range:</strong> {event.timeRange}
//                 </p>
//                 <p>
//                   <strong>Area:</strong> {event.area}
//                 </p>
//                 <p>
//                   <strong>Coordinators:</strong> {event.coordinators}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="mb-8">
//           <h3 className="text-lg font-bold mb-4">Past Events</h3>
//           <div className="space-y-4">
//             {pastEvents.map((event, index) => (
//               <div key={index} className="p-4 bg-white rounded-lg shadow-md">
//                 <h4 className="font-bold mb-2">{event.name}</h4>
//                 <p>
//                   <strong>Disaster:</strong> {event.disaster}
//                 </p>
//                 <p>
//                   <strong>Time Range:</strong> {event.timeRange}
//                 </p>
//                 <p>
//                   <strong>Area:</strong> {event.area}
//                 </p>
//                 <p>
//                   <strong>Coordinators:</strong> {event.coordinators}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CommunityDashboard;

import CreateEventForm from "../pages/forms/EventCreationForm"; // Assuming the form component is imported
import { useState } from "react";

function CommunityDashboard() {
  const [isFormOpen, setIsFormOpen] = useState(false);

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

  return (
    <div className="flex w-full h-screen overflow-hidden">
      {/* Members List Section */}
      <div className="flex-grow-[2] bg-gray-100 p-4 overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">Members List</h2>
        <div className="space-y-4">
          {members.map((member) => (
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
        <h2 className="text-2xl font-bold mb-6">Community Name</h2>
        <div className="flex space-x-4 mb-6">
          {/* Create Event Button */}
          <button
            className="flex items-center bg-blue-500 text-white py-2 px-4 rounded"
            onClick={() => setIsFormOpen(true)} // Open the form on click
          >
            <i className="mr-2">🛠️</i> Create Event
          </button>

          {/* Add Member Button */}
          <button className="flex items-center bg-blue-500 text-white py-2 px-4 rounded">
            <i className="mr-2">➕</i> Add Member
          </button>
        </div>
        <div className="mt-6">{/* Add any community details here */}</div>
      </div>

      {/* Events Details Section */}
      <div className="flex-grow-[1] p-4 bg-gray-100 overflow-y-auto">
        <div className="mb-8">
          <h3 className="text-lg font-bold mb-4">Ongoing Events</h3>
          <div className="space-y-4">
            {ongoingEvents.map((event, index) => (
              <div key={index} className="p-4 bg-white rounded-lg shadow-md">
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
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-bold mb-4">Upcoming Events</h3>
          <div className="space-y-4">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="p-4 bg-white rounded-lg shadow-md">
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
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-bold mb-4">Past Events</h3>
          <div className="space-y-4">
            {pastEvents.map((event, index) => (
              <div key={index} className="p-4 bg-white rounded-lg shadow-md">
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
            ))}
          </div>
        </div>
      </div>

      {/* Popup for Create Event Form */}
      {isFormOpen && (
        <div
          id="formModal"
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={handleCloseForm} // Close form when clicking outside
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg relative w-96"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
              onClick={() => setIsFormOpen(false)} // Close on clicking 'X'
            >
              &times;
            </button>
            {/* Create Event Form */}
            <CreateEventForm onSubmit={handleFormSubmit} />
          </div>
        </div>
      )}
    </div>
  );
}

export default CommunityDashboard;
