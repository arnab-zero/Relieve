import { NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { GrAnnounce } from "react-icons/gr";

const Navbar = () => {
    const links = <>
        <li><NavLink to='/'
            className={({ isActive, isPending }) =>
                isActive
                    ? "text-white btn bg-inherit border-blue-secondary shadow-none hover:bg-blue-secondary hover:text-gray-700 font-semibold text-lg"
                    : isPending
                        ? "pending"
                        : ""
            }>
            Network
        </NavLink></li>
        <li><NavLink to='/x'
            className={({ isActive, isPending }) =>
                isActive
                    ? "text-white btn bg-inherit border-blue-secondary shadow-none hover:bg-blue-secondary hover:text-gray-700 font-semibold text-lg"
                    : isPending
                        ? "pending"
                        : ""
            }>
            Map
        </NavLink></li>
    </>
    return (
        <div className="navbar bg-blue-primary font-manrope md:px-6 rounded-t-lg">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content text-base-200 font-semibold bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow items-center text-lg">
                        {links}
                    </ul>
                </div>
                <NavLink to={'/'} >
                    <span className="flex items-center gap-1">
                     <img src="/logo.svg" alt="" width={'30'} />
                    <h2 className="text-lg text-white md:text-3xl font-black"> Relieve</h2>
                    </span>
                </NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal text-base-200 font-semibold gap-6 items-center text-lg px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-1 md:gap-4">
                <NavLink to={'/profile'} className={'text-white text-lg'}>
                    <button className="btn btn-outline text-base-200 text-lg">
                    <GrAnnounce /> Report Incident</button>
                </NavLink>
                <NavLink to={'/profile'} className={'text-base-200 font-semibold text-4xl'}><CgProfile /></NavLink>
            </div>
        </div>
    );
};

export default Navbar;