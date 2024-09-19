import React, { useState } from "react";
import EventCreationForm from "../pages/forms/EventCreationForm"; // Adjust the import if the path is different

const Network = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  const handleFormSubmit = () => {
    setIsPopupVisible(false); // Hide the popup after form submission
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsPopupVisible(false); // Close the popup if clicked outside the form
    }
  };

  return (
    <div className="flex justify-center mt-8">
      <div className="btn btn-info text-white text-lg" onClick={togglePopup}>
        Create New Community
      </div>

      {isPopupVisible && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={handleBackdropClick}
        >
          <div className="bg-white rounded-lg shadow-lg p-6 relative w-11/12 max-w-lg max-h-[80vh] overflow-y-auto scrollbar-hide">
            <EventCreationForm onSubmit={handleFormSubmit} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Network;
