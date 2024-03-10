import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Alert = ({ message, messageType }) => {
  useEffect(() => {
    if (message && messageType) {
      if (toast[messageType]) {
        toast[messageType](message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          theme: "colored",
        });
      }
    }
  }, [message, messageType]);

  return <ToastContainer />;
};

export default Alert;
