import { useOutletContext } from "react-router-dom";
import DonationSeekingCard from "../DonationSeekingCard";

const DonationCalls = () => {
  const { incidents, setIncidents, query, volunteerCalls, fundCalls } =
    useOutletContext() || { incidents: [], query: "", fundCalls: [] };

  return (
    <div>
      {fundCalls.map((fundCall) => (
        <DonationSeekingCard
          key={fundCall.fundCallId}
          DonationCalls={DonationCalls}
        />
      ))}
    </div>
  );
};

export default DonationCalls;
