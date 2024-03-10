import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NoteState from "./context/notes/NoteState";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import Signup from "./components/Signup";
import "../src/App.css";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      messageType: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <NoteState>
      <Router>
        <Navbar />
        <Alert message={alert?.message} messageType={alert?.messageType} />
        <div className="container mx-auto py-4">
          <Routes>
            <Route path="/" element={<Home showAlert={showAlert} />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login showAlert={showAlert} />} />
            <Route path="/signup" element={<Signup showAlert={showAlert} />} />
          </Routes>
        </div>
      </Router>
    </NoteState>
  );
}

export default App;
