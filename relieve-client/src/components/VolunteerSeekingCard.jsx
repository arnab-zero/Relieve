import React from "react";

const VolunteerSeekingCard = () => {
  return (
    <div className="w-2/5 rounded overflow-hidden shadow-lg p-4 border-2 border-[#86bbd8] mx-auto">
      <div className="mb-4">
        <h1 className="text-3xl font-semibold mb-2">
          Event Name
          <span className="text-xs bg-[#1f8d0c] text-white px-2 py-1 rounded-full ml-2">
            Verified/Unverified
          </span>
        </h1>
        <h3 className="text-lg text-gray-700 mb-2">Community Name</h3>

        <p className="text-base text-gray-600 mb-4 text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          placeat eum consectetur molestias dolor quibusdam, nesciunt numquam
          minus rem. Repudiandae earum vero vel sapiente fugit minima ea
          repellat ad, iste accusantium ratione perspiciatis quae qui.
        </p>
      </div>

      <div className="flex justify-between mt-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Join as a Volunteer
        </button>
        <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
          Share Link
        </button>
      </div>
    </div>
  );
};

export default VolunteerSeekingCard;
