import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import DonationSeekingCard from "../components/DonationSeekingCard";
import Searchbar from "../components/Home/Searchbar";
import VolunteerSeekingCard from "../components/VolunteerSeekingCard";
import { Outlet, useLoaderData } from "react-router-dom";
import AreaUpdate from "../components/Home/AreaUpdate";
import EmergencyContacts from "../components/Home/EmergencyContacts";

const Home = () => {
    const [incidents, setIncidents] = useState([]);

    useEffect(() => {
        fetch('/data/incidents.json')
            .then(res => res.json())
            .then(data => setIncidents(data))
    }, [])

    return (
        <div>
            {/* <VolunteerSeekingCard />
      <DonationSeekingCard></DonationSeekingCard> */}
            <Searchbar />
            <div className="grid grid-cols-5 gap-4">
                <AreaUpdate incidents={incidents} />
                <div className="col-span-3">
                   <Outlet></Outlet>
                </div>
                <EmergencyContacts />
            </div>

        </div>
    );
};

export default Home;