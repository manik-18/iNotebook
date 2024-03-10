import React from "react";

const Spinner = () => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-opacity-50 bg-gray-900">
      <i className="animate-spin animate-reverse text-4xl text-white fas fa-spinner"></i>
    </div>
  );
};

export default Spinner;
