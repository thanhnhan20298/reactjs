import React, { useState } from "react";
import PropTypes from "prop-types";
import "./styles.scss";

ColorBox.propTypes = {};

function getRandomColor() {
  const colorList = ["deeppink", "green", "yellow", "orange"];
  const randomColor = colorList[Math.floor(Math.random() * colorList.length)];
  return randomColor;
}
function ColorBox() {
  //   const initColor = localStorage.getItem("color") || "black";
  //   const [color, setColor] = useState(initColor);
  const [color, setColor] = useState(() => {
    const initColor = localStorage.getItem("color") || "black";
    return initColor;
  });

  function handleChangeColor() {
    //get random Color --> color
    const newColor = getRandomColor();
    setColor(newColor);
    localStorage.setItem("color", newColor);
  }

  return (
    <>
      <h3>Color Change</h3>
      <div
        className="change"
        style={{ backgroundColor: color }}
        onClick={handleChangeColor}
      ></div>
    </>
  );
}

export default ColorBox;
