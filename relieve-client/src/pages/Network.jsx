import React, { useState, useEffect, useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import CommunityCreationForm from "./forms/CommunityCreationForm";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";
import { AuthContext } from "./Authentication/AuthProvider";

const Network = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [communities, setCommunities] = useState([]); // State to store communities
  const [events, setEvents] = useState([]); // State to store events
  const [query, setQuery] = useState("");
  const { user } = useContext(AuthContext);
  const [userId, setUserId] = useState(null);
  const [yourCommunities, setYourCommunities] = useState([]);
  const [yourEvents, setYourEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log("User", user);

  // Toggle popup visibility
  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  // Handle form submission
  const handleFormSubmit = (newCommunity) => {
    setIsPopupVisible(false); // Hide the popup after form submission

    // Add the new community to the existing list
    setCommunities((prevCommunities) => [...prevCommunities, newCommunity]);
  };

  // Handle backdrop click to close popup
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsPopupVisible(false);
    }
  };

  const handleChange = (e) => {
    setQuery(e.target.value); // Handle search input changes
  };

  // Fetch communities from API
  const fetchCommunities = async () => {
    try {
      const response = await fetch("http://localhost:8080/organizations");
      if (response.ok) {
        const communityData = await response.json();
        setCommunities(communityData); // Set communities state
      } else {
        console.error("Failed to fetch communities:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching communities:", error);
    }
  };

  // Fetch events from API
  const fetchEvents = async () => {
    try {
      const response = await fetch("http://localhost:8080/events");
      if (response.ok) {
        const eventsData = await response.json();
        setEvents(eventsData); // Set event state
      } else {
        console.error("Failed to fetch events:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  // Fetch communities when component mounts
  useEffect(() => {
    fetchCommunities();
    fetchEvents();
    if (user) {
      setUserId(user.userId);
    }
  }, [user]); // Run on component mount

  useEffect(() => {
    const fetchUserCommunities = async () => {
      try {
        if (user?.communityIds && user.communityIds.length > 0) {
          const communityPromises = user.communityIds.map(async (id) => {
            const response = await fetch(
              `http://localhost:8080/organizations/${id}`
            );
            if (!response.ok) {
              throw new Error(`Failed to fetch community with ID: ${id}`);
            }
            return await response.json();
          });

          const fetchedCommunities = await Promise.all(communityPromises);
          setYourCommunities(fetchedCommunities);
          console.log("Your", yourCommunities);
        } else {
          setYourCommunities([]);
        }
      } catch (error) {
        console.error("Error fetching communities:", error);
      } finally {
        setLoading(false);
      }
    };

    if (user?.communityIds) {
      fetchUserCommunities();
    } else {
      setLoading(false);
    }

    const fetchUserEvents = async () => {
      try {
        if (user?.eventIds && user.eventIds.length > 0) {
          const eventPromises = user.eventIds.map(async (id) => {
            const response = await fetch(`http://localhost:8080/events/${id}`);
            if (!response.ok) {
              throw new Error(`Failed to fetch event with ID: ${id}`);
            }
            return await response.json();
          });

          const fetchedEvents = await Promise.all(eventPromises);
          setYourEvents(fetchedEvents);
          console.log("Your", yourEvents);
        } else {
          setYourEvents([]);
        }
      } catch (error) {
        console.error("Error fetching communities:", error);
      } finally {
        setLoading(false);
      }
    };
  }, [user?.communityIds, user?.eventIds]);

  return (
    <div className="mx-10 mb-8">
      {/* Search bar */}
      <div className="flex justify-center mt-10 mb-8">
        <div className="w-[25%]">
          <span className="flex justify-center">
            <input
              type="text"
              placeholder="Type any community or event name"
              onChange={handleChange}
              className="input input-bordered input-info text-black border-2 border-[#60a3d7] focus:border-[#005288] focus:outline-[#60a3d7] w-full max-w-md"
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
                  to="/network"
                  className={
                    ({ isActive }) =>
                      isActive
                        ? "text-[#005288] underline font-semibold" // Active link styles
                        : "text-gray-500" // Default link styles
                  }
                  end
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
                        ? "text-[#005288] underline font-semibold" // Active link styles
                        : "text-gray-500" // Default link styles
                  }
                >
                  Events
                </NavLink>
              </li>
            </ul>
          </div>

          {/* outlet */}
          <Outlet context={{ communities, events }} />
        </div>

        {/* Your Communities and Events Section */}
        <div className="pl-4">
          <div className="flex justify-center mb-8">
            <div
              className="btn bg-[#60a3d7] hover:bg-[#005288] text-white text-lg"
              onClick={togglePopup}
            >
              Create New Community
            </div>
          </div>
          <div>
            <div>
              <h1 className="text-2xl font-semibold">Your Communities</h1>
              {/* Display fetched communities */}
              <div
                className={`${
                  yourCommunities.length ? "mt-4" : ""
                } max-h-screen overflow-scroll scrollbar-hide `}
              >
                {yourCommunities.length > 0 ? (
                  yourCommunities.slice(0,1).map((community) => (          //slice should be removed
                    <div
                      key={community.orgId}
                      className="mb-4 p-4 border rounded-md flex gap-5 items-center"
                    >
                      <div className="">
                        <img
                          src={`${community.orgImage}`}
                          alt={`${community.orgImage} Logo`}
                        />
                      </div>
                      <div>
                        <h2 className="text-xl  font-semibold hover:underline">
                          <NavLink
                            to={`/community/${community.orgId}`}
                            state={{ community, events }}
                          >
                            {community.orgName}
                          </NavLink>
                        </h2>
                        <p className="flex gap-2 items-center">
                          <FaMapLocationDot /> {community.location}
                        </p>
                        <p className="flex items-center gap-2">
                          <MdOutlinePhoneIphone />{" "}
                          {Array.isArray(community.contactNumbers)
                            ? community.contactNumbers.join(", ")
                            : "N/A"}
                        </p>
                        <p className="text-justify leading-6 mt-4">
                          {community.description}
                        </p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>You are not with any community.</p>
                )}
              </div>
            </div>
          </div>
          {/* Your events */}
          <div className="mt-8">
            <h1 className="text-2xl font-semibold">Your Events</h1>
            <ul
              className={`${
                yourEvents.length ? "mt-4" : ""
              } max-h-screen overflow-scroll scrollbar-hide`}
            >
              {yourEvents.length > 0 ? (
                yourEvents.map((event) => (
                  <li
                    key={event.eventId}
                    className="mb-4 p-2 border rounded-md"
                  >
                    <h2 className="text-lg font-semibold hover:underline">
                      <NavLink
                        to={`/event-dashboard/${event.eventId}`}
                        state={{ community, events }}
                      >
                        {community.orgName}
                      </NavLink>
                    </h2>
                    <p>{event.description}</p>
                    <p>Location: {event.location}</p>
                    <p>
                      Contact:{" "}
                      {Array.isArray(event.contactNumbers)
                        ? community.contactNumbers.join(", ")
                        : "N/A"}
                    </p>
                  </li>
                ))
              ) : (
                <p>You are not working for any event right now.</p>
              )}
            </ul>
          </div>
        </div>
      </div>

      {/* Popup for community creation */}
      {isPopupVisible && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={handleBackdropClick}
        >
          <div className="bg-white rounded-lg shadow-lg p-6 relative w-11/12 max-w-lg max-h-[80vh] overflow-y-auto scrollbar-hide">
            <CommunityCreationForm
              userId={user.userId}
              onSubmit={handleFormSubmit}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Network;
