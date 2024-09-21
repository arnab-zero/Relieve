// components/PeopleSection.jsx
import { useState } from "react";
import RequestedPeople from "./RequestedPeople";
import CurrentPeople from "./CurrentPeople";
import AddPeopleForm from "../../pages/forms/AddPeopleForm";

const PeopleSection = ({ shelterId }) => {
  const [activeSubTab, setActiveSubTab] = useState("Current");

  return (
    <div className="people-section">
      <h2 className="text-xl font-semibold">People Management</h2>

      {/* Sub-Tabs for Requested and Current People */}
      <div className="tabs mb-4">
        <a
          className={`tab tab-bordered ${activeSubTab === "Requested" ? "tab-active" : ""}`}
          onClick={() => setActiveSubTab("Requested")}
        >
          Requested People
        </a>
        <a
          className={`tab tab-bordered ${activeSubTab === "Current" ? "tab-active" : ""}`}
          onClick={() => setActiveSubTab("Current")}
        >
          Current People
        </a>
      </div>

      {/* Button to Add New Inhabitant */}
      <AddPeopleForm shelterId={shelterId} />

      {/* Content for each sub-tab */}
      {activeSubTab === "Requested" && <RequestedPeople shelterId={shelterId} />}
      {activeSubTab === "Current" && <CurrentPeople shelterId={shelterId} />}
    </div>
  );
};

export default PeopleSection;
