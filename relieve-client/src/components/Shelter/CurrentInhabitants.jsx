import { useEffect, useState, useRef } from "react";

const PendingInhabitants = ({ shelterId }) => {
  const [pendingInhabitants, setPendingInhabitants] = useState([]);
  const [selectedInhabitant, setSelectedInhabitant] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null); // Reference for the modal

  // Fetching pending inhabitants
  useEffect(() => {
    fetch(`http://localhost:8080/api/shelter-inhabitants?shelterId=${shelterId}`)
      .then((res) => res.json())
      .then((data) => setPendingInhabitants(data));
  }, [shelterId]);

  // Handle closing the modal when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsModalOpen(false);
      }
    };
    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);

  // Open modal to view details
  const handleViewDetails = (inhabitant) => {
    setSelectedInhabitant(inhabitant);
    setIsModalOpen(true);
  };

  // Handle remove inhabitant (delete request)
  const handleDecline = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/shelter-inhabitants/${selectedInhabitant.siId}?shelterId=${shelterId}`,
        { method: "DELETE" }
      );
      if (response.ok) {
        setPendingInhabitants((prev) =>
          prev.filter((inhabitant) => inhabitant.siId !== selectedInhabitant.siId)
        );
        setIsModalOpen(false);
        alert("Inhabitant removed successfully");
      } else {
        console.error("Failed to remove inhabitant.");
        alert('Failed to remove Inhabitant');
      }
    } catch (error) {
      console.error("Error removing inhabitant:", error);
    }
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
          <div ref={modalRef} className="bg-white p-10 space-y-2 rounded-lg shadow-lg w-2/5">
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

            {/* Approve and Remove Inhabitant buttons */}
            <div className="flex justify-between mt-6">
              <button
                className="btn bg-red-500 text-white hover:bg-red-600"
                onClick={handleDecline}
              >
                Remove Inhabitant
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PendingInhabitants;
