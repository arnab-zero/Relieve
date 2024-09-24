import { useOutletContext } from "react-router-dom";
import DonationSeekingCard from "../DonationSeekingCard";

const DonationCalls = () => {
  const { incidents, setIncidents, query, volunteerCalls, fundCalls } =
    useOutletContext() || { incidents: [], query: "", fundCalls: [] };

  return (
    <div className="mt-6">
      {fundCalls.map((fundCall) => (
        <DonationSeekingCard
          key={fundCall.fundCallId}
          fundCall={fundCall}
        />
      ))}
    </div>
  );
};

export default DonationCalls;
