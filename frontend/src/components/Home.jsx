import React from "react";
import Notes from "./Notes";

const Home = ({ showAlert }) => {
  return (
    <div className="container mx-auto py-4 px-16">
      <Notes showAlert={showAlert} />
    </div>
  );
};

export default Home;
