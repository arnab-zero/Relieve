import { useEffect, useState } from "react";
import AddFoodForm from "../../pages/forms/AddFoodForm";

const ShelterFood = ({ shelterId }) => {
    const [foodItems, setFoodItems] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Fetching food items based on shelterId
    useEffect(() => {
        fetch(`http://localhost:8080/api/food?shelterId=${shelterId}`)
            .then((res) => res.json())
            .then((data) => {
                const sortedData = data.sort((a, b) => {
                    const typeOrder = { breakfast: 0, lunch: 1, dinner: 2, snacks: 3 };
                    if (new Date(a.date) - new Date(b.date) !== 0) {
                        return new Date(a.date) - new Date(b.date);
                    }
                    return typeOrder[a.type] - typeOrder[b.type];
                });
                setFoodItems(sortedData);
            });
    }, [shelterId]);

    // Handle remove food item (delete request)
    const handleRemoveFood = async (foodId) => {
        try {
            const response = await fetch(
                `http://localhost:8080/api/food/${foodId}`,
                { method: "DELETE" }
            );
            if (response.ok) {
                setFoodItems((prev) =>
                    prev.filter((foodItem) => foodItem.foodId !== foodId)
                );
                alert("Food item removed successfully");
            } else {
                console.error("Failed to remove food item.");
                alert('Failed to remove food item');
            }
        } catch (error) {
            console.error("Error removing food item:", error);
        }
    };

    // Add new food item to the list
    const handleAddFood = (newFood) => {
        setFoodItems((prev) => [...prev, newFood].sort((a, b) => {
            const typeOrder = { breakfast: 0, lunch: 1, dinner: 2, snacks: 3 };
            if (new Date(a.date) - new Date(b.date) !== 0) {
                return new Date(a.date) - new Date(b.date);
            }
            return typeOrder[a.type] - typeOrder[b.type];
        }));
    };

    return (
        <div className="container mx-auto min-h-screen">
            <h3 className="text-2xl font-semibold my-5">Managed Foods</h3>
            <button
                className="btn btn-outline my-2 text-blue-600 text-lg"
                onClick={() => setIsModalOpen(true)}
            >
                <i className="mr-2">➕</i> Add Food
            </button>

            <div className="overflow-x-scroll scrollbar-hidden">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr className="text-xl font-semibold text-blue-primary">
                            <th></th>
                            <th>Item</th>
                            <th>Quantity</th>
                            <th>Donor Name</th>
                            <th>Donor Contact</th>
                            <th>Type</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {foodItems.map((foodItem, index) => (
                            <tr key={index}>
                                <td></td>
                                <td className={"text-lg font-semibold text-gray-500"}>
                                    {foodItem.item}
                                </td>
                                <td className={"text-lg font-semibold text-gray-500"}>
                                    {foodItem.quantity}
                                </td>
                                <td className={"text-lg font-semibold text-gray-500"}>
                                    {foodItem.donorName}
                                </td>
                                <td className={"text-lg font-semibold text-gray-500"}>
                                    {foodItem.donorContact}
                                </td>
                                <td className={"text-lg font-semibold text-gray-500"}>
                                    {foodItem.type}
                                </td>
                                <td className={"text-lg font-semibold text-gray-500"}>
                                    {new Date(foodItem.date).toLocaleDateString()}
                                </td>
                                <td>
                                    <button
                                        className="btn bg-red-500 text-white hover:bg-red-600"
                                        onClick={() => handleRemoveFood(foodItem.foodId)}
                                    >
                                        Remove
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {isModalOpen && (
                <AddFoodForm
                    shelterId={shelterId}
                    onAddFood={handleAddFood}
                    onClose={() => setIsModalOpen(false)}
                />
            )}
        </div>
    );
};

export default ShelterFood;
