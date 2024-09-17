import { useEffect, useState } from "react";
import IncidentCard from "./IncidentCard";

const FilterButton = ({text, handleOnClick}) => {
    return (
        <button className="btn text-lg text-blue-primary bg-white border-none drop-shadow-none" onClick={handleOnClick}>{text}</button>
    )
}

const IncidentReports = () => {
    const [incidents, setIncidents] = useState([]);
   const [incidentsDisplay, setIncidentsDisplay] = useState([]);

   useEffect(() => {
    fetch('/data/incidents.json')
    .then(res => res.json())
    .then(data => {
        setIncidents(data);
        setIncidentsDisplay(data);
    })
    .catch(error => console.error('Error fetching data:', error));
}, []);


   const handleAll = () => {
    setIncidentsDisplay(incidents);
   }

   const handleRescue = () => {
    const data = incidents.filter(incident => incident.requestType === 'Rescue');
    setIncidentsDisplay(data);
   }
   const handleRelief = () => {
    const data = incidents.filter(incident => incident.requestType === 'Relief');
    setIncidentsDisplay(data);
   }

   const handleMedicalFacilities = () => {
    const data = incidents.filter(incident => incident.requestType === 'Medical Help');
    setIncidentsDisplay(data);
   }

    return (
        <div className="my-10 font-manrope">
            <div className="flex gap-2 justify-center my-5">
                <FilterButton text={'All'} handleOnClick={handleAll}></FilterButton>
                <FilterButton text={'Rescue'} handleOnClick={handleRescue}></FilterButton>
                <FilterButton text={'Relief'} handleOnClick={handleRelief}></FilterButton>
                <FilterButton text={'Medical Facilities'} handleOnClick={handleMedicalFacilities}></FilterButton>
            </div>
            {
                incidentsDisplay.map(incident => 
                <IncidentCard key={incident.incidentId} 
                incident = {incident}>
                </IncidentCard>)
            }
        </div>
    );
};

export default IncidentReports;