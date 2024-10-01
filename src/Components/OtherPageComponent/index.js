import React, { useState, useEffect, useRef } from "react";
import "./index.css";
import chips from "../../Images/manyChips.png";

const PringlesStyle = ({ text, textColor, bgColor, canImage, zIndex }) => {
  const [isSticky, setIsSticky] = useState(false);
  const [textTop, setTextTop] = useState(null);
  const canRef = useRef(null);
  const textRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (canRef.current) {
        const rect = canRef.current.getBoundingClientRect();
        const containerRect = containerRef.current.getBoundingClientRect();
        if (rect.top <= 0) {
          setIsSticky(true);
          const rect = textRef.current.getBoundingClientRect();
          setTextTop(rect.top);
        } else {
          setIsSticky(false);
        }
        if (containerRect.top > 0) {
          setIsSticky(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="container"
      style={{ backgroundColor: bgColor, zIndex: zIndex }}
      ref={containerRef}
    >
      <h1
        className="text"
        ref={textRef}
        style={{
          color: textColor,
          position: isSticky ? "fixed" : undefined,
          top: isSticky ? textTop : undefined,
        }}
      >
        {text}
      </h1>
      <img
        className="can-image"
        ref={canRef}
        src={canImage}
        style={{
          position: isSticky ? "fixed" : undefined,
          top: isSticky ? "0" : undefined,
        }}
        alt="Pringles Can"
      />
      <img className="chips-image" src={chips} alt="Chips" />
    </div>
  );
};

export default PringlesStyle;
