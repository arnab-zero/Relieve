import { useEffect, useState, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useParams } from "react-router-dom";
import ShelterInhabitant from "../components/Shelter/ShelterInhabitant";
import ShelterFood from "../components/Shelter/ShelterFood";
import AuthContext from "../pages/Authentication/AuthProvider"

const ShelterDashboard = () => {
  const { shelterId } = useParams();
  const [shelter, setShelter] = useState({});
  const [active, setActive] = useState("inhabitant");
  const [isAdmin, setIsAdmin] = useState(false);

  // const {user} = useContext(AuthContext)

  useEffect(() => {
    fetch(`http://localhost:8080/api/shelters/${shelterId}`)
      .then((res) => res.json())
      .then((data) => setShelter(data));

    //   if(user && shelter) {
    //     if(shelter.eventId === user.userId) {
    //         setIsAdmin(true);
    //     }
    // }
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

  const handleInhabitantButton = () => {
    setActive('inhabitant');
  }

  const handleFoodButton = () => {
    setActive('food');
  }

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
      <div className="flex justify-center gap-20">
      <button className={`text-2xl font-semibold text-gray-500 ${active === 'inhabitant' ? "border-2 border-b-gray-500 border-t-0 border-l-0 border-r-0" : ""}`} onClick={handleInhabitantButton}>Inhabitants</button>
        <button className={`text-2xl font-semibold text-gray-500 ${active === 'food' ? "border-2 border-b-gray-500 border-t-0 border-l-0 border-r-0" : ""}`} onClick={handleFoodButton}>Food</button>
      </div>
      <div className="">
        {
          active === 'inhabitant' ? <ShelterInhabitant shelterId={shelterId} setIsAdmin={setIsAdmin}></ShelterInhabitant> : <ShelterFood shelterId={shelterId}></ShelterFood>
        }
      </div>
      <ToastContainer />
    </div>
  );
};

export default ShelterDashboard;
