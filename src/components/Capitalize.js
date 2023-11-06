import React, { useState } from "react";


export default function Capitalize() {
    
    const handleOnClick = ()=>{
        console.log("working" + text) ;
        setText(text.toUpperCase());
    }
    const handleOnChange = (event)=>{
        console.log("on change");
        setText(event.target.value);
    }
    const [text, setText] = useState('');

    return (
        <div>
            <h1>Capitalize your text</h1>
            <div className="mb-3">
                <textarea
                    className="form-control "
                    id="exampleFormControlTextarea1"
                    rows="5"
                    placeholder="Enter Text to be Capitalized"
                    value={text}
                    onChange={handleOnChange}
                ></textarea>
            </div>
                <button className="btn btn-primary" onClick={handleOnClick}>Capitalize text</button>
        </div>
    );
}
