import { useOutletContext } from "react-router-dom";
import { useState, useEffect } from "react";
import IncidentCard from "./IncidentCard";

const FilterButton = ({ text, handleOnClick }) => {
    return (
        <button
            className="btn text-lg text-blue-primary bg-white border-none drop-shadow-none"
            onClick={handleOnClick}
        >
            {text}
        </button>
    );
};

const IncidentReports = () => {
    const { incidents } = useOutletContext() || { incidents: [] };
    const [incidentsDisplay, setIncidentsDisplay] = useState([]);

    useEffect(() => {
        if (incidents.length) {
            setIncidentsDisplay(incidents);
        }
    }, [incidents]);

    const handleAll = () => {
        setIncidentsDisplay(incidents);
    };

    const handleRescue = () => {
        const data = incidents.filter(incident => incident.requestType === 'Rescue');
        setIncidentsDisplay(data);
    };

    const handleRelief = () => {
        const data = incidents.filter(incident => incident.requestType === 'Relief');
        setIncidentsDisplay(data);
    };

    const handleMedicalFacilities = () => {
        const data = incidents.filter(incident => incident.requestType === 'Medical Help');
        setIncidentsDisplay(data);
    };

    if (!incidents.length) {
        return <p>No incidents available</p>;
    }

    return (
        <div className="my-10 font-manrope">
            <div className="flex gap-2 justify-center my-5">
                <FilterButton text={'All'} handleOnClick={handleAll} />
                <FilterButton text={'Rescue'} handleOnClick={handleRescue} />
                <FilterButton text={'Relief'} handleOnClick={handleRelief} />
                <FilterButton text={'Medical Facilities'} handleOnClick={handleMedicalFacilities} />
            </div>
            <div className="overflow-scroll h-lvh">
                {
                    incidentsDisplay.map(incident => (
                        <IncidentCard
                            key={incident.incidentId}
                            incident={incident}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default IncidentReports;
