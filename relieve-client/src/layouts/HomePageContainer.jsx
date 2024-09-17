import HomePageNav from "../components/Home/HomePageNav";
import { Outlet } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
const HomePageContainer = () => {
    const { incidents } = useOutletContext() || { incidents: [] };
    console.log(incidents);
    return (
        <div className="h-screen overflow-scroll scrollbar-hide">
            <HomePageNav />
            <Outlet context={{incidents}} />
        </div>
    );
};

export default HomePageContainer;
