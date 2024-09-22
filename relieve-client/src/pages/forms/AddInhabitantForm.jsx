
const AddInhabitantForm = ({ shelterId, addInhabitant }) => {
    const [formData, setFormData] = useState({ name: "", contact: "", totalMember: 1 });
  
    const handleSubmit = (e) => {
      e.preventDefault();
      addInhabitant(formData);
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="input input-bordered w-full"
        />
        <input
          type="text"
          placeholder="Contact"
          value={formData.contact}
          onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
          className="input input-bordered w-full"
        />
        <input
          type="number"
          placeholder="Total Members"
          value={formData.totalMember}
          onChange={(e) => setFormData({ ...formData, totalMember: e.target.value })}
          className="input input-bordered w-full"
        />
        <button type="submit" className="btn btn-primary">
          Add Inhabitant
        </button>
      </form>
    );
  };
  
  export default AddInhabitantForm;
  