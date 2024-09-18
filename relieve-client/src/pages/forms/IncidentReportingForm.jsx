import { useState } from "react";
import { zillaUpazillaData } from "./ZillaUpazillaData.js";

export default function IncidentReportingForm() {
  const [formData, setFormData] = useState({
    typeOfNeed: "",
    detail: "",
    zilla: "",
    upazilla: "",
    location: "",
    contactNo: "",
    mapLink: "",
  });

  const [errors, setErrors] = useState({
    typeOfNeed: "",
    detail: "",
    zilla: "",
    location: "",
    contactNo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
      ...(name === "zilla" && { upazilla: "" }), // Reset upazilla if zilla changes
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.typeOfNeed)
      newErrors.typeOfNeed = "Type of need is required.";
    if (!formData.zilla) newErrors.zilla = "Zilla is required.";
    if (!formData.location) newErrors.location = "Location is required.";
    if (!formData.detail) newErrors.detail = "Detail is required.";
    const contactNoError = validateContactNo(formData.contactNo);
    if (contactNoError) newErrors.contactNo = contactNoError;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateContactNo = (contactNo) => {
    // Validate that contactNo contains only digits
    const isValid = /^\d+$/.test(contactNo);
    return isValid ? "" : "Contact number must contain only digits.";
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const currentTime = new Date().toISOString(); // Get the current time in ISO format

      const requestObject = {
        userId: 1, // Default userId
        updateDetail: [], // Default empty array
        location: formData.location,
        upazilla: formData.upazilla,
        zilla: formData.zilla,
        contact: formData.contactNo,
        requestType: formData.typeOfNeed,
        mapLink: formData.mapLink,
        status: "pending", // Default status
        isVerified: false, // Default isVerified
        postedAt: currentTime,
        lastUpdatedAt: currentTime, // Initially same as postedAt
        description: formData.detail, // Use detail as the description
      };

      console.log(requestObject);

      // Send the requestObject to your backend
    }
  };

  const upazillas = formData.zilla
    ? zillaUpazillaData[formData.zilla] || []
    : [];

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Incident Reporting Form
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Type of Need */}
        <div className="space-y-2">
          <label
            htmlFor="typeOfNeed"
            className="block text-sm font-medium text-gray-700"
          >
            Type of Need
          </label>
          <select
            id="typeOfNeed"
            name="typeOfNeed"
            value={formData.typeOfNeed}
            onChange={handleChange}
            className={`mt-1 block w-full py-2 px-3 border ${
              errors.typeOfNeed ? "border-red-500" : "border-gray-300"
            } bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
          >
            <option value="">Select type of need</option>
            <option value="relief">Relief</option>
            <option value="rescue">Rescue</option>
            <option value="medical">Medical Facilities</option>
          </select>
          {errors.typeOfNeed && (
            <p className="text-sm text-red-600 mt-1">{errors.typeOfNeed}</p>
          )}
        </div>

        {/* Detail */}
        <div className="space-y-2">
          <label
            htmlFor="detail"
            className="block text-sm font-medium text-gray-700"
          >
            Detail
          </label>
          <textarea
            id="detail"
            name="detail"
            value={formData.detail}
            onChange={handleChange}
            placeholder="Provide details about your need"
            className={`mt-1 block w-full py-2 px-3 border ${
              errors.detail ? "border-red-500" : "border-gray-300"
            } bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
            rows="3"
          />
          {errors.detail && (
            <p className="text-sm text-red-600 mt-1">{errors.detail}</p>
          )}
        </div>

        {/* Zilla */}
        <div className="space-y-2">
          <label
            htmlFor="zilla"
            className="block text-sm font-medium text-gray-700"
          >
            Zilla
          </label>
          <select
            id="zilla"
            name="zilla"
            value={formData.zilla}
            onChange={handleChange}
            className={`mt-1 block w-full py-2 px-3 border ${
              errors.zilla ? "border-red-500" : "border-gray-300"
            } bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
          >
            <option value="">Select Zilla</option>
            {Object.keys(zillaUpazillaData).map((zilla) => (
              <option key={zilla} value={zilla}>
                {zilla}
              </option>
            ))}
          </select>
          {errors.zilla && (
            <p className="text-sm text-red-600 mt-1">{errors.zilla}</p>
          )}
        </div>

        {/* Upazilla */}
        <div className="space-y-2">
          <label
            htmlFor="upazilla"
            className="block text-sm font-medium text-gray-700"
          >
            Upazilla
          </label>
          <select
            id="upazilla"
            name="upazilla"
            value={formData.upazilla}
            onChange={handleChange}
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            disabled={!formData.zilla} // Disable until zilla is selected
          >
            <option value="">Select Upazilla</option>
            {upazillas.map((upazilla) => (
              <option key={upazilla} value={upazilla}>
                {upazilla}
              </option>
            ))}
          </select>
        </div>

        {/* Location */}
        <div className="space-y-2">
          <label
            htmlFor="location"
            className="block text-sm font-medium text-gray-700"
          >
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Enter your location"
            className={`mt-1 block w-full py-2 px-3 border ${
              errors.location ? "border-red-500" : "border-gray-300"
            } bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
          />
          {errors.location && (
            <p className="text-sm text-red-600 mt-1">{errors.location}</p>
          )}
        </div>

        {/* Contact No */}
        <div className="space-y-2">
          <label
            htmlFor="contactNo"
            className="block text-sm font-medium text-gray-700"
          >
            Contact No.
          </label>
          <input
            type="tel"
            id="contactNo"
            name="contactNo"
            value={formData.contactNo}
            onChange={handleChange}
            placeholder="Enter your contact number"
            className={`mt-1 block w-full py-2 px-3 border ${
              errors.contactNo ? "border-red-500" : "border-gray-300"
            } bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
          />
          {errors.contactNo && (
            <p className="text-sm text-red-600 mt-1">{errors.contactNo}</p>
          )}
        </div>

        {/* Map Location Link */}
        <div className="space-y-2">
          <label
            htmlFor="mapLink"
            className="block text-sm font-medium text-gray-700"
          >
            Map Location Link
          </label>
          <input
            type="url"
            id="mapLink"
            name="mapLink"
            value={formData.mapLink}
            onChange={handleChange}
            placeholder="Enter map location link"
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={handleSubmit}
        >
          Submit Request
        </button>
      </form>
    </div>
  );
}
