import React, { useState } from "react";

const DonationSeekingCard = () => {
  const [currentAmount, setCurrentAmount] = useState(185000); // Initial value of currentAmount
  const targetAmount = 200000;
  const percentageCollected = Number((currentAmount / targetAmount) * 100);

  // Function to dynamically update the currentAmount (example)
  const updateCurrentAmount = (newAmount) => {
    setCurrentAmount(newAmount);
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 border">
      <div className="mb-4">
        <h1 className="text-3xl font-semibold mb-2 items-center">
          <span>Event Name </span>
          <span className="text-xs bg-[#1f8d0c] text-white px-2 py-1 rounded-full">
            Verified/Unverified
          </span>
        </h1>
        <h3 className="text-lg text-gray-700 mb-2">Community Name</h3>

        {/* Demo Description */}
        <p className="text-base text-gray-600 mb-2">
          This is a demo description of the event or community. It explains why
          donations are being sought, the impact, and how funds will be used to
          support the cause.
        </p>

        <h3 className="text-lg text-gray-900">
          <span className="font-bold">{currentAmount}</span>/{targetAmount} Tk
        </h3>
      </div>

      <div className="mb-4">
        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className={`h-2.5 rounded-full ${
              percentageCollected < 80 ? "bg-yellow-500" : "bg-green-500"
            }`}
            style={{ width: `${percentageCollected}%` }}
          ></div>
        </div>
        <p className="text-right text-sm text-gray-500 mt-1">
          {percentageCollected.toFixed(2)}% collected
        </p>
      </div>

      <div className="flex justify-between mt-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Donate
        </button>
        <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
          Share Link
        </button>
      </div>
    </div>
  );
};

export default DonationSeekingCard;
