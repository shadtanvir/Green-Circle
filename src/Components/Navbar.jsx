import React, { useEffect } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext, useState } from "react";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import logo from "../assets/green-circle-logo.png";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") === "dark" ? "dark" : "light"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleChange = (e) => {
    setTheme(e.target.checked ? "dark" : "light");
  };

  const handleLogout = () => {
    logOut()
      .then(() => {
        // alert("You are logged out!");
      })
      .catch((error) => {
        // alert(error);
      });
  };

  const navLinks = (
    <>
      <li className="flex items-center">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "rounded-none font-bold text-green-400"
              : "hover:text-green-400"
          }
        >
          Home
        </NavLink>
      </li>
      <li className="flex items-center">
        <NavLink
          to="/explore-gardeners"
          className={({ isActive }) =>
            isActive
              ? "rounded-none font-bold text-green-400"
              : "hover:text-green-400"
          }
        >
          Explore Gardeners
        </NavLink>
      </li>
      <li className="flex items-center">
        <NavLink
          to="/tips"
          className={({ isActive }) =>
            isActive
              ? "rounded-none font-bold text-green-400"
              : "hover:text-green-400"
          }
        >
          Browse Tips
        </NavLink>
      </li>

      {user && (
        <>
          <li className="flex items-center">
            <NavLink
              to="/share-tip"
              className={({ isActive }) =>
                isActive
                  ? "rounded-none font-bold text-green-400"
                  : "hover:text-green-400"
              }
            >
              Share a Garden Tip
            </NavLink>
          </li>
          <li className="flex items-center">
            <NavLink
              to="/my-tips"
              className={({ isActive }) =>
                isActive
                  ? "rounded-none font-bold text-green-400"
                  : "hover:text-green-400"
              }
            >
              My Tips
            </NavLink>
          </li>
        </>
      )}

      {/* Final item: Avatar or Login */}
      <li className="ml-4 flex items-center">
        {!user ? (
          <NavLink
            to="/auth/register"
            className="btn btn-sm btn-success font-merriWeather text-white"
          >
            SignUp
          </NavLink>
        ) : (
          <div className="relative flex items-center">
            <img
              src={user.photoURL}
              alt="User"
              className="w-9 h-9 rounded-full cursor-pointer border-2 border-success"
              title={user.displayName}
              onClick={() => setDropdownOpen(!dropdownOpen)}
            />
            {dropdownOpen && (
              <button
                onClick={handleLogout}
                className="w-full font-merriWeather flex items-center ml-4 text-left px-3 py-2 rounded bg-amber-50 text-red-700"
              >
                Logout
              </button>
            )}
          </div>
        )}
      </li>
      <li className="flex items-center ml-4">
        <label className="swap swap-rotate">
          {/* hidden checkbox */}
          <input
            type="checkbox"
            checked={theme === "dark"}
            onChange={handleChange}
            className="hidden"
          />

          {/* sun icon */}
          {/* sun icon */}
          <svg
            className="swap-off h-10 w-10 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          {/* moon icon */}
          <svg
            className="swap-on h-10 w-10 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
      </li>
    </>
  );

  return (
    <div className="navbar sticky z-50 top-0  shadow-md px-4 py-2 bg-primary text-white font-merriWeather">
      {/* Mobile dropdown */}
      <div className="dropdown md:hidden">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {" "}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />{" "}
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu dropdown-content z-[1] p-2 shadow bg-primary rounded-box w-52"
        >
          {navLinks}
        </ul>
      </div>
      <div className="flex-1  ">
        <div className="flex items-center">
          <Link to="/">
            <img src={logo} alt="logo" className="md:w-22 md:h-22 w-12 h-12" />
          </Link>
          <Link to="/" className="text-xl font-bold ">
            Green Circle
          </Link>
        </div>
      </div>

      <div className="flex-none">
        <ul className="menu menu-horizontal md:items-center px-1 font-merriWeather  hidden md:flex">
          {navLinks}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
