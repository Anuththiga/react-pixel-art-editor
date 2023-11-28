import React, { useState } from 'react';
import "../styles/editor.scss";
import { CirclePicker } from "react-color";
import DrawingPanel from './DrawingPanel';

const Editor = () => {
    const [panelWidth, setPanelWidth] = useState(16);
    const [panelHeight, setPanelHeight] = useState(16);
    const [buttonText, setButtonText] = useState("start drawing");
    const [hideDrawingPanel, setHideDrawingPanel] = useState(true);
    const [hideOptions, setHideOptions] = useState(false);
    const [selectedColor, setSelectedColor] = useState("#f44336");

    const handleDrawingPanel = () => {
        setHideOptions(!hideOptions);
        setHideDrawingPanel(!hideDrawingPanel);

        buttonText === "start drawing" ? setButtonText("reset") : setButtonText("start drawing");
    }

    const changeColor = (color) => {
        setSelectedColor(color.hex);
    }

    return (
        <div className="editor">
            <h1>Pixel Art Editor</h1>
            {hideDrawingPanel && <h2>Enter Panel Dimensions</h2>}
            {hideDrawingPanel && (
                <div className="options">
                    <div className="option">
                        <input
                            type="number"
                            className="panelInput"
                            defaultValue={panelWidth}
                            onChange={(e) => setPanelWidth(e.target.value)}
                        />
                        <span>Width</span>
                    </div>
                    <div className="option">
                        <input
                            type="number"
                            className="panelInput"
                            defaultValue={panelHeight}
                            onChange={(e) => setPanelHeight(e.target.value)}
                        />
                        <span>Height</span>
                    </div>
                </div>
            )}

            <button className="button" onClick={handleDrawingPanel}>
                {buttonText}
            </button>
            {hideOptions && (
            <CirclePicker
                color={selectedColor}
                onChangeComplete={changeColor}
            />
            )}
            {hideOptions && (
                <DrawingPanel 
                    panelHeight={panelHeight}
                    panelWidth={panelWidth}
                    selectedColor={selectedColor}
                />
            )}            
        </div>
    );
}

export default Editor