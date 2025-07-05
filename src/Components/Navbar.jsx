import React from "react";
import { Link, NavLink } from "react-router";
import logo from "../assets/green-circle-logo.png";

const Navbar = () => {
  //   const { user, logOut } = useContext(AuthContext);
  //   const [showMenu, setShowMenu] = useState(false);

  //   const handleLogout = async () => {
  //     try {
  //       await logOut();
  //     } catch (error) {
  //       console.error("Logout failed", error);
  //     }
  //   };

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? " rounded-none font-bold text-green-400"
              : " hover:text-green-400  "
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/explore"
          className={({ isActive }) =>
            isActive
              ? " rounded-none  font-bold text-green-400"
              : " hover:text-green-400  "
          }
        >
          Explore Gardeners
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/tips"
          className={({ isActive }) =>
            isActive
              ? " rounded-none  font-bold text-green-400"
              : " hover:text-green-400 "
          }
        >
          Browse Tips
        </NavLink>
      </li>
      {/* {user && (
        <>
          <li><NavLink to="/share-tip" className="hover:text-green-500">Share a Garden Tip</NavLink></li>
          <li><NavLink to="/my-tips" className="hover:text-green-500">My Tips</NavLink></li>
        </>
      )} */}
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
            <img src={logo} alt="" className="md:w-22 md:h-22 w-12 h-12" />
          </Link>
          <Link to="/" className="text-xl font-bold ">
            Green Circle
          </Link>
        </div>
      </div>

      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 hidden md:flex">{navLinks}</ul>

        {/* Auth Section */}
        {/* <div className="ml-4">
          {!user ? (
            <Link to="/login" className="btn btn-sm btn-outline">
              <FaSignInAlt className="mr-1" />
              Login/SignUp
            </Link>
          ) : (
            <div className="relative">
              <div
                className="avatar cursor-pointer"
                onClick={() => setShowMenu(!showMenu)}
              >
                <div className="w-10 rounded-full ring ring-green-400 ring-offset-base-100 ring-offset-2">
                  <img src={user.photoURL || "/default-user.png"} alt="User" />
                </div>
              </div>
              {showMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-10">
                  <div className="px-4 py-2 text-sm text-gray-700">
                    {user.displayName || "User"}
                  </div>
                  <button
                    onClick={handleLogout}
                    className="btn btn-sm btn-error w-full flex items-center justify-center gap-2"
                  >
                    <FaSignOutAlt /> Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
