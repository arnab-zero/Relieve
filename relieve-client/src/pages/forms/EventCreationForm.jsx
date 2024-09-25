import { useState, useContext } from "react";
import { zillaUpazillaData } from "./ZillaUpazillaData.js";
import { AuthContext } from "../Authentication/AuthProvider.jsx";

export default function CreateEventForm({ communityId }) {
  const [formData, setFormData] = useState({
    eventName: "",
    communityId: null,
    coordinators: "",
    contactNo: "",
    startDate: "",
    endDate: "",
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

  const { user } = useContext(AuthContext);

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
    if (!formData.endDate) newErrors.endDate = "End Date is required.";
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
        dateFrom: new Date(formData.startDate),
        dateTo: new Date(formData.endDate),
        location: `${formData.location}, ${formData.upazilla}, ${formData.zilla}`,
        volunteers: [], // Add volunteer ids if applicable
        eventAdmins: [ user.userId],
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
          alert('Event created Successfully!')
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
          <input
            type="text"
            id="eventName"
            placeholder="Event Name"
            name="eventName"
            value={formData.eventName}
            onChange={handleChange}
            className={`input input-bordered border-2 text-md font-medium w-full ${
              errors.eventName ? "border-red-500" : "border-blue-primary"
            } rounded-md`}
          />
          {errors.eventName && (
            <p className="text-red-600 text-sm">{errors.eventName}</p>
          )}
        </div>

        {/* Coordinators */}
        <div className="space-y-2">
          <input
            type="text"
            id="coordinators"
            placeholder="Coordinators"
            name="coordinators"
            value={formData.coordinators}
            onChange={handleChange}
            className={`input input-bordered border-2 text-md font-medium w-full ${
              errors.coordinators ? "border-red-500" : "border-blue-primary"
            } rounded-md`}
          />
          {errors.coordinators && (
            <p className="text-red-600 text-sm">{errors.coordinators}</p>
          )}
        </div>

        {/* Contact No */}
        <div className="space-y-2">
          <input
            type="text"
            id="contactNo"
            placeholder="Contact No"
            name="contactNo"
            value={formData.contactNo}
            onChange={handleChange}
            className={`input input-bordered border-2 text-md font-medium w-full ${
              errors.contactNo ? "border-red-500" : "border-blue-primary"
            } rounded-md`}
          />
          {errors.contactNo && (
            <p className="text-red-600 text-sm">{errors.contactNo}</p>
          )}
        </div>

        {/* Starting Date */}
        <div className="space-y-2">
          <input
            type="date"
            id="startDate"
            placeholder="Start Date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            className={`input input-bordered border-2 text-md font-medium w-full ${
              errors.startDate ? "border-red-500" : "border-blue-primary"
            } rounded-md`}
          />
          {errors.startDate && (
            <p className="text-red-600 text-sm">{errors.startDate}</p>
          )}
        </div>

        {/* Ending Date */}
        <div className="space-y-2">
          <input
            type="date"
            id="endDate"
            placeholder="End Date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            className={`input input-bordered border-2 text-md font-medium w-full ${
              errors.endDate ? "border-red-500" : "border-blue-primary"
            } rounded-md`}
          />
          {errors.endDate && (
            <p className="text-red-600 text-sm">{errors.endDate}</p>
          )}
        </div>

        {/* Zilla */}
        <div className="space-y-2">
          <select
            id="zilla"
            name="zilla"
            value={formData.zilla}
            onChange={handleChange}
            className={`input input-bordered border-2 text-md font-medium w-full ${
              errors.zilla ? "border-red-500" : "border-blue-primary"
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
          <select
            id="upazilla"
            name="upazilla"
            value={formData.upazilla}
            onChange={handleChange}
            className="input input-bordered border-2 text-md font-medium w-full rounded-md"
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
          <input
            type="text"
            id="location"
            placeholder="Location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className={`input input-bordered border-2 text-md font-medium w-full ${
              errors.location ? "border-red-500" : "border-blue-primary"
            } rounded-md`}
          />
          {errors.location && (
            <p className="text-red-600 text-sm">{errors.location}</p>
          )}
        </div>

        {/* Details */}
        <div className="space-y-2">
          <textarea
            id="details"
            name="details"
            placeholder="Details"
            value={formData.details}
            onChange={handleChange}
            className={`textarea textarea-bordered border-2 text-md font-medium w-full ${
              errors.details ? "border-red-500" : "border-blue-primary"
            } rounded-md`}
          ></textarea>
          {errors.details && (
            <p className="text-red-600 text-sm">{errors.details}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="btn btn-primary w-full text-lg font-semibold bg-blue-primary hover:bg-blue-secondary"
          >
            Create Event
          </button>
        </div>
      </form>
    </div>
  );
}
