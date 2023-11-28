import React from 'react'
import PanelPixel from './PanelPixel';
import "../styles/panelRow.scss";


const PanelRow = ({ width, selectedColor }) => {
  
    let pixels = [];
    for(let i = 0; i < width; i++) {
        pixels.push(
            <PanelPixel key={i} selectedColor={selectedColor} />
        )
    }

    return (
    <div className="row">
        {pixels}
    </div>
  )
}

export default PanelRow