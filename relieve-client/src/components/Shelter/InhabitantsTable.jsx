// components/InhabitantsTable.jsx
import { toast } from "react-toastify";

const InhabitantsTable = ({ inhabitants, removeInhabitant }) => {
  const handleRemove = (id) => {
    if (window.confirm("Are you sure you want to remove this inhabitant?")) {
      // Call remove function
      removeInhabitant(id);
      toast.success("User removed successfully");
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>Contact</th>
            <th>Total Members</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {inhabitants.map((inhabitant) => (
            <tr key={inhabitant.siId}>
              <td>{inhabitant.name}</td>
              <td>{inhabitant.contact}</td>
              <td>{inhabitant.totalMember}</td>
              <td>
                <button
                  className="btn btn-error btn-sm"
                  onClick={() => handleRemove(inhabitant.siId)}
                >
                  Remove User
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InhabitantsTable;
