import { useState } from "react";
import PendingInhabitants from "./PendingInhabitants";
import CurrentInhabitants from "./CurrentInhabitants";

const ShelterInhabitant = ({ shelterId }) => {
  const [activeInhabitantTab, setActiveInhabitantTab] = useState("inhabitant-requests");
  
  const handleInhabitantRequests = () => {
    setActiveInhabitantTab('inhabitant-requests');
  }

  const handleCurrentInhabitant = () => {
    setActiveInhabitantTab('current-inhabitants')
  }
  return (
    <div className="my-10 container mx-auto font-manrope min-h-screen">
      <h2 className="text-4xl font-bold text-blue-primary text-center my-10">Shleter Inhabitants</h2>
      <div className="flex justify-center gap-10">
        <button className={`text-xl font-semibold text-gray-500 ${activeInhabitantTab === 'inhabitant-requests' ? "border-2 border-b-gray-500 border-t-0 border-l-0 border-r-0" : ""}`} onClick={handleInhabitantRequests}>Inhabitant Requests</button>
        <button className={`text-xl font-semibold text-gray-500 ${activeInhabitantTab === 'current-inhabitants' ? "border-2 border-b-gray-500 border-t-0 border-l-0 border-r-0" : ""}`} onClick={handleCurrentInhabitant}>Current Inhabitants</button>
      </div>
      <div className="">
        {
          activeInhabitantTab === 'inhabitant-requests' ? <PendingInhabitants></PendingInhabitants> : <CurrentInhabitants></CurrentInhabitants>
        }
      </div>
    </div>
  );
};

export default ShelterInhabitant;