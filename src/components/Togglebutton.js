import React from 'react'
import "../style/style.css"

export default function Togglebutton() {
    return (
        <div>
            <label className="switch">
                <input type="checkbox" />
                <span className="slider" />
            </label>
        </div>
    )
}
