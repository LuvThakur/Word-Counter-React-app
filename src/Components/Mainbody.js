import React, { useState } from 'react'

export default function Mainbody(props) {


    // state 
    const [text, setText] = useState("hi this is ");

    //extra-space

    const handlespace = () => {
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "));
        props.funalertshow("Extra-Space removed Successfully", 'warning');
    }

    //copy
    const funcopy = () => {
        navigator.clipboard.writeText(text);
        props.funalertshow("Text Successfully Copied", 'warning');
    }
    //clear
    const funclear = () => {
        setText('');
        props.funalertshow("Clear ", 'danger');
    }
    //lowercase
    const funlochng = () => {
        let newtext = text.toLowerCase();
        setText(newtext);
        props.funalertshow("Changed ->  LowerText ", 'primary');
    }

    // arrow function
    const funUpchng = () => {
        let newtext = text.toUpperCase();
        setText(newtext);
        props.funalertshow("Changed -> UpperText ", 'primary');
    }
    // normal function
    function funonchange(event) {
        setText(event.target.value);
    }

    return (
        <>
            <div className='container my-3'>
                <div className="mb-3" >
                    <label htmlFor="myBox" className="form-label">
                        <h2>{props.heading} </h2>
                    </label>
                    <textarea value={text} onChange={funonchange} className="form-control" id="myBox" rows="6"></textarea>

                </div>
                <div className="mb-3" >
                    <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={funUpchng} >Convert to uppertext</button>
                    <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={funlochng} >Convert to lowertext</button>
                    <button disabled={text.length === 0} className="btn btn-success mx-2 my-2" onClick={funcopy} >Copy-Clipboard</button>
                    <button disabled={text.length === 0} className="btn btn-danger mx-2 my-2" onClick={funclear} >Clear</button>
                    <button disabled={text.length === 0} className='btn btn-primary mx-2 my-2' onClick={handlespace} >Remove-extra-space</button>
                </div >

            </div >

            <div className="container my-2" >
                <h2>Your text summary :</h2>
                <strong> Total Words : {text.split(/\s+/).length - 1}  and Total characters:{text.length} </strong>
                <p>Reading time : {0.008 * text.split(" ").filter((char) => char !== "").length} Minutes </p>
                <h2>Preview :</h2>
                <p>{text}</p>

            </div>
        </>
    )
}
