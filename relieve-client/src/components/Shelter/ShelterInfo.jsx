
const ShelterInfo = ({ shelter }) => {
    return (
      <div className="p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-xl font-semibold">{shelter.name}</h2>
        <p>Zilla: {shelter.zilla}</p>
        <p>Upazilla: {shelter.upazilla}</p>
        <p>Location: {shelter.location}</p>
        <p>Capacity: {shelter.capacity}</p>
        <p>Current People: {shelter.currentPeople}</p>
        {/* <div>
          {shelter.contactNumbers.map((number, index) => (
            <p key={index}>Contact: {number}</p>
          ))}
        </div> */}
      </div>
    );
  };
  
  export default ShelterInfo;
  