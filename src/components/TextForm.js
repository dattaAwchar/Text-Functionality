import React, { useState } from 'react'

export default function TextForm(props) {

    const convertUpperCase = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to upper case", "success")

    }

    const convertLowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lower case", "success")

    }

    const clearText = () => {
        let newText = "";
        setText(newText)
        props.showAlert("Cleared text", "success")

    }

    const convertTextToBinary = () => {
        let binaryText = "";
        for (let i = 0; i < text.length; i++) {
            let binaryChar = text.charCodeAt(i).toString(2);
            binaryText += binaryChar.padStart(8, '0') + " ";
        }
        setText(binaryText)
        props.showAlert("Converted text to binary", "success")

    }

    const convertBinaryToText = () => {
        let binaryText = text.trim();
        let newText = "";
        let binaryArray = binaryText.split(" ");

        for (let i = 0; i < binaryArray.length; i++) {
            let charCode = parseInt(binaryArray[i], 2);
            let char = String.fromCharCode(charCode);
            newText += char;
        }
        setText(newText)
        props.showAlert("Converted binary to text", "success")

    }

    const copyPreviewText = () => {
        let copyText = document.getElementById('previewText').innerText;
        navigator.clipboard.writeText(copyText)
        props.showAlert("Text coppied", "success")

    }

    // The function is used to handle the onChange event for an input field. When a user types in the input field, the onChange event is triggered, and the function updates the state(in this case, text) with the value entered by the user. This is typically done using a function like setTextwhich updates the component's state in a React application, ensuring that the displayed input reflects the current user input.
    const hangleOnChange = (event) => {
        setText(event.target.value)
    }

    const [text, setText] = useState("");
    // text = "new text"; // wrong way to change the state
    // setText("new text"); // correct way to change the state

    return (
        <>
            <div className="container my-5" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>

                <h2>{props.heading}</h2>
                <div className="mb-4">
                    <textarea className="form-control" value={text} style={{ backgroundColor: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} onChange={hangleOnChange} id="myBox" rows="8" placeholder='Enter your text here'></textarea>
                </div>

                <button className="btn btn-primary my-2 mx-2" onClick={convertUpperCase}>Convert to Uppercase</button>
                <button className="btn btn-primary my-2 mx-2" onClick={convertLowerCase}>Convert to Lowercase</button>
                <button className="btn btn-primary my-2 mx-2" onClick={convertTextToBinary}>String to Binary</button>
                <button className="btn btn-primary my-2 mx-2" onClick={convertBinaryToText}>Binary to String</button>
                <button className="btn btn-primary my-2 mx-2" onClick={clearText}>Clear Text</button>
            </div>

            <div className="card my-5" style={{ color: props.mode === 'dark' ? 'white' : 'black', backgroundColor: props.mode === 'dark' ? 'black' : 'white', border: '1px solid lightblue' }}>
                <h5 className="card-header" style={{ borderBottom: '1px solid lightblue' }}>Preview</h5>
                <div className="card-body">
                    <p className="card-text" id="previewText">{text}</p>
                    <button className="btn btn-primary" onClick={copyPreviewText}>Copy Text</button>
                </div>
            </div>

            <div className="card my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black', backgroundColor: props.mode === 'dark' ? 'black' : 'white', border: '1px solid lightblue' }}>
                <h3 className="card-header" style={{ border: 'dark', borderBottom: '1px solid lightblue' }}>Your text summary</h3>
                <div className="card-body">
                    <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters</p>
                    <p>Paragraph takes {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read</p>
                </div>
            </div>
        </>
    )
}

