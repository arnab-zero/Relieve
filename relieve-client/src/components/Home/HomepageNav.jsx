import { NavLink } from "react-router-dom";

const HomePageNav = () => {
    const links = <>
        <li>
            <NavLink to='/'
                className={({ isActive }) =>
                    isActive
                        ? "text-gray-700 border-b-2 border-gray-400"
                        : "text-gray-500"
                }>
                Incident Reports
            </NavLink>
        </li>
        <li>
            <NavLink to='/volunteer-calls'
                className={({ isActive }) =>
                    isActive
                        ? "text-gray-700 border-b-2 border-gray-400"
                        : "text-gray-500"
                }>
                Volunteer Calls
            </NavLink>
        </li>
        <li>
            <NavLink to='/donation-calls'
                className={({ isActive }) =>
                    isActive
                        ? "text-gray-700 border-b-2 border-gray-400"
                        : "text-gray-500"
                }>
                Donation Calls
            </NavLink>
        </li>
        <li>
            <NavLink to='/alerts'
                className={({ isActive }) =>
                    isActive
                        ? "text-gray-700 border-b-2 border-gray-400"
                        : "text-gray-500"
                }>
                Alerts
            </NavLink>
        </li>
    </>

    return (
        <nav>
            <ul className="flex justify-center space-x-4 font-manrope text-xl font-semibold">
                {links}
            </ul>
        </nav>
    );
};

export default HomePageNav;
