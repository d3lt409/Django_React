import { connect } from "react-redux";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/img/logo_transparent3.png";
import HashLoader from "react-spinners/HashLoader";

function Navbar() {
  const [loading, setloading] = useState();

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-full flex flex-wrap items-center justify-between mx-auto p-8">
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            width={250}
            height={30}
            className="rounded-3xl"
            alt="Flowbite Logo"
          />
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          className="hidden w-full md:block md:w-auto px-16"
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <NavLink
                to="/cases"
                className="block py-2 pl-3 pr-1 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700  md:dark:hover:text-blue-500 text-white"
                aria-current="page"
              >
                Cases
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className="block py-2 pl-3 pr-1 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="block py-2 pl-3 pr-1 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700  text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/carrers"
                className="block py-2 pl-3 pr-1 capitalize rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                carrers
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className="block py-2 pl-3 pr-1 capitalize rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="block py-2 pl-3 pr-20 capitalize rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700  text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                contact
              </NavLink>
            </li>
            <li>
              <button
                to="#"
                className="text-white bg-zinc-700 hover:bg-zinc-800 focus:ring-4 focus:outline-none focus:ring-zinc-300 font-bold rounded-lg text-lD px-5 py-2 text-center mr-3 md:mr-0 dark:bg-zinc-600 dark:hover:bg-slate-500 dark:focus:ring-zinc-800 transition duration-300 ease-in-out"
              >
                Hire us <HashLoader src={loading} size={15} className="h-1 w-2 ml-2 inline p-0" />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

const mapStateToProp = (state) => ({});

export default connect(mapStateToProp, {})(Navbar);
