import { FaPeopleLine, FaMapLocation } from "react-icons/fa6";
import { BsFillHouseAddFill } from "react-icons/bs";
import ShelterFinder from "../components/Shelter/ShelterFinder";
import { useEffect, useState, useContext } from "react";
import ShelterCard from "../components/Shelter/ShelterCard";

const Shelter = () => {
  const [shelters, setShelters] = useState([]);
  const [displayShelters, setDisplayShelters] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userId, setUserId] = useState(null);
  const [query, setQuery] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    imageUrl: "",
    zilla: "",
    upazilla: "",
    location: "",
    contactNumbers: "",
    capacity: "",
    currentPeople: "",
  });

  useEffect(() => {
    fetch("http://localhost:8080/api/shelters")
      .then((res) => res.json())
      .then((data) => {
        setShelters(data);
        setDisplayShelters(data); // Initially display all shelters
      });
  }, []);

  const handleCreateShelter = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSearch = (e) => {
    const query = e.target.value;
    setQuery(query);

    if (!query.trim()) {
      // If query is empty, reset to show all shelters
      setDisplayShelters(shelters);
      return;
    }

    const regex = new RegExp(query, "i");
    const filteredShelters = shelters.filter(
      (shelter) =>
        regex.test(shelter.name) ||
        regex.test(shelter.zilla) ||
        regex.test(shelter.upazilla) ||
        regex.test(shelter.location)
    );
    setDisplayShelters(filteredShelters);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newShelter = {
      ...formData,
      contactNumbers: formData.contactNumbers.split(",").map((num) => num.trim()),
      eventId: userId,
    };

    try {
      const response = await fetch("http://localhost:8080/api/shelters", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newShelter),
      });

      if (response.ok) {
        const createdShelter = await response.json();
        setShelters([...shelters, createdShelter]);
        setDisplayShelters([...shelters, createdShelter]); // Update displayShelters as well
        alert("Shelter created successfully!");
        handleCloseModal();
      } else {
        console.error("Error creating shelter", response.statusText);
      }
    } catch (error) {
      console.error("Error submitting shelter form:", error);
    }
  };

  return (
    <div className="font-manrope bg-base-100 min-h-screen">
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
      <div className="mx-auto text-center mt-5 ">
        <input
          type="text"
          placeholder="Type any location, contact or any info"
          value={query}
          onChange={handleSearch}
          className="input input-bordered input-info border-blue-primary focus:border-blue-secondary focus:outline-blue-secondary w-full max-w-md"
        />
      </div>
      <button
        className="flex items-center btn-outline ml-28 mb-4 text-blue-primary border-2 bg-base-100 text-lg font-bold border-blue-primary py-2 px-4 rounded-lg"
        onClick={handleCreateShelter}
      >
        <i className="mr-1 ">➕</i> Create Shelter
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 w-1/2">
            <h2 className="text-2xl font-bold mb-4">Create New Shelter</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Shelter Name"
                value={formData.name}
                onChange={handleChange}
                className="input input-bordered w-full"
                required
              />
              <input
                type="text"
                name="imageUrl"
                placeholder="Image URL"
                value={formData.imageUrl}
                onChange={handleChange}
                className="input input-bordered w-full"
                required
              />
              <input
                type="text"
                name="zilla"
                placeholder="Zilla"
                value={formData.zilla}
                onChange={handleChange}
                className="input input-bordered w-full"
                required
              />
              <input
                type="text"
                name="upazilla"
                placeholder="Upazilla"
                value={formData.upazilla}
                onChange={handleChange}
                className="input input-bordered w-full"
                required
              />
              <input
                type="text"
                name="location"
                placeholder="Location"
                value={formData.location}
                onChange={handleChange}
                className="input input-bordered w-full"
                required
              />
              <input
                type="text"
                name="contactNumbers"
                placeholder="Contact Numbers (comma separated)"
                value={formData.contactNumbers}
                onChange={handleChange}
                className="input input-bordered w-full"
                required
              />
              <input
                type="number"
                name="capacity"
                placeholder="Capacity"
                value={formData.capacity}
                onChange={handleChange}
                className="input input-bordered w-full"
                required
              />
              <input
                type="number"
                name="currentPeople"
                placeholder="Current People"
                value={formData.currentPeople}
                onChange={handleChange}
                className="input input-bordered w-full"
                required
              />
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="btn btn-secondary"
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 container mx-auto mb-6">
        {displayShelters.length > 0 ? (
          displayShelters.map((shelter) => (
            <ShelterCard key={shelter.shelterId} shelter={shelter} setUserId={setUserId} />
          ))
        ) : (
          <p className="text-center">No shelters found matching your search.</p>
        )}
      </div>
    </div>
  );
};

export default Shelter;
