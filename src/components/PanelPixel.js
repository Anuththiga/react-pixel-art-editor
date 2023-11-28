import React, { useState } from 'react';
import "../styles/panelPixel.scss";


const PanelPixel = ({ selectedColor }) => {
    const [pixelColor, setPixelColor] = useState("#ffff")
  return (
    <div
        className="pixel"
        style={{ backgroundColor: pixelColor }}
    ></div>
  )
}

export default PanelPixel