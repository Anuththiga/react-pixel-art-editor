import React, { useRef } from 'react'
import PanelRow from './PanelRow';
import "../styles/drawingPanel.scss";


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
    </div>
  )
}

export default DrawingPanel