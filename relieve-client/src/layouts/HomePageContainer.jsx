import { Outlet } from "react-router-dom";
import HomePageNav from "../components/Home/HomePageNav";


const HomePageContainer = () => {
    return (
        <div>
            <HomePageNav></HomePageNav>
            <Outlet></Outlet>
        </div>
    );
};

export default HomePageContainer;