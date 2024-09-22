// components/FoodSection.jsx
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import AddFoodForm from "../../pages/forms/AddFoodForm";

const FoodSection = ({ shelterId }) => {
  const [foodList, setFoodList] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080/api/food?shelterId=${shelterId}`)
      .then((res) => res.json())
      .then((data) => setFoodList(data));
  }, [shelterId]);

  const handleRemoveFood = (foodId) => {
    fetch(`http://localhost:8080/api/food/${foodId}`, {
      method: "DELETE",
    })
      .then(() => {
        setFoodList(foodList.filter((food) => food.foodId !== foodId));
        toast.success("Food removed successfully");
      })
      .catch(() => toast.error("Failed to remove food"));
  };

  return (
    <div>
      <h3 className="font-bold mb-2">Food Management</h3>

      <AddFoodForm shelterId={shelterId} />

      <table className="table-auto w-full">
        <thead>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {foodList.map((food) => (
            <tr key={food.foodId}>
              <td>{food.item}</td>
              <td>{food.quantity}</td>
              <td>{food.type}</td>
              <td>
                <button className="btn btn-error btn-sm" onClick={() => handleRemoveFood(food.foodId)}>
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FoodSection;
