import {
  Users,
  DollarSign,
  MessageSquare,
  FileText,
  Users2,
} from "lucide-react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function EventDashboard() {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null); // State to store event data
  const [loading, setLoading] = useState(true); // State to manage loading

  useEffect(() => {
    // Fetch the event data using the eventId
    const fetchEventData = async () => {
      try {
        const response = await fetch(`http://localhost:8080/events/${eventId}`);
        const data = await response.json();
        setEvent(data); // Store event data in state
        console.log(data);
      } catch (error) {
        console.error("Error fetching event data:", error);
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchEventData();
  }, [eventId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!event) {
    return <div>No event found.</div>;
  }

  // Destructure the event object
  const { eventName, description, communityId, dateFrom } = event;

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-11 gap-4">
          {/* Left Aside */}
          <aside className="col-span-2 space-y-4">
            <OptionBox icon={<Users />} text="Call for Volunteers" />
            <OptionBox icon={<DollarSign />} text="Call for Donation" />
            <OptionBox icon={<MessageSquare />} text="Slack Chatroom" />
            <OptionBox icon={<FileText />} text="View Expense Report" />
            <OptionBox icon={<Users2 />} text="Reach Our Ground Team" />
          </aside>

          {/* Main Content */}
          <main className="col-span-6 bg-white rounded-lg shadow-lg p-6">
            <h1 className="text-4xl font-bold text-indigo-600 mb-2">
              {eventName}{" "}
              {/* Render communityId eventName dateFrom
            <>communityId className=dateFromtex text-gray-600 mb-4">
              {description} {/* Render event description */}
            </h1>
            <div className="text-sm text-gray-500 mb-2">
              Organized by: {communityId} {/* Render event organizer */}
            </div>
            <div className="text-sm text-gray-500 mb-6">
              Created on: {new Date(dateFrom).toLocaleString()}{" "}
              {/* Render created date */}
            </div>
            <hr className="my-6" />
            <p className="text-gray-700 leading-relaxed">
              {description} {/* Render additional event details */}
            </p>
          </main>

          {/* Right Aside */}
          <aside className="col-span-3 bg-white rounded-lg shadow-lg p-4">
            <h2 className="text-2xl font-semibold mb-4">We Are</h2>
            <div className="space-y-4 max-h-[calc(100vh-8rem)] overflow-y-auto pr-2">
              <MemberItem name="John Doe" isCoordinator />
              <MemberItem name="Jane Smith" isCoordinator />
              <MemberItem name="Mike Johnson" />
              <MemberItem name="Emily Brown" />
              <MemberItem name="Chris Lee" />
              <MemberItem name="Sarah Wilson" />
              <MemberItem name="Alex Taylor" />
              <MemberItem name="Olivia Martin" />
              <MemberItem name="Daniel White" />
              <MemberItem name="Sophia Garcia" />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

function OptionBox({ icon, text }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex items-center space-x-3 hover:bg-indigo-50 transition-colors cursor-pointer">
      {icon}
      <span className="text-sm font-medium text-gray-700">{text}</span>
    </div>
  );
}

function MemberItem({ name, isCoordinator = false }) {
  return (
    <div className="flex items-center space-x-3">
      <div className="w-10 h-10 rounded-full bg-indigo-200 flex items-center justify-center">
        <span className="text-indigo-600 font-semibold">{name.charAt(0)}</span>
      </div>
      <div className="flex-grow">
        <p className="text-sm font-medium text-gray-700">{name}</p>
        {isCoordinator && (
          <span className="text-xs text-indigo-600 font-semibold">
            Co-ordinator
          </span>
        )}
      </div>
    </div>
  );
}
