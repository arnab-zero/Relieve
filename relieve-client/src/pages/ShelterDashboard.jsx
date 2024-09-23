import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useParams } from "react-router-dom";
import ShelterInhabitant from "../components/Shelter/ShelterInhabitant";
import ShelterFood from "../components/Shelter/ShelterFood";

const ShelterDashboard = () => {
  const { shelterId } = useParams();
  const [shelter, setShelter] = useState({});
  const [activeTab, setActiveTab] = useState("inhabitant");

  useEffect(() => {
    fetch(`http://localhost:8080/api/shelters/${shelterId}`)
      .then((res) => res.json())
      .then((data) => setShelter(data));
  }, [shelterId]);

  const {
    imageUrl,
    name,
    zilla,
    upazilla,
    capacity,
    currentPeople,
    location,
    contactNumbers,
    eventId,
  } = shelter;

  return (
    <div className="font-manrope">
      <h2 className="text-4xl font-bold text-blue-primary my-10 text-center">
        Manage Your Shelter
      </h2>

      <div className="my-10 flex flex-col md:flex-row gap-6 justify-center">
        <figure className="max-w-lg md:p-20 bg-base-200 rounded-lg">
          <img src={imageUrl} alt="Shelter" className="rounded-lg" />
        </figure>

        <div className="py-4">
          <h2 className="text-4xl font-bold font-playfair">{name}</h2>
          <p className="mt-4 text-xl text-gray-600 font-medium font-work-sans">
            By : {eventId}
          </p>
          <hr className="text-gray-500 my-4" />
          <p className="font-work-sans text-xl font-medium text-gray-600">
            {location}
          </p>
          <hr className="text-gray-500 my-4" />

          <div className="flex gap-2 items-center md:gap-8 mt-6 font-work-sans">
            <h2 className="font-semibold text-black">Contacts:</h2>
            <p className="text-blue-primary font-work-sans gap-2 flex items-center md:gap-6">
              {contactNumbers?.map((contact, index) => (
                <span key={index}>{contact}</span>
              ))}
            </p>
          </div>
          <hr className="text-gray-500 mt-5 md:mt-8" />

          <div className="mt-5">
            <table className="table table-row font-work-sans">
              <tbody>
                <tr>
                  <td className="text-gray-500">Zilla:</td>
                  <td className="text-black font-semibold">{zilla}</td>
                </tr>
                <tr>
                  <td className="text-gray-500">Upazilla:</td>
                  <td className="text-black font-semibold">{upazilla}</td>
                </tr>
                <tr>
                  <td className="text-gray-500">Capacity:</td>
                  <td className="text-black font-semibold">{capacity}</td>
                </tr>
                <tr>
                  <td className="text-gray-500">Current People:</td>
                  <td className="text-black font-semibold">{currentPeople}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Tab navigation */}
      <div className="flex justify-center space-x-4 mb-8">
        <button
          className={`px-4 py-2 ${
            activeTab === "inhabitant"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-black"
          } rounded-md`}
          onClick={() => setActiveTab("inhabitant")}
        >
          Inhabitant
        </button>
        <button
          className={`px-4 py-2 ${
            activeTab === "food"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-black"
          } rounded-md`}
          onClick={() => setActiveTab("food")}
        >
          Food
        </button>
      </div>

      {/* Tab content */}
      <div className="tab-content">
        {activeTab === "inhabitant" && 
        <ShelterInhabitant key={shelterId} shelterId={shelterId} />
        }
        {activeTab === "food" && <ShelterFood key={shelterId} shelterId={shelterId} />}
      </div>

      <ToastContainer />
    </div>
  );
};

export default ShelterDashboard;
