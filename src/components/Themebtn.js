import React from "react";

export default function Themebtn() {
    return (
        <div>
            <input type="checkbox" className="checkbox" id="checkbox" />
            <label for="checkbox" className="checkbox-label">
                <i className="fas fa-moon"></i>
                <i className="fas fa-sun"></i>
                <span className="ball"></span>
            </label>
        </div>
    );
}
