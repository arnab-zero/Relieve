import HomePageNav from "../components/Home/HomePageNav";
import { Outlet } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
const HomePageContainer = () => {
    const { incidents, query } = useOutletContext() || { incidents: [], query: "" };
    console.log(incidents);
    return (
        <div className="h-screen overflow-scroll scrollbar-hide">
            <HomePageNav />
            <Outlet context={{ incidents, query }} />
        </div>
    );
};

export default HomePageContainer;
