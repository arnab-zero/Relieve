import { useEffect, useState } from "react";

const PendingInhabitants = ({ shelterId }) => {
  const [pendingInhabitants, setPendingInhabitants] = useState([]);

  useEffect(() => {
    fetch('/data/shelterInhabitant.json')
      .then((res) => res.json())
      .then((data) => setPendingInhabitants(data));
  }, []);

  return (
    <div>
      <h3 className="text-2xl mb-4">Pending Inhabitant Requests</h3>
      {/* <ul>
        {pendingInhabitants.map((inhabitant) => (
          <li key={inhabitant.id} className="mb-2">
            {inhabitant.name} - {inhabitant.contact}
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default PendingInhabitants;
