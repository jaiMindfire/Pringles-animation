import React from "react";
import blue from "../../Images/blue.png";
import green from "../../Images/green.png";
import orange from "../../Images/orange.png";
import "./index.css";

function AnimatedCans() {
  return (
    <div className="cans-container">
      <img src={blue} alt="Can 1" className="can can-left" />
      <img src={green} alt="Can 2" className="can can-center" />
      <img src={orange} alt="Can 3" className="can can-right" />
    </div>
  );
}

export default AnimatedCans;
