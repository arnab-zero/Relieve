import { useEffect, useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

const EmergencyContacts = () => {
    const [contacts, setContacts] = useState([]);
    const [expandedZilla, setExpandedZilla] = useState(null);

    useEffect(() => {
        fetch('/data/contacts.json')
            .then(res => res.json())
            .then(data => setContacts(data.zilla || []))
    }, []);

    const handleToggle = (zillaIndex) => {
        setExpandedZilla(expandedZilla === zillaIndex ? null : zillaIndex);
    };

    return (
        <div className="font-manrope bg-blue-primary border rounded-t-lg p-4 mb-4">
            <h2 className="text-2xl text-center font-extrabold text-base-300 mb-2">Emergency Contacts</h2>
            {contacts.map((zilla, zillaIndex) => (
                <div key={zillaIndex} className="mb-4">
                    <div className="flex items-center justify-between cursor-pointer" onClick={() => handleToggle(zillaIndex)}>
                        <h3 className="text-lg font-semibold text-base-300">{zilla.name}</h3>
                        {expandedZilla === zillaIndex ? (
                            <BiChevronUp className="text-base-300" />
                        ) : (
                            <BiChevronDown className="text-base-300" />
                        )}
                    </div>
                    {expandedZilla === zillaIndex && (
                        <div className="mt-2">
                            {zilla.upazilas.map((upazila, upazilaIndex) => (
                                <div key={upazilaIndex} className="py-2">
                                    <span className="text-base-300">{upazila.name}</span>
                                    <br />
                                    <div className="px-4">
                                        <span className="text-base-300">UNO: {upazila.contact.uno}</span>
                                        <br />
                                        <span className="text-base-300">Police: {upazila.contact.police}</span>
                                        <br />
                                        <span className="text-base-300">Fire Service: {upazila.contact.fireService}</span>
                                    </div>
                                    <hr className="border-base-300" />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default EmergencyContacts;
