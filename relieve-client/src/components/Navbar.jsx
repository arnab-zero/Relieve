import { useState, useEffect, useRef, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { GrAnnounce } from "react-icons/gr";
import IncidentReportingForm from "../pages/forms/IncidentReportingForm";
import { AuthContext } from "../pages/Authentication/AuthProvider";

const Navbar = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const popupRef = useRef(null);
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleFormSubmit = () => {
    setIsPopupVisible(false);
  };

  const handleReportClick = () => {
    setIsPopupVisible(true);
  };

  const handleAuthClick = () => {
    if (user) {
      logOut()
        .then(() => {
          navigate("/");
        })
        .catch((error) => console.error(error));
    } else {
      navigate("/sign-in");
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsPopupVisible(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [popupRef]);

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-white btn bg-inherit border-white shadow-none hover:bg-[#002b47] hover:text-white font-semibold text-lg"
              : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/network"
          className={({ isActive }) =>
            isActive
              ? "text-white btn bg-inherit border-white shadow-none hover:bg-[#002b47] hover:text-white font-semibold text-lg"
              : ""
          }
        >
          Network
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/map"
          className={({ isActive }) =>
            isActive
              ? "text-white btn bg-inherit  border-white shadow-none hover:bg-[#002b47] hover:text-white font-semibold text-lg"
              : ""
          }
        >
          Map
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/shelter"
          className={({ isActive }) =>
            isActive
              ? "text-white btn bg-inherit  border-white shadow-none hover:bg-[#002b47] hover:text-white font-semibold text-lg"
              : ""
          }
        >
          Shelter
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="relative">
      <div className="navbar bg-blue-primary font-manrope md:px-6">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content text-base-200 font-semibold bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow items-center text-lg"
            >
              {links}
            </ul>
          </div>
          <NavLink to={"/"}>
            <span className="flex items-center gap-1">
              <img src="/logo.svg" alt="" width={"30"} />
              <h2 className="text-lg text-white md:text-3xl font-black">
                Relieve
              </h2>
            </span>
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal text-base-200 font-semibold gap-6 items-center text-lg px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end gap-1 md:gap-4">
          <button
            onClick={handleReportClick}
            className="btn btn-outline text-base-200 text-lg"
          >
            <GrAnnounce /> Report Incident
          </button>
          <div>
          <button
            onClick={handleAuthClick}
            className="btn btn-outline text-base-200 text-lg"
          >
            {user ? "Log Out" : "Sign In"}
          </button>
          {user && (
            <NavLink
              to={"/profile"}
              className={"text-base-200 font-semibold text-4xl"}
            >
              <span className="text-sm ml-2">{user.userName}</span>
            </NavLink>
          )}
          </div>
        </div>
      </div>

      {isPopupVisible && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
          <div
            ref={popupRef}
            className="bg-white rounded-lg shadow-lg p-6 relative w-11/12 max-w-lg max-h-[80vh] overflow-y-auto scrollbar-hide"
          >
            <IncidentReportingForm onSubmit={handleFormSubmit} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
