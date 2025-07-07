import React from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext, useState } from "react";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import logo from "../assets/green-circle-logo.png";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);

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
      <li className="ml-5 flex items-center">
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
    </>
  );

  return (
    <div className="navbar sticky z-50 top-0  shadow-md px-4 py-2 bg-green-900 text-white font-merriWeather">
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
          className="menu dropdown-content z-[1] p-2 shadow bg-green-800 rounded-box w-52"
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
