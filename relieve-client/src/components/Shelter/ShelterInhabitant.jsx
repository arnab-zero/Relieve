import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import PendingInhabitants from "./PendingInhabitants";
import CurrentInhabitants from "./CurrentInhabitants";
import AddInhabitantForm from "../../pages/forms/AddInhabitantForm";

const ShelterInhabitant = ({ shelterId, setIsAdmin }) => {
  const [activeInhabitantTab, setActiveInhabitantTab] = useState("current-inhabitants");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const [errorModalOpen, setErrorModalOpen] = useState(false);

  const handleInhabitantRequests = () => {
    setActiveInhabitantTab("inhabitant-requests");
  };

  const handleCurrentInhabitant = () => {
    setActiveInhabitantTab("current-inhabitants");
  };

  const handleAddMember = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="my-10 container mx-auto font-manrope min-h-screen">
      <h2 className="text-4xl font-bold text-blue-primary text-center my-10">
        Shelter Inhabitants
      </h2>
      <button
        className="btn bg-blue-600 text-base-100 text-lg"
        onClick={handleAddMember} // Open modal
      >
        <i className="mr-2">➕</i> Add Member
      </button>
      <div className="flex justify-center gap-10">
        {/* <button
          className={`text-xl font-semibold text-gray-500 ${activeInhabitantTab === "inhabitant-requests"
              ? "border-2 border-b-gray-500 border-t-0 border-l-0 border-r-0"
              : ""
            }`}
          onClick={handleInhabitantRequests}
        >
          Inhabitant Requests
        </button> */}
        <button
          className={`text-xl font-semibold text-gray-500 ${activeInhabitantTab === "current-inhabitants"
              ? "border-2 border-b-gray-500 border-t-0 border-l-0 border-r-0"
              : ""
            }`}
          onClick={handleCurrentInhabitant}
        >
          Current Inhabitants
        </button>
      </div>
      <div className="">
        {activeInhabitantTab === "inhabitant-requests" ? (
          <PendingInhabitants />
        ) : (
          <CurrentInhabitants />
        )}
      </div>

      {isModalOpen && (
        <AddInhabitantForm
          shelterId={shelterId}
          setSuccessModalOpen={setSuccessModalOpen}
          setErrorModalOpen={setErrorModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
      {/* Success Modal */}
      {successModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-xl font-bold text-green-500 mb-4">Inhabitant Added Successfully!</h2>
            <button
              onClick={() => setSuccessModalOpen(false)}
              className="btn bg-green-500 text-white"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Error Modal */}
      {errorModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-xl font-bold text-red-500 mb-4">Failed to Add Inhabitant</h2>
            <button
              onClick={() => setErrorModalOpen(false)}
              className="btn bg-red-500 text-white"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShelterInhabitant;
