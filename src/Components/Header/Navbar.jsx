import React from "react";
import {Link, NavLink} from "react-router";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 py-4 font-work-sans">
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
            className="menu menu-sm dropdown-content bg-green-50 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <Link
              className="hover:text-primary-color px-2 py-1 block text-lg font-semibold"
              to="/"
            >
              Home
            </Link>
            <Link
              className="hover:text-primary-color px-2 py-1 block text-lg font-semibold"
              to="/listed-books"
            >
              Listed Books
            </Link>
            <Link
              className="hover:text-primary-color px-2 py-1 block text-lg font-semibold"
              to="/pages-to-read"
            >
              Pages to Read
            </Link>
          </ul>
        </div>
        <Link to="/" className="text-2xl font-bold cursor-pointer">
          Book Vibe
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex gap-4 bg-white z-50">
          <NavLink
            to="/"
            className="text-lg font-semibold btn bg-transparent border-1 border-transparent hover:text-primary-color hover:border-primary-color rounded-lg"
          >
            Home
          </NavLink>
          <NavLink
            className="text-lg font-semibold btn bg-transparent border-1 border-transparent hover:text-primary-color hover:border-primary-color rounded-lg"
            to="/listed-books"
          >
            Listed Books
          </NavLink>
          <NavLink
            className="text-lg font-semibold btn bg-transparent border-1 border-transparent hover:text-primary-color hover:border-primary-color rounded-lg"
            to="/pages-to-read"
          >
            Pages to Read
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end flex gap-4">
        <a className="btn bg-primary-color text-white py-6 px-5 rounded-lg font-semibold text-lg">
          Sign In
        </a>
        <a className="btn bg-skyblue-color text-white py-6 px-5 rounded-lg font-semibold text-lg">
          Sign Up
        </a>
      </div>
    </div>
  );
};

export default Navbar;
