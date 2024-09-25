import React, { useState } from "react";
import { zillaUpazillaData } from "../../pages/forms/ZillaUpazillaData";
import Searchbar from "../Home/Searchbar";

const ShelterFinder = () => {
  const [selectedZilla, setSelectedZilla] = useState("");
  const [upazillas, setUpazillas] = useState([]);

  const handleZillaChange = (event) => {
    const selectedDistrict = event.target.value;
    setSelectedZilla(selectedDistrict);
    setUpazillas(zillaUpazillaData[selectedDistrict] || []);
  };

  return (
    <div className="p-6 font-manrope gap-4 flex items-center">
      {/* <select
        id="zilla"
        value={selectedZilla}
        onChange={handleZillaChange}
        className="w-full px-3 py-3 text-lg text-gray-500 font-medium border-2 border-blue-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-blue-primary"
      >
        <option value="" disabled>
          Select your district
        </option>
        {Object.keys(zillaUpazillaData).map((zilla) => (
          <option key={zilla} value={zilla}>
            {zilla}
          </option>
        ))}
      </select>

      <select
        id="upazilla"
        value=""
        disabled={!selectedZilla}
        className="w-full px-3 py-3 text-lg text-gray-500 font-medium border-2 border-blue-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-blue-primary"
      >
        <option value="" disabled>
          {selectedZilla ? "Select your upazilla" : "Select a district first"}
        </option>
        {upazillas.map((upazilla) => (
          <option key={upazilla} value={upazilla}>
            {upazilla}
          </option>
        ))}
      </select> */}

      <Searchbar />

      {/* <button className="btn bg-blue-primary text-md font-medium text-white py-1 px-2 rounded-md hover:bg-blue-700 transition-colors">
        Find Your Shelter
      </button> */}
    </div>
  );
};

export default ShelterFinder;
