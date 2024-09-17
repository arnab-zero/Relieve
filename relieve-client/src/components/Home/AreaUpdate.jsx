import { useEffect, useState } from "react";

const AreaItem = ({ upazilla, count }) => {
  return (
    <div className="py-2 font-manrope">
      <div className="flex justify-between p-2 hover:bg-base-200">
        <span className="text-lg font-semibold text-gray-600">{upazilla}</span>
        <span className={`text-lg p-1`}>{count}</span>
      </div>
      <hr className="border-gray-300" />
    </div>
  );
};

const AreaUpdate = ({ incidents, setSortedUpazillaCounts }) => {
  const [upazillaCounts, setUpazillaCounts] = useState([]);

  useEffect(() => {
    const upazillaCounts = incidents.reduce((acc, incident) => {
      acc[incident.upazilla] = (acc[incident.upazilla] || 0) + 1;
      return acc;
    }, {});


    const countsArray = Object.keys(upazillaCounts).map(upazilla => ({
      upazilla,
      count: upazillaCounts[upazilla]
    }));

    // Sort by count (most incidents first)
    countsArray.sort((a, b) => b.count - a.count);
    setUpazillaCounts(countsArray);

    // Pass sorted upazilla counts to Home.jsx
    if (setSortedUpazillaCounts) {
      setSortedUpazillaCounts(countsArray);
    }
  }, [incidents, setSortedUpazillaCounts]);

  return (
    <div className="font-manrope h-screen bg-base-100 border rounded-t-lg p-4 mb-4">
      <h2 className="text-3xl text-center font-extrabold text-blue-primary mb-2">Area Update</h2>
      <div className="flex justify-between p-2 text-amber-700 font-bold">
        <h4 className="text-xl">Upazilla</h4>
        <h4 className="text-xl">Count</h4>
      </div>
      <hr className="border-gray-300" />
      <div className="flex-grow bg-base-100 rounded-t-lg overflow-y-visible">
        {upazillaCounts.map(({ upazilla, count }) => (
          <AreaItem key={upazilla} upazilla={upazilla} count={count} />
        ))}
      </div>
    </div>
  );
};

export default AreaUpdate;
