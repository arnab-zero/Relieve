// components/AddFoodForm.jsx
import { useState } from "react";
import { toast } from "react-toastify";

const AddFoodForm = ({ shelterId }) => {
  const [formData, setFormData] = useState({
    item: "",
    quantity: "",
    donorName: "",
    donorContact: "",
    type: "Breakfast", // default type
    date: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form input before sending
    if (!formData.item || !formData.quantity || !formData.donorName || !formData.donorContact || !formData.date) {
      toast.error("Please fill all the fields");
      return;
    }

    const foodData = { ...formData, shelterId: shelterId };

    // Send a POST request to the server to add food
    fetch("http://localhost:8080/api/food", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(foodData),
    })
      .then((res) => res.json())
      .then(() => {
        toast.success("Food item added successfully!");
        setFormData({
          item: "",
          quantity: "",
          donorName: "",
          donorContact: "",
          type: "Breakfast",
          date: "",
        });
      })
      .catch(() => toast.error("Failed to add food item"));
  };

  return (
    <div>
      <button className="btn btn-primary my-4" onClick={() => window.food_modal.showModal()}>
        Add Food
      </button>
      <dialog id="food_modal" className="modal">
        <form method="dialog" className="modal-box w-full max-w-md" onSubmit={handleSubmit}>
          <h3 className="font-bold text-lg">Add Food</h3>
          <div className="form-control">
            <label className="label">Food Item</label>
            <input
              type="text"
              placeholder="Item Name"
              value={formData.item}
              onChange={(e) => setFormData({ ...formData, item: e.target.value })}
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label">Quantity</label>
            <input
              type="number"
              placeholder="Quantity"
              value={formData.quantity}
              onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label">Donor Name</label>
            <input
              type="text"
              placeholder="Donor Name"
              value={formData.donorName}
              onChange={(e) => setFormData({ ...formData, donorName: e.target.value })}
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label">Donor Contact</label>
            <input
              type="text"
              placeholder="Donor Contact"
              value={formData.donorContact}
              onChange={(e) => setFormData({ ...formData, donorContact: e.target.value })}
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label">Type</label>
            <select
              className="select select-bordered"
              value={formData.type}
              onChange={(e) => setFormData({ ...formData, type: e.target.value })}
            >
              <option value="Breakfast">Breakfast</option>
              <option value="Lunch">Lunch</option>
              <option value="Dinner">Dinner</option>
            </select>
          </div>

          <div className="form-control">
            <label className="label">Date</label>
            <input
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              className="input input-bordered"
            />
          </div>

          <div className="modal-action">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <button className="btn" onClick={() => window.food_modal.close()}>
              Close
            </button>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default AddFoodForm;
