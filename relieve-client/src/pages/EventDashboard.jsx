import {
  Users,
  DollarSign,
  MessageSquare,
  FileText,
  Users2,
} from "lucide-react";

export default function EventDashboard() {
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
              Community Cleanup Drive
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              Join us in making our neighborhood cleaner and greener!
            </p>
            <div className="text-sm text-gray-500 mb-2">
              Organized by: Green Earth Community
            </div>
            <div className="text-sm text-gray-500 mb-6">
              Created on: July 15, 2023 at 10:00 AM
            </div>
            <hr className="my-6" />
            <p className="text-gray-700 leading-relaxed">
              Our annual Community Cleanup Drive is back! This year, we're
              focusing on the riverside area. We'll be picking up litter,
              planting trees, and setting up recycling stations. This event is a
              great opportunity to meet your neighbors, get some exercise, and
              make a positive impact on our environment. Don't forget to bring
              your gloves and water bottle!
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
