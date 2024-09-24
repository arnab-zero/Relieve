import { useContext, useState } from "react";
import { zillaUpazillaData } from "../forms/ZillaUpazillaData";
import { AuthContext } from "../Authentication/AuthProvider";

export default function CommunityCreationForm() {
  const [formData, setFormData] = useState({
    organizationName: "",
    organizationImage: "",
    coordinatorsName: "",
    coordinatorsNid: "",
    zilla: "",
    upazilla: "",
    location: "",
    contactNumbers: "",
    description: "",
  });

  const { user, logOut } = useContext(AuthContext);
  const userId = user.userId;

  // console.log(userId);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
      ...(name === "zilla" && { upazilla: "" }),
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    // Validation checks
    if (!formData.organizationName)
      newErrors.organizationName = "Organization Name is required.";
    if (!formData.coordinatorsName)
      newErrors.coordinatorsName = "Coordinators Name is required.";
    if (!formData.organizationImage)
      newErrors.coordinatorsNid = "Organization name is required.";
    if (!formData.coordinatorsNid)
      newErrors.coordinatorsNid = "Coordinators NID is required.";
    if (!formData.contactNumbers)
      newErrors.contactNumbers = "Contact Numbers are required.";
    else if (!/^\d+$/.test(formData.contactNumbers))
      newErrors.contactNumbers = "Contact Numbers must contain only digits.";
    if (!formData.zilla) newErrors.zilla = "Zilla is required.";
    if (!formData.upazilla) newErrors.upazilla = "Upazilla is required.";
    if (!formData.location) newErrors.location = "Location is required.";
    if (!formData.description)
      newErrors.description = "Description is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      const organizationDto = {
        orgName: formData.organizationName,
        description: formData.description,
        contactNumbers: [parseInt(formData.contactNumbers)], // Assuming a single contact number
        location: formData.location,
        orgImage: formData.organizationImage,
        nid: [formData.coordinatorsNid],
        ongoingEvents: [],
        pastEvents: [],
        upcomingEvents: [],
        volunteers: [],
      };

      try {
        const response = await fetch("http://localhost:8080/organizations", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(organizationDto),
        });

        if (response.ok) {
          const savedOrganization = await response.json();
          // console.log(savedOrganization);
          const communityId = savedOrganization.orgId; // Assuming organization ID is returned as `id`
          // console.log(communityId);
          await updateUserWithCommunity(userId, communityId); // Update user with the new community ID
        } else {
          console.error("Failed to create organization", response.statusText);
        }
      } catch (error) {
        console.error("Error creating organization:", error);
      }
    }
  };

  const updateUserWithCommunity = async (userId, communityId) => {
    try {
      // Fetch the user data
      const userResponse = await fetch(`http://localhost:8080/api/users/${userId}`);
      if (!userResponse.ok) throw new Error("User not found");

      const userData = await userResponse.json();
      // console.log(userData);

      const updatedCommunityIds = [...userData.communityIds, communityId];

      const updateResponse = await fetch(`http://localhost:8080/api/users/${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...userData, communityIds: updatedCommunityIds }),
      });

      if (updateResponse.ok) {
        console.log("User updated with new community ID");
      } else {
        console.error("Failed to update user", updateResponse.statusText);
      }
    } catch (error) {
      console.error("Error updating user with community:", error);
    }
  };

  const upazillas = formData.zilla
    ? zillaUpazillaData[formData.zilla] || []
    : [];

  return (
    <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6">
      <h2 className="text-3xl font-bold mb-7 text-blue-primary text-center">
        Create Organization
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Organization Name */}
        <div className="space-y-2">
          <input
            type="text"
            id="organizationName"
            placeholder="Organization Name"
            name="organizationName"
            value={formData.organizationName}
            onChange={handleChange}
            className={`input input-bordered border-2 text-md font-medium  w-full ${errors.organizationName ? "border-red-500" : "border-blue-primary"
              } rounded-md`}
          />
          {errors.organizationName && (
            <p className="text-red-600 text-sm">{errors.organizationName}</p>
          )}
        </div>

        {/* Coordinators Name */}
        <div className="space-y-2">
          <input
            type="text"
            id="coordinatorsName"
            placeholder="Coordinators Name"
            name="coordinatorsName"
            value={formData.coordinatorsName}
            onChange={handleChange}
            className={`input input-bordered border-2 text-md font-medium  w-full ${errors.coordinatorsName ? "border-red-500" : "border-blue-primary"
              } rounded-md`}
          />
          {errors.coordinatorsName && (
            <p className="text-red-600 text-sm">{errors.coordinatorsName}</p>
          )}
        </div>

        {/* Coordinators NID */}
        <div className="space-y-2">
          <input
            type="text"
            id="coordinatorsNid"
            placeholder="Coordinators NID Number"
            name="coordinatorsNid"
            value={formData.coordinatorsNid}
            onChange={handleChange}
            className={`input input-bordered border-2 text-md font-medium  w-full ${errors.coordinatorsNid ? "border-red-500" : "border-blue-primary"
              } rounded-md`}
          />
          {errors.coordinatorsNid && (
            <p className="text-red-600 text-sm">{errors.coordinatorsNid}</p>
          )}
        </div>

        <div className="space-y-2">
          <input
            type="text"
            id="organizationImage"
            placeholder="Organization Image"
            name="organizationImage"
            value={formData.organizationImage}
            onChange={handleChange}
            className={`input input-bordered border-2 text-md font-medium  w-full ${errors.organizationImage ? "border-red-500" : "border-blue-primary"
              } rounded-md`}
          />
          {errors.organizationImage && (
            <p className="text-red-600 text-sm">{errors.organizationImage}</p>
          )}
        </div>

        {/* Zilla */}
        <div className="space-y-2">
          <select
            id="zilla"
            name="zilla"
            placeholder="Select District"
            value={formData.zilla}
            onChange={handleChange}
            className={`input input-bordered border-2 text-md font-medium  w-full ${errors.zilla ? "border-red-500" : "border-blue-primary"
              } rounded-md`}
          >
            <option className={"text-gray-400"} value="">Select Zilla</option>
            {Object.keys(zillaUpazillaData).map((zilla) => (
              <option className={"text-gray-400"} key={zilla} value={zilla}>
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
            className={`input input-bordered border-2 text-md font-medium  w-full ${errors.upazilla ? "border-red-500" : "border-blue-primary"
              } rounded-md`}
            disabled={!formData.zilla}
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
            className={`input input-bordered border-2 text-md font-medium  w-full ${errors.location ? "border-red-500" : "border-blue-primary"
              } rounded-md`}
          />
          {errors.location && (
            <p className="text-red-600 text-sm">{errors.location}</p>
          )}
        </div>

        {/* Contact Numbers */}
        <div className="space-y-2">
          <input
            type="text"
            id="contactNumbers"
            name="contactNumbers"
            placeholder="Contact Numbers"
            value={formData.contactNumbers}
            onChange={handleChange}
            className={`input input-bordered border-2 text-md font-medium  w-full ${errors.contactNumbers ? "border-red-500" : "border-blue-primary"
              } rounded-md`}
          />
          {errors.contactNumbers && (
            <p className="text-red-600 text-sm">{errors.contactNumbers}</p>
          )}
        </div>

        {/* Description */}
        <div className="space-y-2">
          <label htmlFor="description" className="block text-sm font-medium">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className={`input input-bordered border-2 text-md font-medium  w-full ${errors.description ? "border-red-500" : "border-blue-primary"
              } rounded-md`}
          />
          {errors.description && (
            <p className="text-red-600 text-sm">{errors.description}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-primary text-base-100 text-lg font-semibold py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}