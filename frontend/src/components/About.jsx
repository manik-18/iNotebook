import React from "react";
import Vite from "../assets/Vite.svg";
import ReactImg from "../assets/react.svg";
import TailwindImg from "../assets/tailwindcss.svg";
import Manik from "../assets/Manik.png";
import Mongo from "../assets/mongodb.svg";
import Nodejs from "../assets/node.svg";
import Express from "../assets/express.svg";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div>
        <section className="bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
            <h1 className="mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-3xl lg:text-4xl text-white">
              About iNotebook
            </h1>
            <p className="text-center my-[30px] text-lg font-normal lg:text-xl sm:px-16 xl:px-38 text-gray-400">
              iNotebook is a cutting-edge notes app that combines seamless user
              login and signUp with advanced note management capabilities, all
              while prioritizing top-tier security. Your notes are kept private
              through end-to-end encryption, ensuring that only you can access
              them. iNotebook guarantees a comprehensive and secure platform for
              creating, updating, and organizing your notes with utmost
              confidence in your data's safety.
            </p>

            <h1 className="mt-[100px] mb-[30px] text-2xl font-bold tracking-tight leading-none md:text-3xl lg:text-4xl text-white">
              Developed by
            </h1>

            <div className="flex justify-center items-center">
              <div className="w-full max-w-xs  border  rounded-lg shadow bg-gray-800 border-gray-700 m-3">
                <div className="flex justify-end px-4 pt-4"></div>
                <div className="flex flex-col items-center pb-10">
                  <img
                    className="w-24 h-24 mb-3 rounded-full shadow-lg"
                    src={Manik}
                    alt="image"
                  />
                  <h5 className="mb-1 text-xl font-medium  text-white">
                    Manik Gupta
                  </h5>
                  <span className="text-sm  text-gray-400">
                    Fullstack Developer
                  </span>
                  <div className="flex mt-4 space-x-3 md:mt-6">
                    <a href="https://twitter.com/manik_1810">
                      <button
                        type="button"
                        className="text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center focus:ring-[#1da1f2]/55 mr-2 mb-2"
                      >
                        <svg
                          className="w-4 h-4 mr-2"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 20 17"
                        >
                          <path
                            fillRule="evenodd"
                            d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </a>
                    <a href="https://www.linkedin.com/in/manik1810/">
                      <button
                        type="button"
                        className="text-white bg-[#050708]  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center focus:ring-[#050708]/50 hover:bg-[#050708]/30 mr-2 mb-2"
                      >
                        <svg
                          className="w-4 h-4 mr-2"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <h1 className="mt-[100px] mb-[30px] text-2xl font-bold tracking-tight leading-none  md:text-3xl lg:text-4xl text-white">
              Integrated Technologies
            </h1>
            <div className="flex flex-wrap justify-center">
              <div className="flex flex-col items-center m-3">
                <img src={Vite} alt="Image Description" className="w-32 h-32" />
                <p className="mt-2  text-gray-400 font-medium">Vite</p>
              </div>
              <div className="flex flex-col items-center m-3">
                <img
                  src={ReactImg}
                  alt="Image Description"
                  className="w-32 h-32"
                />
                <p className="mt-2 text-gray-400 font-medium">React Js</p>
              </div>
              <div className="flex flex-col items-center m-3">
                <img
                  src={TailwindImg}
                  alt="Image Description"
                  className="w-32 h-32"
                />
                <p className="mt-2 text-gray-400 font-medium">Tailwind CSS</p>
              </div>
              <div className="flex flex-col items-center m-3">
                <img
                  src={Express}
                  alt="Image Description"
                  className="w-32 h-32 bg-white p-3"
                />
                <p className="mt-2 text-gray-400 font-medium">Express Js</p>
              </div>
              <div className="flex flex-col items-center m-3">
                <img
                  src={Nodejs}
                  alt="Image Description"
                  className="w-32 h-32"
                />
                <p className="mt-2 text-gray-400 font-medium">Node Js</p>
              </div>
              <div className="flex flex-col items-center m-3">
                <img
                  src={Mongo}
                  alt="Image Description"
                  className="w-32 h-32"
                />
                <p className="mt-2 text-gray-400 font-medium">Mongo DB</p>
              </div>
            </div>
          </div>
        </section>
        <div>
          <footer className="bg-gray-900 bottom-0 mt-12">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
              <div className="md:flex md:justify-between">
                <div className="mb-6 md:mb-0">
                  <Link
                    to="/"
                    className="flex items-center"
                  >
                    <img src={logo} className="h-8 mr-3" alt="Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                      iNotebook
                    </span>
                  </Link>
                </div>
              </div>
              <hr className="my-6  sm:mx-auto border-gray-700 lg:my-8" />
              <div className="sm:flex sm:items-center sm:justify-between">
                <span className="text-sm sm:text-center text-gray-400">
                  © 2023{" "}
                  <a href="" className="hover:underline">
                    iNotebook
                  </a>
                  . Made by ❤️ with Manik Gupta
                </span>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default About;
