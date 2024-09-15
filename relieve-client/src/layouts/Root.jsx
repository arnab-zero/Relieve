import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div>
            <h1 className="pb-4">Header</h1>
            <Outlet></Outlet>
            <h1 className="py-4">Footer</h1>
        </div>
    );
};

export default Root;