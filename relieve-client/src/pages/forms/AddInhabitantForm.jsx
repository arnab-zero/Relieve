import { useState } from "react";

const AddInhabitantForm = ({ shelterId, onClose, setSuccessModalOpen, setErrorModalOpen }) => {
  const [inhabitantData, setInhabitantData] = useState({
    name: "",
    contact: "",
    totalMember: "",
    numberOfMale: "",
    numberOfFemale: "",
    numberOfChild: "",
    religion: "",
    remarks: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInhabitantData({ ...inhabitantData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);  // Disable submit button

    const newInhabitant = { ...inhabitantData, shelterId };

    try {
      const response = await fetch("http://localhost:8080/api/shelter-inhabitants", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newInhabitant),
      });

      if (response.ok) {
        setSuccessModalOpen(true);
        onClose();
      } else {
        setErrorModalOpen(true);
      }
    } catch (error) {
      console.error("Error adding inhabitant:", error);
      setErrorModalOpen(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Main Form Modal */}
      <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
          <h3 className="text-3xl text-blue-dark font-bold mb-4">Add New Inhabitant</h3>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-4">
              <input
                type="text"
                name="name"
                value={inhabitantData.name}
                onChange={handleChange}
                placeholder="Name"
                className="input input-bordered border-2 text-lg font-semibold border-blue-primary w-full"
                required
              />
              <input
                type="text"
                name="contact"
                value={inhabitantData.contact}
                onChange={handleChange}
                placeholder="Contact"
                className="input input-bordered border-2 text-lg font-semibold border-blue-primary w-full"
                required
              />
              <input
                type="number"
                name="totalMember"
                value={inhabitantData.totalMember}
                onChange={handleChange}
                placeholder="Total Members"
                className="input input-bordered border-2 text-lg font-semibold border-blue-primary w-full"
                required
              />
              <input
                type="number"
                name="numberOfMale"
                value={inhabitantData.numberOfMale}
                onChange={handleChange}
                placeholder="Number of Males"
                className="input input-bordered border-2 text-lg font-semibold border-blue-primary w-full"
                required
              />
              <input
                type="number"
                name="numberOfFemale"
                value={inhabitantData.numberOfFemale}
                onChange={handleChange}
                placeholder="Number of Females"
                className="input input-bordered border-2 text-lg font-semibold border-blue-primary w-full"
                required
              />
              <input
                type="number"
                name="numberOfChild"
                value={inhabitantData.numberOfChild}
                onChange={handleChange}
                placeholder="Number of Children"
                className="input input-bordered border-2 text-lg font-semibold border-blue-primary w-full"
                required
              />
              <input
                type="text"
                name="religion"
                value={inhabitantData.religion}
                onChange={handleChange}
                placeholder="Religion"
                className="input input-bordered border-2 text-lg font-semibold border-blue-primary w-full"
                required
              />
              <input
                type="text"
                name="remarks"
                value={inhabitantData.remarks}
                onChange={handleChange}
                placeholder="Remarks"
                className="input input-bordered border-2 text-lg font-semibold border-blue-primary w-full"
              />
            </div>

            <div className="flex justify-end mt-4">
              <button
                type="submit"
                className={`btn bg-green-500 text-lg text-white hover:bg-green-600 ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
                disabled={isSubmitting} 
              >
                {isSubmitting ? "Submitting..." : "Add Inhabitant"}
              </button>
              <button
                type="button"
                className="btn bg-gray-500 text-lg text-white hover:bg-gray-600 ml-4"
                onClick={onClose}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddInhabitantForm;
