import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Root = () => {
    return (
        <div className="mx-2">
            <Navbar className="mb-10"></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;