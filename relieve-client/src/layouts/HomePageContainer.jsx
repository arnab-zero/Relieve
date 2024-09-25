import HomePageNav from "../components/Home/HomepageNav";
import { Outlet } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

const HomePageContainer = () => {
  const { incidents, setIncidents, query, volunteerCalls, fundCalls } =
    useOutletContext() || { incidents: [], query: "" };
  // console.log(incidents);
  return (
    <div className="h-screen overflow-scroll scrollbar-hide">
      <HomePageNav />
      <Outlet
        context={{ incidents, setIncidents, query, volunteerCalls, fundCalls }}
      />
    </div>
  );
};

export default HomePageContainer;
