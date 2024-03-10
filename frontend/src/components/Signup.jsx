import React, { useState } from "react";
import logo from "../assets/secure.svg";
import { Link, useNavigate } from "react-router-dom";
import Spinner from "./Spinner";

const Signup = (props) => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const { name, email, password } = credentials;
    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/api/auth/createuser`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      }
    );

    const json = await response.json();
    console.log(json);

    if (json.success) {
      localStorage.setItem("token", json.authtoken);
      navigate("/");
      props.showAlert("Account created successfully", "success");
    } else {
      props.showAlert("This email already exists", "error");
    }

    setIsLoading(false);
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        <section className="bg-gray-900 mt-[-40px]">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a
              href="#"
              className="flex items-center mb-6 text-2xl font-semibold text-white"
            >
              <img className="w-8 h-8 mr-2" src={logo} alt="logo" />
              Sign Up
            </a>
            <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <form
                  className="space-y-4 md:space-y-6"
                  action="#"
                  onSubmit={handleSubmit}
                >
                  <div>
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-white"
                    >
                      Your name
                    </label>
                    <input
                      type="name"
                      name="name"
                      id="name"
                      onChange={onChange}
                      className="border sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                      placeholder="first middle last"
                      autoComplete="name"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-white"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      onChange={onChange}
                      className="border sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                      placeholder="example@company.com"
                      autoComplete="email"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-white"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      onChange={onChange}
                      className="border sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                      placeholder="**********"
                      autoComplete="current-password"
                      minLength={5}
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="cpassword"
                      className="block mb-2 text-sm font-medium text-white"
                    >
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      name="cpassword"
                      id="cpassword"
                      onChange={onChange}
                      className="border sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                      placeholder="**********"
                      autoComplete="current-password"
                      minLength={5}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600 hover:bg-primary-700 focus:ring-primary-800"
                  >
                    Sign up
                  </button>
                  <p className="text-sm font-light text-gray-400">
                    Already have an account yet?{" "}
                    <Link
                      to="/login"
                      className="font-medium hover:underline text-primary-500"
                    >
                      Sign in
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Signup;
