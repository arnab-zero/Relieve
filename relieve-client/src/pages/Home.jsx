import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Searchbar from "../components/Home/Searchbar";
import AreaUpdate from "../components/Home/AreaUpdate";
import EmergencyContacts from "../components/Home/EmergencyContacts";

const Home = () => {
    const [incidents, setIncidents] = useState([]);
    const [sortedUpazillaCounts, setSortedUpazillaCounts] = useState([]);
    const [query, setQuery] = useState("");

    useEffect(() => {
        fetch('')
            .then(res => res.json())
            .then(data => setIncidents(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <Searchbar setQuery={setQuery} />
            <div className="grid grid-cols-5 gap-4">
                <AreaUpdate 
                    incidents={incidents}
                    setSortedUpazillaCounts={setSortedUpazillaCounts} 
                />
                <div className="col-span-3">
                    <Outlet context={{ incidents, query }} />
                </div>
                <EmergencyContacts 
                    sortedUpazillaCounts={sortedUpazillaCounts} 
                />
            </div>
        </div>
    );
};

export default Home;
