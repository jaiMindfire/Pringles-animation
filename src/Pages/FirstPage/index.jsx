import React from "react";
import logo from "../../Images/logo.png"; // Logo image
import chips from "../../Images/chips.png"; // Chips image
import onion from "../../Images/onion.png"; // Onion image
import table from "../../Images/table.png";
import grass from "../../Images/grass.png";
import sky from "../../Images/sky.png";
import AnimatedCans from "../../Components/AnimatedCans";
import "./index.css";

const FirstPage = () => {
  return (
    <div className="pringles-wrapper">

      <div className="background">
        <img src={sky} alt="Sky Background" className="sky" />
        <img src={grass} alt="Grass Background" className="grass" />
      </div>


      <div className="logo">
        <img src={logo} alt="Pringles Logo" />
      </div>


      <div className="main-section">
        <div className="pringles-cans">
          <AnimatedCans />
        </div>
        <div className="onion">
          <img src={onion} alt="Onion" />
        </div>
        {/* Table */}
        <div className="table">
          <img src={table} alt="table" />
        </div>

        <div className="chips">
          <img src={chips} alt="Chips" />
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
