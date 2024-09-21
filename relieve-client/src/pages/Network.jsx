import React, { useState, useEffect } from "react";
import EventCreationForm from "../pages/forms/EventCreationForm"; // Adjust the import if the path is different
import { NavLink, Outlet } from "react-router-dom";
import CommunityCreationForm from "./forms/CommunityCreationForm";

const Network = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [communities, setCommunities] = useState([]); // State to store community data

  // Function to toggle the popup visibility
  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  // Function to handle form submission
  const handleFormSubmit = () => {
    setIsPopupVisible(false); // Hide the popup after form submission
    fetchCommunities(); // Fetch updated communities after form submission
  };

  // Close the popup when clicking outside the form
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsPopupVisible(false);
    }
  };

  const handleChange = (e) => {
    setQuery(e.target.value); // Handle search input changes
  };

  // Function to fetch communities from the API
  const fetchCommunities = async () => {
    try {
      const response = await fetch("http://localhost:8080/organizations");
      if (response.ok) {
        const data = await response.json();
        setCommunities(data); // Update communities state with fetched data
        console.log(data);
      } else {
        console.error("Failed to fetch communities:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching communities:", error);
    }
  };

  // Fetch communities when the component mounts
  useEffect(() => {
    fetchCommunities();
  }, []); // Empty dependency array ensures this runs once on component mount

  return (
    <div className="mx-10">
      {/* Search bar */}
      <div className="flex justify-center mt-10 mb-8">
        <div className="w-[25%]">
          <span className="flex justify-center">
            <input
              type="text"
              placeholder="Type any community or event name"
              onChange={handleChange}
              className="input input-bordered input-info border-blue-secondary focus:border-blue-secondary focus:outline-blue-secondary w-full max-w-md"
            />
          </span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {/* First section */}
        <div className="col-span-2 border-r border-gray-400 pr-4">
          <div className="flex justify-center">
            <ul className="flex text-2xl gap-[100px] mb-8">
              <li>
                <NavLink
                  to="/network/communities"
                  className={
                    ({ isActive }) =>
                      isActive
                        ? "text-blue-500 underline font-semibold" // active link styles
                        : "text-gray-500" // default link styles
                  }
                >
                  Communities
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/network/events"
                  className={
                    ({ isActive }) =>
                      isActive
                        ? "text-blue-500 underline font-semibold" // active link styles
                        : "text-gray-500" // default link styles
                  }
                >
                  Events
                </NavLink>
              </li>
            </ul>
          </div>

          <div>
            <Outlet />
          </div>
        </div>
        {/* Communities Section */}
        <div>
          <div className="flex justify-center mb-8">
            <div
              className="btn btn-info text-white text-lg"
              onClick={togglePopup}
            >
              Create New Community
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-semibold underline">
              Your Communities
            </h1>
            {/* Display the fetched communities */}
            <ul className="mt-4">
              {communities.length > 0 ? (
                communities.map((community) => (
                  <li key={community.id} className="mb-4 p-2 border rounded-md">
                    <h2 className="text-lg font-semibold">
                      {community.orgName}
                    </h2>
                    <p>{community.description}</p>
                    <p>Location: {community.location}</p>
                    <p>Contact: {community.contactNumbers.join(", ")}</p>
                    <NavLink
                      to={`/community/${community.orgId}`}
                      state={community}
                    >
                      View this community
                    </NavLink>
                  </li>
                ))
              ) : (
                <p>No communities found.</p>
              )}
            </ul>
          </div>
        </div>
      </div>

      {isPopupVisible && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={handleBackdropClick}
        >
          <div className="bg-white rounded-lg shadow-lg p-6 relative w-11/12 max-w-lg max-h-[80vh] overflow-y-auto scrollbar-hide">
            <CommunityCreationForm onSubmit={handleFormSubmit} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Network;
