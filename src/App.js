import React from "react";
import "./css/style.css";
import Particles from "react-tsparticles";
import options from "./helper/options";
import Quiz from "./components/Quiz.js";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div>
      <div className="wrapper">
        <Particles id="tsparticles" options={options} />
        <Quiz />
      </div>
    </div>
  );
};

export default App;
