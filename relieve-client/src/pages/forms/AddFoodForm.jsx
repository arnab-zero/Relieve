import { useState } from "react";

const AddFoodForm = ({ shelterId, onAddFood, onClose }) => {
    const [item, setItem] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [donorName, setDonorName] = useState("");
    const [donorContact, setDonorContact] = useState("");
    const [type, setType] = useState("breakfast");
    const [date, setDate] = useState(new Date().toISOString().split("T")[0]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newFood = { item, quantity, donorName, donorContact, type, date, shelterId };

        try {
            const response = await fetch("http://localhost:8080/api/food", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newFood),
            });

            if (response.ok) {
                const addedFood = await response.json();
                onAddFood(addedFood); // Notify parent to update list
                onClose(); // Close the modal
            } else {
                console.error("Failed to add food item");
            }
        } catch (error) {
            console.error("Error adding food item:", error);
        }
    };

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-10 space-y-4 rounded-lg shadow-lg w-2/5">
                <h3 className="text-2xl font-semibold">Add New Food</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <input
                            type="text"
                            placeholder="Item"
                            value={item}
                            onChange={(e) => setItem(e.target.value)}
                            required
                            className="input input-bordered border-2 text-lg font-semibold border-blue-primary w-full"
                        />
                    </div>
                    <div>
                        <input
                            type="number"
                            placeholder="Quantity"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                            // min="1"
                            required
                            className="input input-bordered border-2 text-lg font-semibold border-blue-primary w-full"
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Donor Name"
                            value={donorName}
                            onChange={(e) => setDonorName(e.target.value)}
                            required
                            className="input input-bordered border-2 text-lg font-semibold border-blue-primary w-full"
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Donor Contact"
                            value={donorContact}
                            onChange={(e) => setDonorContact(e.target.value)}
                            required
                            className="input input-bordered border-2 text-lg font-semibold border-blue-primary w-full"
                        />
                    </div>
                    <div>
                        <select
                            value={type}
                            placeholder="Type"
                            onChange={(e) => setType(e.target.value)}
                            required
                            className="select select-bordered border-2 text-lg font-semibold border-blue-primary w-full"
                        >
                            <option value="breakfast">Breakfast</option>
                            <option value="lunch">Lunch</option>
                            <option value="dinner">Dinner</option>
                            <option value="snacks">Snacks</option>
                        </select>
                    </div>
                    <div>
                        <input
                            type="date"
                            placeholder="Date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            required
                            className="input input-bordered border-2 text-lg font-semibold border-blue-primary w-full"
                        />
                    </div>
                    <div className="flex justify-end space-x-4">
                        <button
                            type="button"
                            className="btn"
                            onClick={onClose}
                        >
                            Cancel
                        </button>
                        <button type="submit" className="btn btn-primary bg-blue-primary text-base-100">
                            Add Food
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddFoodForm;
