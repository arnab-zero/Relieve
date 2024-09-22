// components/AddPeopleForm.jsx
import { useState } from "react";
import { toast } from "react-toastify";

const AddPeopleForm = ({ shelterId }) => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    totalMember: "",
    numberOfMale: "",
    numberOfFemale: "",
    numberOfChild: "",
    religion: "",
    remarks: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form input
    if (!formData.name || !formData.contact) {
      toast.error("Please fill all the fields");
      return;
    }

    const inhabitantData = { ...formData, shelterId };

    // Send a POST request to add new inhabitant
    fetch("http://localhost:8080/api/shelter-inhabitants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inhabitantData),
    })
      .then(() => {
        toast.success("Inhabitant added successfully!");
        setFormData({
          name: "",
          contact: "",
          totalMember: "",
          numberOfMale: "",
          numberOfFemale: "",
          numberOfChild: "",
          religion: "",
          remarks: "",
        });
      })
      .catch(() => toast.error("Failed to add inhabitant"));
  };

  return (
    <div>
      <button className="btn btn-primary my-4" onClick={() => window.add_people_modal.showModal()}>
        Add Inhabitant
      </button>
      <dialog id="add_people_modal" className="modal">
        <form method="dialog" className="modal-box w-full max-w-md" onSubmit={handleSubmit}>
          <h3 className="font-bold text-lg">Add New Inhabitant</h3>

          <div className="form-control">
            <label className="label">Name</label>
            <input
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="input input-bordered"
            />
          </div>

          {/* Other input fields for contact, number of males/females/children, etc. */}
          {/* Example: */}
          <div className="form-control">
            <label className="label">Contact</label>
            <input
              type="text"
              placeholder="Contact"
              value={formData.contact}
              onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
              className="input input-bordered"
            />
          </div>

          <div className="modal-action">
            <button className="btn">Close</button>
            <button className="btn btn-primary" type="submit">
              Add
            </button>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default AddPeopleForm;
