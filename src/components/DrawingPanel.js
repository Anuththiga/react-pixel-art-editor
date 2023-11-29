import React, { useRef } from 'react'
import PanelRow from './PanelRow';
import "../styles/drawingPanel.scss";
import { exportComponentAsPNG } from "react-component-export-image";


const DrawingPanel = ({ panelHeight, panelWidth, selectedColor }) => {
  
    const panelRef = useRef();

    let rows = [];
    for(let i = 0; i< panelHeight; i++) {
        rows.push(
            <PanelRow key={i} width={panelWidth} selectedColor={selectedColor} />
        )
    }

    return (
    <div className="drawingPanel">
        <div className="pixels" ref={panelRef}>
        {rows}
        </div>
        <button className="button" onClick={() => exportComponentAsPNG(panelRef)}>
            Download
        </button>
    </div>
  )
}

export default DrawingPanel