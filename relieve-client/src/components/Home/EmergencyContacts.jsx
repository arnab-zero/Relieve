import { useEffect, useState } from "react";
import { IoMdCall } from "react-icons/io";

const EmergencyContacts = ({ sortedUpazillaCounts }) => {
  const [allContacts, setAllContacts] = useState([]);
  const [top10Upazilas, setTop10Upazilas] = useState([]);
  const [displayContacts, setDisplayContacts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [nationalEmergency, setNationalEmergency] = useState({});

  useEffect(() => {
    fetch("/data/contacts.json")
      .then((res) => res.json())
      .then((data) => {
        const contacts = data.zilla.flatMap((zilla) =>
          zilla.upazilas.map((upazila) => ({
            ...upazila,
            zilla: zilla.name,
          }))
        );

        setAllContacts(contacts);

        const contactMap = new Map(
          contacts.map((contact) => [contact.name, contact])
        );
        const top10 = sortedUpazillaCounts
          .slice(0, 10)
          .map(({ upazilla }) => contactMap.get(upazilla))
          .filter(Boolean);

        setTop10Upazilas(top10);
        setDisplayContacts(top10);
        setNationalEmergency(data.national.emergencyNumbers);
      });
  }, [sortedUpazillaCounts]);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    if (query) {
      const filtered = allContacts.filter(
        (contact) =>
          contact.name.toLowerCase().includes(query) ||
          contact.zilla.toLowerCase().includes(query)
      );
      setDisplayContacts(filtered);
    } else {
      setDisplayContacts(top10Upazilas);
    }
  };

  return (
    <div className="font-manrope bg-blue-primary border rounded-t-lg p-4 mb-4">
      <h2 className="text-2xl text-center font-extrabold text-base-300 mb-2">
        Emergency Contacts
      </h2>
      <div className="flex justify-center mb-4">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search upazila or zilla..."
          className="input input-bordered input-info border-blue-secondary focus:border-blue-secondary focus:outline-blue-secondary w-full max-w-md"
        />
      </div>
      <div className="text-center text-base-300 mb-4">
        <div className="flex justify-center items-center mb-2">
          <IoMdCall className="text-base-300 mr-2" />
          <span className="text-lg font-bold">
            National Emergency: {nationalEmergency.police}
          </span>
        </div>
      </div>
      <div className="max-h-screen overflow-scroll scrollbar-hide">
        {displayContacts.map((upazila, index) => (
          <div key={index} className="py-2">
            <h3 className="text-lg font-semibold text-base-300">
              {upazila.name} ({upazila.zilla})
            </h3>
            <div className="px-4">
              <span className="text-base-300">UNO: {upazila.contact.uno}</span>
              <br />
              <span className="text-base-300">
                Police: {upazila.contact.police}
              </span>
              <br />
              <span className="text-base-300">
                Fire Service: {upazila.contact.fireService}
              </span>
            </div>
            <hr className="border-base-300 my-2" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmergencyContacts;
