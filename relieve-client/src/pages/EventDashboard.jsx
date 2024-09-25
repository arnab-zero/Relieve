import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import {
  Users,
  DollarSign,
  MessageSquare,
  FileText,
  Users2,
} from "lucide-react";
import FundCallForm from "../pages/forms/FundCallForm";
import VolunteerCallForm from "../pages/forms/VolunteerCallForm";
import { AuthContext } from "./Authentication/AuthProvider";
import { toast } from "react-toastify"; // For success alerts
import 'react-toastify/dist/ReactToastify.css'; // Required for toast

export default function EventDashboard() {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showFundCallForm, setShowFundCallForm] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isVolunteer, setIsVolunteer] = useState(false);
  const [showVolunteerCallForm, setShowVolunteerCallForm] = useState(false);
  const [showVolunteerRequestModal, setShowVolunteerRequestModal] = useState(false);
  const [volunteerRequests, setVolunteerRequests] = useState([]);
  const [users, setUsers] = useState([]);

  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const response = await fetch(`http://localhost:8080/events/${eventId}`);
        const data = await response.json();
        setEvent(data);
      } catch (error) {
        console.error("Error fetching event data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEventData();

    if (user && event) {
      setIsAdmin(event.eventAdmins.includes(user.userId));
      setIsVolunteer(user.eventIds.includes(event.eventId));
    }

  }, [eventId, user, event]);

  const handleVolunteerCallSubmit = () => {
    setShowVolunteerCallForm(ture);
  }

  const handleFundCallSubmit = () => {
    setShowFundCallForm(true);
  }

  const handleVolunteerRequests = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/volunteer-requests?eventId=${eventId}&isApproved=false`
      );
      const requestData = await response.json();
      setVolunteerRequests(requestData);

      const userResponse = await fetch("http://localhost:8080/api/users");
      const userData = await userResponse.json();
      setUsers(userData);

      setShowVolunteerRequestModal(true); // Show modal
    } catch (error) {
      console.error("Error fetching volunteer requests:", error);
    }
  };

  const handleApprove = async (requestId, userId) => {
    try {
      const userToUpdate = users.find((u) => u.userId === userId);
      if (userToUpdate) {
        // Add eventId to user's eventIds array
        const updatedUser = {
          ...userToUpdate,
          eventIds: [...userToUpdate.eventIds, eventId],
        };

        const response = await fetch(
          `http://localhost:8080/api/users/${userId}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedUser),
          }
        );

        if (response.ok) {
          // Update the volunteer request to set isApproved to true
          const updateVolunteerRequest = await fetch(
            `http://localhost:8080/volunteer-requests/${requestId}`,
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ approved: true }),
            }
          );

          if (updateVolunteerRequest.ok) {
            toast.success("User approved successfully!");
            // Refresh the volunteer requests list
            setVolunteerRequests(
              volunteerRequests.filter((request) => request.requestId !== requestId)
            );
          }
        }
      }
    } catch (error) {
      console.error("Error approving volunteer:", error);
    }
  };

  const handleDecline = async (requestId) => {
    try {
      const response = await fetch(
        `http://localhost:8080/volunteer-requests/${requestId}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        toast.success("Request declined successfully!");
        setVolunteerRequests(
          volunteerRequests.filter((request) => request.requestId !== requestId)
        );
      }
    } catch (error) {
      console.error("Error declining volunteer request:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!event) {
    return <div>No event found.</div>;
  }

  const { eventName, description, communityId, dateFrom } = event;

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-11 gap-4">
          {/* Left Aside */}
          <aside className="col-span-2 space-y-4">
            {isAdmin && (
              <>
                <OptionBox
                  icon={<Users />}
                  text="Call for Volunteers"
                  onClick={() => setShowVolunteerCallForm(true)}
                />
                <OptionBox
                  icon={<DollarSign />}
                  text="Call for Donation"
                  onClick={() => setShowFundCallForm(true)}
                />
                <OptionBox
                  icon={<Users />}
                  text="Volunteer Requests"
                  onClick={handleVolunteerRequests}
                />
              </>
            )}
            {(isAdmin || isVolunteer) && (
              <OptionBox icon={<MessageSquare />} text="Slack Chatroom" />
            )}
            <OptionBox icon={<FileText />} text="View Expense Report" />
            <OptionBox icon={<Users2 />} text="Reach Our Ground Team" />
          </aside>

          {/* Main Content */}
          <main className="col-span-6 bg-white rounded-lg shadow-lg p-6">
            <h1 className="text-4xl font-bold text-indigo-600 mb-2">
              {eventName}
            </h1>
            <div className="text-sm text-gray-500 mb-2">
              Organized by: {communityId}
            </div>
            <div className="text-sm text-gray-500 mb-6">
              Created on: {new Date(dateFrom).toLocaleString()}
            </div>
            <hr className="my-6" />
            <p className="text-gray-700 leading-relaxed">{description}</p>
          </main>

          {/* Right Aside */}
          <aside className="col-span-3 bg-white rounded-lg shadow-lg p-4">
            <h2 className="text-2xl font-semibold mb-4">We Are</h2>
            <div className="space-y-4 max-h-[calc(100vh-8rem)] overflow-y-auto pr-2">
              {/* Add members dynamically */}
              {users.map((user) => (
                <MemberItem key={user.userId} name={user.userName} />
              ))}
            </div>
          </aside>
        </div>
      </div>

      {showFundCallForm && (
        <FundCallForm
          eventId={eventId}
          onClose={() => setShowFundCallForm(false)}
          onSubmit={handleFundCallSubmit}
        />
      )}

      {showVolunteerCallForm && (
        <VolunteerCallForm
          eventId={eventId}
          eventName={event.eventName}
          onClose={() => setShowVolunteerCallForm(false)}
          onSubmit={handleVolunteerCallSubmit}
        />
      )}

      {/* Volunteer Request Modal */}
      {showVolunteerRequestModal && (
        <VolunteerRequestModal
          volunteerRequests={volunteerRequests}
          users={users}
          onApprove={handleApprove}
          onDecline={handleDecline}
          onClose={() => setShowVolunteerRequestModal(false)}
        />
      )}
    </div>
  );
}

function OptionBox({ icon, text, onClick }) {
  return (
    <div
      className="bg-white rounded-lg shadow-md p-4 flex items-center space-x-3 hover:bg-indigo-50 transition-colors cursor-pointer"
      onClick={onClick}
    >
      {icon}
      <span className="text-sm font-medium text-gray-700">{text}</span>
    </div>
  );
}

function MemberItem({ name }) {
  return (
    <div className="flex items-center space-x-3">
      <div className="w-10 h-10 rounded-full bg-indigo-200 flex items-center justify-center">
        <span className="text-indigo-600 font-semibold">{name.charAt(0)}</span>
      </div>
      <div className="flex-grow">
        <p className="text-sm font-medium text-gray-700">{name}</p>
      </div>
    </div>
  );
}

function VolunteerRequestModal({ volunteerRequests, users, onApprove, onDecline, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl">
        <h2 className="text-2xl font-bold mb-6">Volunteer Requests</h2>

        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              <th className="border px-4 py-2">User Name</th>
              <th className="border px-4 py-2">Contact Number</th>
              <th className="border px-4 py-2">Comment</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {volunteerRequests.map((request) => {
              const user = users.find((u) => u.userId === request.userId);
              return (
                <tr key={request.requestId}>
                  <td className="border px-4 py-2">{user ? user.userName : "Unknown"}</td>
                  <td className="border px-4 py-2">{user ? user.contactNumber : "Unknown"}</td>
                  <td className="border px-4 py-2">{request.comment}</td>
                  <td className="border px-4 py-2">
                    <button
                      className="bg-green-500 text-white px-3 py-1 rounded mr-2"
                      onClick={() => onApprove(request.requestId, user.userId)}
                    >
                      Approve
                    </button>
                    <button
                      className="bg-red-500 text-white px-3 py-1 rounded"
                      onClick={() => onDecline(request.requestId)}
                    >
                      Decline
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <button
          className="mt-6 bg-gray-500 text-white px-4 py-2 rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}
