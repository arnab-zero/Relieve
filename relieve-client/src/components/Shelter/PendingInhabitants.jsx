import { useEffect, useState } from "react";
import { Modal } from "daisyui"; // DaisyUI modal import

const PendingInhabitants = ({ shelterId }) => {
  const [pendingInhabitants, setPendingInhabitants] = useState([]);
  const [selectedInhabitant, setSelectedInhabitant] = useState(null); // State to track selected inhabitant for details modal
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  useEffect(() => {
    fetch('/data/shelterInhabitant.json')
      .then((res) => res.json())
      .then((data) => setPendingInhabitants(data));
  }, []);

  const handleViewDetails = (inhabitant) => {
    setSelectedInhabitant(inhabitant); // Set the selected inhabitant data
    setIsModalOpen(true); // Open the modal
  };

  const handleApprove = () => {
    console.log("User approved");
    setIsModalOpen(false); // Close the modal after action
  };

  const handleDecline = () => {
    console.log("User declined");
    setIsModalOpen(false); // Close the modal after action
  };

  return (
    <div>
      <h3 className="text-2xl font-semibold my-5">Inhabitant Requests</h3>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr className="text-xl font-semibold text-blue-primary">
              <th></th>
              <th>Name</th>
              <th>Contact</th>
              <th>Members</th>
              <th>Religion</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {pendingInhabitants.map((pendingInhabitant, index) => (
              <tr key={index}>
                <td></td>
                <td className={"text-lg font-semibold text-gray-500"}>
                  {pendingInhabitant.name}
                </td>
                <td className={"text-lg font-semibold text-gray-500"}>
                  {pendingInhabitant.contact}
                </td>
                <td className={"text-lg font-semibold text-gray-500"}>
                  {pendingInhabitant.totalMember}
                </td>
                <td className={"text-lg font-semibold text-gray-500"}>
                  {pendingInhabitant.religion}
                </td>
                <td>
                  <button
                    className="btn bg-blue-primary text-white hover:text-black"
                    onClick={() => handleViewDetails(pendingInhabitant)}
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && selectedInhabitant && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-10 space-y-2 rounded-lg shadow-lg w-2/5">
            <h3 className="text-2xl font-semibold mb-4">Inhabitant Details</h3>
            <p className="text-lg font-semibold text-gray-600">
              <strong>Name: </strong> {selectedInhabitant.name}
            </p>
            <p className="text-lg font-semibold text-gray-600">
              <strong>Contact:</strong> {selectedInhabitant.contact}
            </p>
            <p className="text-lg font-semibold text-gray-600">
              <strong>Members:</strong> {selectedInhabitant.totalMember}
            </p>
            <p className="text-lg font-semibold text-gray-600">
              <strong>Children:</strong> {selectedInhabitant.numberOfChild}
            </p>
            <p className="text-lg font-semibold text-gray-600">
              <strong>Males:</strong> {selectedInhabitant.numberOfMale}
            </p>
            <p className="text-lg font-semibold text-gray-600">
              <strong>Females:</strong> {selectedInhabitant.numberOfFemale}
            </p>
            <p className="text-lg font-semibold text-gray-600">
              <strong>Religion:</strong> {selectedInhabitant.religion}
            </p>
            <p className="text-lg font-semibold text-gray-600">
              <strong>Remarks:</strong> {selectedInhabitant.remarks}
            </p>

            {/* Approve and Decline buttons */}
            <div className="flex justify-between mt-6">
              <button
                className="btn bg-green-500 text-white hover:bg-green-600"
                onClick={handleApprove}
              >
                Approve
              </button>
              <button
                className="btn bg-red-500 text-white hover:bg-red-600"
                onClick={handleDecline}
              >
                Decline
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PendingInhabitants;
