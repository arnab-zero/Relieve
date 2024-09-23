import { useState } from "react";
import { zillaUpazillaData } from "./ZillaUpazillaData.js";

export default function CreateEventForm({communityId}) {
  const [formData, setFormData] = useState({
    eventName: "",
    communityId: null,
    coordinators: "",
    contactNo: "",
    startDate: "",
    startTime: "",
    endDate: "",
    endTime: "",
    zilla: "",
    upazilla: "",
    location: "",
    details: "",
  });

  const [errors, setErrors] = useState({});

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
    // Validation checks
    if (!formData.eventName) newErrors.eventName = "Event Name is required.";
    if (!formData.coordinators)
      newErrors.coordinators = "Coordinators are required.";
    if (!formData.contactNo)
      newErrors.contactNo = "Contact number is required.";
    else if (!/^\d+$/.test(formData.contactNo))
      newErrors.contactNo = "Contact number must contain only digits.";
    if (!formData.startDate) newErrors.startDate = "Start Date is required.";
    if (!formData.startTime) newErrors.startTime = "Start Time is required.";
    if (!formData.endDate) newErrors.endDate = "End Date is required.";
    if (!formData.endTime) newErrors.endTime = "End Time is required.";
    if (!formData.zilla) newErrors.zilla = "Zilla is required.";
    if (!formData.upazilla) newErrors.upazilla = "Upazilla is required.";
    if (!formData.location) newErrors.location = "Location is required.";
    if (!formData.details) newErrors.details = "Details are required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      const eventDto = {
        eventName: formData.eventName,
        communityId: communityId,
        description: formData.details,
        contacts: [parseInt(formData.contactNo)], // Assuming it's one contact, adjust if there are more
        dateFrom: new Date(`${formData.startDate}T${formData.startTime}`),
        dateTo: new Date(`${formData.endDate}T${formData.endTime}`),
        location: `${formData.location}, ${formData.upazilla}, ${formData.zilla}`,
        volunteers: [], // Add volunteer ids if applicable
        eventAdmins: [], // Add event admin ids if applicable
        volunteerCalls: [],
        donationCalls: [],
        reports: [],
      };

      try {
        const response = await fetch("http://localhost:8080/events", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(eventDto),
        });

        if (response.ok) {
          const savedEvent = await response.json();
          console.log("Event created:", savedEvent);
        } else {
          console.error("Failed to create event", response.statusText);
        }
      } catch (error) {
        console.error("Error creating event:", error);
      }
    }
  };

  const upazillas = formData.zilla
    ? zillaUpazillaData[formData.zilla] || []
    : [];

  return (
    <div className="min-w-md mx-auto bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Create Event</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Event Name */}
        <div className="space-y-2">
          <label htmlFor="eventName" className="block text-sm font-medium">
            Event Name
          </label>
          <input
            type="text"
            id="eventName"
            name="eventName"
            value={formData.eventName}
            onChange={handleChange}
            className={`mt-1 block w-full py-2 px-3 border ${
              errors.eventName ? "border-red-500" : "border-gray-300"
            } rounded-md`}
          />
          {errors.eventName && (
            <p className="text-red-600 text-sm">{errors.eventName}</p>
          )}
        </div>

        {/* Coordinators */}
        <div className="space-y-2">
          <label htmlFor="coordinators" className="block text-sm font-medium">
            Coordinators
          </label>
          <input
            type="text"
            id="coordinators"
            name="coordinators"
            value={formData.coordinators}
            onChange={handleChange}
            className={`mt-1 block w-full py-2 px-3 border ${
              errors.coordinators ? "border-red-500" : "border-gray-300"
            } rounded-md`}
          />
          {errors.coordinators && (
            <p className="text-red-600 text-sm">{errors.coordinators}</p>
          )}
        </div>

        {/* Contact No */}
        <div className="space-y-2">
          <label htmlFor="contactNo" className="block text-sm font-medium">
            Contact No
          </label>
          <input
            type="text"
            id="contactNo"
            name="contactNo"
            value={formData.contactNo}
            onChange={handleChange}
            className={`mt-1 block w-full py-2 px-3 border ${
              errors.contactNo ? "border-red-500" : "border-gray-300"
            } rounded-md`}
          />
          {errors.contactNo && (
            <p className="text-red-600 text-sm">{errors.contactNo}</p>
          )}
        </div>

        {/* Starting Date and Time */}
        <div className="space-y-2">
          <label htmlFor="startDate" className="block text-sm font-medium">
            Starting at
          </label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            className={`mt-1 block w-full py-2 px-3 border ${
              errors.startDate ? "border-red-500" : "border-gray-300"
            } rounded-md`}
          />
          <input
            type="time"
            id="startTime"
            name="startTime"
            value={formData.startTime}
            onChange={handleChange}
            className={`mt-1 block w-full py-2 px-3 border ${
              errors.startTime ? "border-red-500" : "border-gray-300"
            } rounded-md`}
          />
          {errors.startDate && (
            <p className="text-red-600 text-sm">{errors.startDate}</p>
          )}
          {errors.startTime && (
            <p className="text-red-600 text-sm">{errors.startTime}</p>
          )}
        </div>

        {/* Ending Date and Time */}
        <div className="space-y-2">
          <label htmlFor="endDate" className="block text-sm font-medium">
            Ends at
          </label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            className={`mt-1 block w-full py-2 px-3 border ${
              errors.endDate ? "border-red-500" : "border-gray-300"
            } rounded-md`}
          />
          <input
            type="time"
            id="endTime"
            name="endTime"
            value={formData.endTime}
            onChange={handleChange}
            className={`mt-1 block w-full py-2 px-3 border ${
              errors.endTime ? "border-red-500" : "border-gray-300"
            } rounded-md`}
          />
          {errors.endDate && (
            <p className="text-red-600 text-sm">{errors.endDate}</p>
          )}
          {errors.endTime && (
            <p className="text-red-600 text-sm">{errors.endTime}</p>
          )}
        </div>

        {/* Zilla */}
        <div className="space-y-2">
          <label htmlFor="zilla" className="block text-sm font-medium">
            Zilla
          </label>
          <select
            id="zilla"
            name="zilla"
            value={formData.zilla}
            onChange={handleChange}
            className={`mt-1 block w-full py-2 px-3 border ${
              errors.zilla ? "border-red-500" : "border-gray-300"
            } rounded-md`}
          >
            <option value="">Select Zilla</option>
            {Object.keys(zillaUpazillaData).map((zilla) => (
              <option key={zilla} value={zilla}>
                {zilla}
              </option>
            ))}
          </select>
          {errors.zilla && (
            <p className="text-red-600 text-sm">{errors.zilla}</p>
          )}
        </div>

        {/* Upazilla */}
        <div className="space-y-2">
          <label htmlFor="upazilla" className="block text-sm font-medium">
            Upazilla
          </label>
          <select
            id="upazilla"
            name="upazilla"
            value={formData.upazilla}
            onChange={handleChange}
            className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md"
            disabled={!formData.zilla} // Disable until Zilla is selected
          >
            <option value="">Select Upazilla</option>
            {upazillas.map((upazilla) => (
              <option key={upazilla} value={upazilla}>
                {upazilla}
              </option>
            ))}
          </select>
          {errors.upazilla && (
            <p className="text-red-600 text-sm">{errors.upazilla}</p>
          )}
        </div>

        {/* Location */}
        <div className="space-y-2">
          <label htmlFor="location" className="block text-sm font-medium">
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className={`mt-1 block w-full py-2 px-3 border ${
              errors.location ? "border-red-500" : "border-gray-300"
            } rounded-md`}
          />
          {errors.location && (
            <p className="text-red-600 text-sm">{errors.location}</p>
          )}
        </div>

        {/* Details */}
        <div className="space-y-2">
          <label htmlFor="details" className="block text-sm font-medium">
            Details
          </label>
          <textarea
            id="details"
            name="details"
            value={formData.details}
            onChange={handleChange}
            className={`mt-1 block w-full py-2 px-3 border ${
              errors.details ? "border-red-500" : "border-gray-300"
            } rounded-md`}
          />
          {errors.details && (
            <p className="text-red-600 text-sm">{errors.details}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
        >
          Create Event
        </button>
      </form>
    </div>
  );
}
