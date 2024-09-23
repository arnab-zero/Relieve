import React, { useState } from "react";

export default function FundCallForm({ eventId, onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    targetAmount: "",
    deadline: "",
  });

  const [errors, setErrors] = useState({}); // State for error messages

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" })); // Clear error on change
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.title) newErrors.title = "Title is required.";
    if (!formData.description)
      newErrors.description = "Description is required.";
    if (!formData.targetAmount || formData.targetAmount <= 0) {
      newErrors.targetAmount = "Target Amount must be a positive number.";
    }
    if (!formData.deadline) newErrors.deadline = "Deadline is required.";
    else if (new Date(formData.deadline) <= new Date()) {
      newErrors.deadline = "Deadline must be a future date.";
    }

    setErrors(newErrors); // Set the errors to state
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return; // Validate before submitting

    const fundCallData = {
      ...formData,
      eventId,
      createdAt: new Date().toISOString(),
      receivedAmount: 0,
    };

    try {
      const response = await fetch("http://localhost:8080/fund-call", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(fundCallData),
      });

      if (response.ok) {
        onSubmit();
        onClose();
      } else {
        console.error("Failed to submit fund call");
      }
    } catch (error) {
      console.error("Error submitting fund call:", error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Create Fund Call</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
            {errors.title && (
              <p className="text-red-600 text-sm">{errors.title}</p>
            )}{" "}
            {/* Error message */}
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows="3"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            ></textarea>
            {errors.description && (
              <p className="text-red-600 text-sm">{errors.description}</p>
            )}{" "}
            {/* Error message */}
          </div>
          <div>
            <label
              htmlFor="targetAmount"
              className="block text-sm font-medium text-gray-700"
            >
              Target Amount (BDT)
            </label>
            <input
              type="number"
              id="targetAmount"
              name="targetAmount"
              value={formData.targetAmount}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
            {errors.targetAmount && (
              <p className="text-red-600 text-sm">{errors.targetAmount}</p>
            )}{" "}
            {/* Error message */}
          </div>
          <div>
            <label
              htmlFor="deadline"
              className="block text-sm font-medium text-gray-700"
            >
              Deadline
            </label>
            <input
              type="datetime-local"
              id="deadline"
              name="deadline"
              value={formData.deadline}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
            {errors.deadline && (
              <p className="text-red-600 text-sm">{errors.deadline}</p>
            )}{" "}
            {/* Error message */}
          </div>
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
