import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
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
  const { incidents, query, setIncidents } = useOutletContext() || {
    incidents: [],
    query: "",
    setIncidents: () => {},
  };
  const [incidentsDisplay, setIncidentsDisplay] = useState(incidents);
  const [noDataFound, setNoDataFound] = useState(false);

  useEffect(() => {
    setIncidentsDisplay(incidents);
    handleSearch(query);
  }, [query, incidents]);

  const handleAll = () => {
    setIncidentsDisplay(incidents);
    setNoDataFound(false);
  };

  const handleRescue = () => {
    const data = incidents.filter(
      (incident) => incident.requestType === "Rescue"
    );
    setIncidentsDisplay(data);
    setNoDataFound(data.length === 0);
  };

  const handleRelief = () => {
    const data = incidents.filter(
      (incident) => incident.requestType === "Relief"
    );
    setIncidentsDisplay(data);
    setNoDataFound(data.length === 0);
  };

  const handleMedicalFacilities = () => {
    const data = incidents.filter(
      (incident) => incident.requestType === "Medical Help"
    );
    setIncidentsDisplay(data);
    setNoDataFound(data.length === 0);
  };

  const handleSearch = (query) => {
    if (!query.trim()) {
      setIncidentsDisplay(incidents);
      setNoDataFound(false);
      return;
    }
    const regex = new RegExp(query, "i");
    const data = incidentsDisplay.filter(
      (incident) =>
        regex.test(incident.title) ||
        regex.test(incident.description) ||
        regex.test(incident.location) ||
        regex.test(incident.requestType) ||
        regex.test(incident.contact) ||
        regex.test(incident.zilla) ||
        regex.test(incident.upazilla) ||
        regex.test(incident.updateDetail)
    );
    setIncidentsDisplay(data);
    setNoDataFound(data.length === 0);
  };

  return (
    <div className="my-10 font-manrope">
      <div className="flex gap-2 justify-center my-5">
        <FilterButton text={"All"} handleOnClick={handleAll} />
        <FilterButton text={"Rescue"} handleOnClick={handleRescue} />
        <FilterButton text={"Relief"} handleOnClick={handleRelief} />
        <FilterButton
          text={"Medical Facilities"}
          handleOnClick={handleMedicalFacilities}
        />
      </div>
      {noDataFound ? (
        <p className="text-center text-red-500">No data found</p>
      ) : (
        incidentsDisplay.map((incident) => (
          <IncidentCard
            key={incident.incidentId}
            incident={incident}
            setIncidents={setIncidents}
          />
        ))
      )}
    </div>
  );
};

export default IncidentReports;
