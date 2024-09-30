import React from "react";
import "./index.css";
import chips from "../../Images/manyChips.png";

const PringlesStyle = ({ text, textColor, bgColor, canImage }) => {
  return (
    <div className="container" style={{ backgroundColor: bgColor }}>
      <h1 className="text" style={{ color: textColor }}>
        {text}
      </h1>
      <img className="can-image" src={canImage} alt="Pringles Can" />
      <img className="chips-image" src={chips} alt="Chips" />
    </div>
  );
};

export default PringlesStyle;
