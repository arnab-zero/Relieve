import { useEffect, useState } from "react";
import DonationSeekingCard from "../components/DonationSeekingCard";
import Searchbar from "../components/Home/Searchbar";
import VolunteerSeekingCard from "../components/VolunteerSeekingCard";
import { useLoaderData } from "react-router-dom";
import AreaUpdate from "../components/Home/AreaUpdate";

const Home = () => {
    const [incidents, setIncidents] = useState([]);

    useEffect(() => {
        fetch('/data/incidents.json')
        .then(res => res.json())
        .then(data => setIncidents(data))
    },[])
  return (
    <div>
      {/* <VolunteerSeekingCard />
      <DonationSeekingCard></DonationSeekingCard> */}
      <Searchbar />
      <AreaUpdate incidents={incidents} />
    </div>
  );
};

export default Home;