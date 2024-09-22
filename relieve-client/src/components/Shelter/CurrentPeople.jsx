// components/CurrentPeople.jsx
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const CurrentPeople = ({ shelterId }) => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080/api/shelter-inhabitants?shelterId=${shelterId}`)
      .then((res) => res.json())
      .then((data) => setPeople(data));
  }, [shelterId]);

  const handleRemove = (siId) => {
    // Simulate removal
    setPeople(people.filter((person) => person.siId !== siId));
    toast.success("User removed successfully");
  };

  return (
    <div>
      <h3 className="font-bold mb-2">Current People</h3>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>Contact</th>
            <th>Religion</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {people.map((person) => (
            <tr key={person.siId}>
              <td>{person.name}</td>
              <td>{person.contact}</td>
              <td>{person.religion}</td>
              <td>
                <button className="btn btn-error btn-sm" onClick={() => handleRemove(person.siId)}>
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CurrentPeople;
