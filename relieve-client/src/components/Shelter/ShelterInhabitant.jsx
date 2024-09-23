import { useEffect, useState } from "react";
import PendingInhabitants from "./PendingInhabitants";
import CurrentInhabitants from "./CurrentInhabitants";

const ShelterInhabitant = ({ shelterId }) => {
  const [activeTab, setActiveTab] = useState("inhabitant-requests");
  console.log("Here")
  console.log(activeTab)

  return (
    <div>
      {/* Tab Navigation */}
      <div className="flex justify-center space-x-4 mb-8">
        <button
          className={`px-4 py-2 ${
            activeTab === "inhabitant-requests"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-black"
          } rounded-md`}
          onClick={() => setActiveTab("inhabitant-requests")}
        >
          Inhabitant Requests
        </button>
        <button
          className={`px-4 py-2 ${
            activeTab === "current-inhabitants"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-black"
          } rounded-md`}
          onClick={() => setActiveTab("current-inhabitants")}
        >
          Current Inhabitants
        </button>
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === "inhabitant-requests" && (
        //   <PendingInhabitants key={shelterId} shelterId={shelterId} />
        <div>Hello</div>
        )}
        {activeTab === "current-inhabitants" && 
        // <CurrentInhabitants key={shelterId} shelterId={shelterId} />
        <div>Second</div>
        }
      </div>
    </div>
  );
};

export default ShelterInhabitant;
