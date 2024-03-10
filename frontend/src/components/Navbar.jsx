import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/logo.svg";
import Spinner from "./Spinner";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLogout = async () => {
    closeMenu();
    setIsLoggingOut(true);

    // Simulate a delay for the logout process (you can replace this with your actual logout logic)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    localStorage.removeItem("token");
    setIsLoggingOut(false);
    navigate("/login");
  };

  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  return (
    <div>
      <nav className="border-gray-200 bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <button
            onClick={() => {
              closeMenu();
              navigate("/");
            }}
            className="flex items-center"
          >
            <img src={logo} className="h-8 mr-3" alt="Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              iNotebook
            </span>
          </button>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`md:flex ${
              isMenuOpen ? "flex" : "hidden"
            } md:w-auto sm:w-full max-[641px]:w-full`}
            id="navbar-default"
          >
            <ul
              style={{ width: "100%" }}
              className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-gray-800 md:bg-gray-900 border-gray-700 items-baseline"
            >
              <li>
                <button
                  onClick={() => {
                    closeMenu();
                    navigate("/");
                  }}
                  className={`${
                    location.pathname === "/"
                      ? "block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 text-white md:text-blue-500"
                      : "block py-2 pl-3 pr-4 rounded hover:bg-blue-700 md:border-0 md:p-0 text-white md:hover:text-blue-500 hover:text-white md:hover:bg-transparent"
                  }`}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    closeMenu();
                    navigate("/about");
                  }}
                  className={`${
                    location.pathname === "/about"
                      ? "block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 text-white md:text-blue-500"
                      : "block py-2 pl-3 pr-4 rounded hover:bg-blue-700 md:border-0 md:p-0 text-white md:hover:text-blue-500 hover:text-white md:hover:bg-transparent"
                  }`}
                >
                  About
                </button>
              </li>
              <li className="my-3">
                {!localStorage.getItem("token") ? (
                  <div>
                    <button
                      onClick={() => {
                        closeMenu();
                        navigate("/login");
                      }}
                      className="text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-blue-800"
                    >
                      Sign in
                    </button>
                    <button
                      onClick={() => {
                        closeMenu();
                        navigate("/signup");
                      }}
                      className="text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-blue-800"
                    >
                      Sign up
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => {
                      closeMenu();
                      handleLogout();
                    }}
                    className="text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-blue-800"
                  >
                    Sign out
                  </button>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {isLoggingOut && <Spinner />}
    </div>
  );
};

export default Navbar;
