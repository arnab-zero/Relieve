import { useOutletContext } from "react-router-dom";
import VolunteerSeekingCard from "../VolunteerSeekingCard";
import { useEffect, useState } from "react";

const VolunteerCalls = () => {
  const { query, volunteerCalls } = useOutletContext() || {
    incidents: [],
    query: "",
    volunteerCalls: [],
  };
  const [displayVolunteerCalls, setDisplayVolunteerCalls] = useState([]);

  useEffect(() => {
    setDisplayVolunteerCalls(volunteerCalls)
    handleSearch(query);
  }, [query, volunteerCalls]);

  const handleSearch = (query) => {
    if (!query.trim()) {
      setDisplayVolunteerCalls(volunteerCalls)
      return;
    }
    const regex = new RegExp(query, "i");
    const data = displayVolunteerCalls.filter(
      (displayVolunteerCall) =>
        regex.test(displayVolunteerCall.title) ||
        regex.test(displayVolunteerCall.description) ||
        regex.test(displayVolunteerCall.location) ||
        regex.test(displayVolunteerCall.eventName)
    );
    setDisplayVolunteerCalls(data);
  };

  return (
    <div className="mt-6">
      {displayVolunteerCalls.map((volunteerCall) => (
        <VolunteerSeekingCard
          key={volunteerCall.volunteerCallId}
          volunteerCall={volunteerCall}
        />
      ))}
    </div>
  );
};

export default VolunteerCalls;
