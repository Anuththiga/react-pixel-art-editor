import React from 'react';
import "../styles/editor.scss"

const Editor = () => {
  return (
    <div className="editor">
        <h1>Pixel Art Editor</h1>
        <div className="options"> 
            <div className="option">
                <input 
                    type="number"
                    className="panelInput"
                    defaultValue="16"
                />
                <span>Width</span>
            </div>
            <div className="option">
                <input 
                    type="number"
                    className="panelInput"
                    defaultValue="16"
                />
                <span>Height</span>
            </div>
        </div>

        <button className="button">create</button>
    </div>
  )
}

export default Editor