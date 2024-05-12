import { FaRegHeart } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

import { GiSpellBook } from "react-icons/gi";
import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";
import "./nav.css";

function Nav() {
  const { user, logOut } = useAuth();
  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  const handleTheme = (e) => {
    const box = e.target;
    const checked = box.checked;
    if (checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const beforeActive = " text-yellow underline-transition hover:no-underline";
  const afterActive = "text-black underline-transition hover:no-underline";

  const navList = (
    <>
      <NavLink
        className={({ isActive }) => (isActive ? beforeActive : afterActive)}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? beforeActive : afterActive)}
        to="/all-books"
      >
        All Books
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? beforeActive : afterActive)}
        to="/add-books"
      >
        Add Books
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? beforeActive : afterActive)}
        to="/borrowed-books"
      >
        Borrowed Books
      </NavLink>
    </>
  );
  return (
    <nav className="navbar transition transform  duration-300 ease-in-out">
      {/* navbar start */}
      <div className="navbar-start ">
        <GiSpellBook className="text-4xl  mr-3 font-bold text-yellow" />
        {/* Responsive Nav hamburger */}

        {/* desktop nav*/}
        <Link className="text-3xl font-bold italic" to="/">
          Novel <span className="text-yellow italic">Nest</span> <br />
          <span className="hidden lg:ml-5 text-base italic font-thin">
            Your Favorite BookSelf
          </span>
        </Link>
      </div>
      {/* navbar center */}
      <div className="navbar-center font-semibold">
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-5 hidden lg:flex">
            {navList}
          </ul>
        </div>
      </div>

      {/* Navbar End lg device*/}
      <div className="navbar-end hidden lg:flex ">
        {/* Theme controller */}
        <label className="swap swap-rotate mr-3">
          <input
            type="checkbox"
            className="theme-controller "
            name="theme"
            onChange={handleTheme}
          />
          {/* sun icon */}
          <svg
            className="swap-off fill-yellow w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>
          {/* moon icon */}
          <svg
            className="swap-on fill-yellow w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
        {/* Theme controller end */}
        <ul>
          {user ? (
            <div className="flex justify-center items-center gap-4">
              <img
                alt=""
                className="w-8 h-8 rounded-full ring-1 ring-offset-4 ring-yellow-300"
                src={user?.photoURL || ""}
              />
              <p className="flex flex-col">
                <span className="text-base font-bold">{user?.displayName}</span>{" "}
                <span className="font-thin text-xs italic">
                  {user?.email || "No name Found"}
                </span>
              </p>
              <a
                onClick={logOut}
                class="relative px-4 py-2 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 shadow-inner group"
              >
                <span class="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-yellow group-hover:w-full ease"></span>
                <span class="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-yellow group-hover:w-full ease"></span>
                <span class="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200  group-hover:h-full ease"></span>
                <span class="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200  group-hover:h-full ease"></span>
                <span class="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
                <span class="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
                  Log out
                </span>
              </a>
            </div>
          ) : (
            <Link
              to="/login"
              class="relative px-4 py-2 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 shadow-inner group"
            >
              <span class="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-yellow group-hover:w-full ease"></span>
              <span class="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-yellow group-hover:w-full ease"></span>
              <span class="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200  group-hover:h-full ease"></span>
              <span class="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200  group-hover:h-full ease"></span>
              <span class="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
              <span class="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
                Log in
              </span>
            </Link>
          )}
        </ul>
      </div>
      {/* For small device */}
      <div className="flex-none gap-10 navbar-end  lg:hidden">
        <div className="block navbar-end lg:hidden dropdown dropdown-end">
          {user ? (
            <div>
              <div tabIndex={0} role="button" className="rounded-full avatar">
                <div
                  className="tooltip tooltip-bottom rounded-full avatar w-12 h-12 ml-16 md:ml-44"
                  data-tip={user?.displayName || "User Name not found"}
                >
                  <img
                    alt=""
                    className="w-9 h-9 rounded-full ring-2 ring-offset-4 bg-[#fc6736] ring-[#fc6736]ring-offset-gray-100"
                    src={
                      user?.photoURL ||
                      "https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
                    }
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="text-black font-semibold menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <button onClick={logOut}>Log Out</button>
                </li>
              </ul>
            </div>
          ) : (
            <div className="space-x-4 flex *:text-white">
              <ul className="flex gap-3 font-semibold">
                <li className="text-stone-100 border-none outline-none">
                  {" "}
                  <Link to="/login">LogIn</Link>
                </li>

                <li>
                  <Link to="/register">Register</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
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
          {/* Responsive Nav hamburger */}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navList}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
