import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Searchbar from "../components/Home/Searchbar";
import AreaUpdate from "../components/Home/AreaUpdate";
import EmergencyContacts from "../components/Home/EmergencyContacts";
import { FaPeopleLine, FaMapLocation } from "react-icons/fa6";
import { BsFillHouseAddFill } from "react-icons/bs";
const Home = () => {
  const [incidents, setIncidents] = useState([]);
  const [volunteerCalls, setVolunteerCalls] = useState([]);
  const [fundCalls, setFundCalls] = useState([]);
  const [sortedUpazillaCounts, setSortedUpazillaCounts] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/incident")
      .then((res) => res.json())
      .then((data) => {
        setIncidents(data);
        console.log("Incidents: ", data);
      })
      .catch((error) => console.error("Error fetching data:", error));

    fetch("http://localhost:8080/volunteer-calls")
      .then((res) => res.json())
      .then((data) => {
        setVolunteerCalls(data);
        console.log("volunteer: ", volunteerCalls);
      })
      .catch((error) => console.error("Error fetching data:", error));

    fetch("http://localhost:8080/fund-call")
      .then((res) => res.json())
      .then((data) => {
        setFundCalls(data);
        // console.log("fund: ", fundCalls);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <div className="relative font-manrope">
        <img
          src="/shelterBanner.png"
          alt="Shelter Banner"
          className="w-full h-96 object-cover"
        />

        <div className="absolute top-0 left-0 w-full h-96 bg-black opacity-40 z-10"></div>

        <div className="absolute top-0 left-0 w-full h-96 flex justify-between items-center z-20 px-5">
          <span>
            <h2 className="text-base-100 text-7xl font-bold mb-4 ">
              Bangladesh
            </h2>
            <h2 className="text-white text-5xl font-bold bg-red-900 p-4 rounded-md">
              Disaster Emergency
            </h2>
          </span>
          <div className="bg-[#002b47] w-80 py-4 px-8">
            <h2 className="text-3xl font-bold text-white text-center">
              Our Network
            </h2>
            <hr className="my-1" />
            <div className="flex items-center gap-10">
              <span>
                <FaPeopleLine className="text-5xl text-white" />
                <p className="text-gray-300 text-sm">People</p>
              </span>
              <p className="text-white text-3xl font-bold">10,129</p>
            </div>
            <div className="flex items-center gap-10 mb-1">
              <span>
                <FaMapLocation className="text-4xl mt-1 text-white" />
                <p className="text-gray-300 text-sm">Districts</p>
              </span>
              <p className="text-white text-3xl font-bold">64</p>
            </div>
            <div className="flex items-center gap-10">
              <span>
                <BsFillHouseAddFill className="text-4xl text-white" />
                <p className="text-gray-300 text-sm">Shelters</p>
              </span>
              <p className="text-white text-3xl font-bold">758</p>
            </div>
          </div>
        </div>
      </div>
      <Searchbar setQuery={setQuery} />
      <div className="grid grid-cols-5 gap-4">
        <AreaUpdate
          incidents={incidents}
          setSortedUpazillaCounts={setSortedUpazillaCounts}
        />
        <div className="col-span-3">
          <Outlet
            context={{
              incidents,
              setIncidents,
              query,
              volunteerCalls,
              fundCalls,
            }}
          />
        </div>
        <EmergencyContacts sortedUpazillaCounts={sortedUpazillaCounts} />
      </div>
    </div>
  );
};

export default Home;
