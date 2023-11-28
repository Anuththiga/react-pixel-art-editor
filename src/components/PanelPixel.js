import React, { useState } from 'react';
import "../styles/panelPixel.scss";


const PanelPixel = ({ selectedColor }) => {
    const [pixelColor, setPixelColor] = useState("#ffff");
    const [oldColor, setOldColor] = useState(pixelColor);
    const [canChangeColor, setCanChangeColor] = useState(true);
    
    const applyColor = () => {
        setPixelColor(selectedColor);
        setCanChangeColor(false);
    }

    const changeColor = () => {
        setOldColor(pixelColor);
        setPixelColor(selectedColor)
    }

    const resetColor = () => {
        if(canChangeColor) setPixelColor(oldColor);

        setCanChangeColor(true);
    }
    return (
    <div
        className="pixel"
        style={{ backgroundColor: pixelColor }}
        onClick={applyColor}
        onMouseEnter={changeColor}
        onMouseLeave={resetColor}
    ></div>
  )
}

export default PanelPixel