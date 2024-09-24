import { useOutletContext } from "react-router-dom";
import VolunteerSeekingCard from "../VolunteerSeekingCard";

const VolunteerCalls = () => {
  const { query, volunteerCalls } = useOutletContext() || {
    incidents: [],
    query: "",
    volunteerCalls: [],
  };

  return (
    <div className="mt-6">
      {volunteerCalls.map((volunteerCall) => (
        <VolunteerSeekingCard
          key={volunteerCall.volunteerCallId}
          volunteerCall={volunteerCall}
        />
      ))}
    </div>
  );
};

export default VolunteerCalls;
