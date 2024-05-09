import { FaRegHeart } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

import { GiSpellBook } from "react-icons/gi";

function Nav() {
  const navList = (
    <>
      <NavLink to="/all-books">All Books</NavLink>
      <NavLink to="/add-books">Add Books</NavLink>
      <NavLink to="/borrowed-books">Borrowed Books</NavLink>
      <NavLink to="/login">Login</NavLink>
    </>
  );
  return (
    <div className="">
      {/* Upper Part Nav */}
      <div className="navbar bg-base-100 hidden lg:flex ">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Novel Nest</a>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <FaRegHeart className="w-7 h-7" />

                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Lower Part Nav */}
      <div className="navbar bg-base-200">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <GiSpellBook className="text-yellow-500" />
            </div>
            {/* Responsive Nav hamburger */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navList}
            </ul>
          </div>
          {/* desktop nav*/}
          <Link className="lg:hidden" to="/">
            Novel Nest
          </Link>
          <ul className="menu menu-horizontal px-1 space-x-5 hidden lg:flex">
            {navList}
          </ul>
        </div>
    
        {/* Navbar End */}
        <div className="navbar-end">
          <div className="hidden lg:flex">
            <button className="btn btn-secondary">Get In Touch</button>
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
      </div>
    </div>
  );
}

export default Nav;
