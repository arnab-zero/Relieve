import { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Searchbar from "../components/Home/Searchbar";
import AreaUpdate from "../components/Home/AreaUpdate";
import EmergencyContacts from "../components/Home/EmergencyContacts";

const Home = () => {
    const [incidents, setIncidents] = useState([]);
    const [sortedUpazillaCounts, setSortedUpazillaCounts] = useState([]);

    useEffect(() => {
        fetch('/data/incidents.json')
            .then(res => res.json())
            .then(data => setIncidents(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

<<<<<<< HEAD
    // console.log('sortedUp',sortedUpazillaCounts);
=======
    // console.log('sortedUpazillaCounts',sortedUpazillaCounts);
>>>>>>> 46178eb (contact operation updated)
    return (
        <div>
            <Searchbar />
            <div className="grid grid-cols-5 gap-4">
                <AreaUpdate 
                    incidents={incidents}
                    setSortedUpazillaCounts={setSortedUpazillaCounts} 
                />
                <div className="col-span-3">
                    <Outlet />
                </div>
                <EmergencyContacts 
                    sortedUpazillaCounts={sortedUpazillaCounts} 
                />
            </div>
        </div>
    );
};

export default Home;
