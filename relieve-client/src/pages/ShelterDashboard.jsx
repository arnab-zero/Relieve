// components/ShelterDashboard.jsx
import { useState } from "react";
import PeopleSection from "../components/Shelter/PeopleSection";
import FoodSection from "../components/Shelter/FoodSection";
import Shelter from "./Shelter";
import ShelterInfo from "../components/Shelter/ShelterInfo";

const ShelterDashboard = ({ shelterId }) => {
  const [activeTab, setActiveTab] = useState("People");

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Shelter Details</h1>
      {/* <ShelterInfo shelter={shelter}></ShelterInfo> */}
      {/* Tab Navigation */}
      <div className="tabs mb-4">
        <a
          className={`tab tab-bordered ${activeTab === "People" ? "tab-active" : ""}`}
          onClick={() => setActiveTab("People")}
        >
          People
        </a>
        <a
          className={`tab tab-bordered ${activeTab === "Food" ? "tab-active" : ""}`}
          onClick={() => setActiveTab("Food")}
        >
          Food
        </a>
      </div>

      {/* Content for each tab */}
      {activeTab === "People" && <PeopleSection shelterId={shelterId} />}
      {activeTab === "Food" && <FoodSection shelterId={shelterId} />}
    </div>
  );
};

export default ShelterDashboard;
