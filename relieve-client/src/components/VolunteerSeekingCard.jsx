import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../pages/Authentication/AuthProvider";
import axios from "axios";

const VolunteerSeekingCard = ({ volunteerCall }) => {
  const { title, eventName, eventId, description, creationTime, location, vcId } =
    volunteerCall;

  const [showTextarea, setShowTextarea] = useState(false);
  const [comment, setComment] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [userId, setUserId] = useState(null); 
  const {user} = useContext(AuthContext);

  useEffect(() => {
    if (user) {
      setUserId(user.userId);
    }
  }, [user, volunteerCall]);

  function convertToBDTime(isoString) {
    const date = new Date(isoString);

    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
      timeZone: "Asia/Dhaka", // Bangladesh Time Zone
    };

    return new Intl.DateTimeFormat("en-US", options).format(date);
  }

  const formattedDate = convertToBDTime(creationTime);

  const handleJoinClick = () => {
    setShowTextarea(true);
  };

  const handleSubmit = async () => {
    if (comment.trim() === "") {
      setErrorMessage("Comment cannot be empty!");
    } else {
      try {
        // Define the data for the POST request
        const requestData = {
          userId: userId, // userId from the state
          eventId: eventId,
          eventName: eventName,
          vcId: vcId,
          comment: comment,
          createdAt: new Date().toISOString(), // Current timestamp
          isApproved: false, // Set isApproved to false as requested
        };

        // Send a POST request to the backend
        const response = await axios.post(
          "http://localhost:8080/volunteer-requests",
          requestData
        );

        if (response.status === 200 || response.status === 201) {
          alert("Application successful!");
          setShowTextarea(false);
          setComment("");
          setErrorMessage("");
        } else {
          setErrorMessage("Failed to submit application. Please try again.");
        }
      } catch (error) {
        setErrorMessage("An error occurred. Please try again later.");
        console.error("Error submitting volunteer request:", error);
      }
    }
  };

  const handleCancel = () => {
    setShowTextarea(false);
    setComment("");
    setErrorMessage("");
  };

  return (
    <div className="w-full mt-4 rounded overflow-hidden shadow-lg p-4 border-2 border-[#86bbd8] mx-auto">
      <div className="mb-4">
        <h1 className="text-3xl font-semibold mb-2">
          <span className="">{title}</span> by{" "}
          <span className="hover:underline hover:text-blue-500">
            <NavLink to={`/event-dashboard/${eventId}`}>{eventName}</NavLink>
          </span>
          <span className="text-xs bg-[#1f8d0c] text-white px-2 py-1 rounded-full ml-2">
            Verified
          </span>
        </h1>

        <h3>created at {formattedDate}</h3>

        <h3>Location: {location}</h3>

        <p className="text-base text-gray-600 mb-4 text-justify">
          {description}
        </p>
      </div>

      <div className="flex justify-between mt-4">
        <button
          onClick={handleJoinClick}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Join as a Volunteer
        </button>
        <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
          Share Link
        </button>
      </div>

      {/* Conditionally render the textarea when 'Join as a Volunteer' is clicked */}
      {showTextarea && (
        <div className="mt-4">
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full p-2 border rounded"
            rows="4"
            placeholder="Enter your comment here..."
          />
          {errorMessage && (
            <p className="text-red-500 text-sm mt-1">{errorMessage}</p>
          )}
          <div className="flex justify-end mt-2">
            <button
              onClick={handleSubmit}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
            >
              Submit
            </button>
            <button
              onClick={handleCancel}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VolunteerSeekingCard;
