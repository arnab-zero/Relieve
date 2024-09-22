// components/RequestedPeople.jsx
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const RequestedPeople = ({ shelterId }) => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    fetch("/data/shelterInhabitant.json")
      .then((res) => res.json())
      .then((data) => {
        const filteredRequests = data.filter((req) => req.shelterId === shelterId);
        setRequests(filteredRequests);
      });
  }, [shelterId]);

  const handleApprove = (request) => {
    fetch("http://localhost:8080/api/shelter-inhabitants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request),
    })
      .then(() => {
        toast.success("Request Approved!");
        setRequests(requests.filter((r) => r.siId !== request.siId));
      })
      .catch(() => toast.error("Failed to approve request"));
  };

  const handleDecline = (siId) => {
    setRequests(requests.filter((r) => r.siId !== siId));
    toast.info("Request Declined");
  };

  return (
    <div>
      <h3 className="font-bold mb-2">Requested People</h3>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>Contact</th>
            <th>Total Members</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request) => (
            <tr key={request.siId}>
              <td>{request.name}</td>
              <td>{request.contact}</td>
              <td>{request.totalMember}</td>
              <td>
                <button className="btn btn-success btn-sm mr-2" onClick={() => handleApprove(request)}>
                  Approve
                </button>
                <button className="btn btn-error btn-sm" onClick={() => handleDecline(request.siId)}>
                  Decline
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RequestedPeople;
