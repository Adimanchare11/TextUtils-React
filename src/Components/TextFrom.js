import React, { useState } from 'react'

export default function TextFrom(props) {

    const handleUpClick=()=>{

        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase!" , "success")

    }

    const handleloClick=()=>{

        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase!" , "success")

    }
    const handleclearClick=()=>{
        setText('')
        props.showAlert("Text Cleared!" , "success")

    }

    const handleExtraSpaces= ()=>{
      let newText = text.split(/[ ]+/)
      setText(newText.join(" "))
    }

    const handlecopyClick=()=>{

    //  var text= document.getElementById("myBox")
    //  text.select()
     navigator.clipboard.writeText(text)
    //  document.getSelection.removeAllRanges()
     props.showAlert("Copied to Clipboard!" , "success")

  }


const handleOnChange =(event)=>{
    setText(event.target.value)
}

const [text, setText]= useState("")

  return (
    <>
    <div className='container' style={{color: props.mode=== 'dark'? 'white':'#0d0c31'}}>
        <h1 >{props.heading}</h1>
    <div class="mb-3">
      <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode=== 'dark'? '#0d0c31':'white', color:props.mode=== 'dark'? 'white':'#0d0c31' } }  id="myBox" rows="8"></textarea>
    </div>
    <button className='btn btn-primary mx-2 my-1' onClick={handleUpClick}>Convert to Uppercase</button>
    <button className='btn btn-primary mx-2 my-1' onClick={handleloClick}>Convert to Lowercase</button>
    <button className='btn btn-primary mx-2 my-1' my-1 onClick={handleclearClick}>Clear</button>
    <button className='btn btn-primary mx-2 my-1' onClick={handlecopyClick}>Copy text</button>
    <button className='btn btn-primary mx-2 my-1' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>

    <div className='container my-2' style={{color: props.mode=== 'dark'? 'white':'#0d0c31'}}>
       <h2>Your text summary</h2>
       <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} word and {text.length} characters </p>
       <p>{0.008* text.split("").length} Minutes read </p>
       <h2>Preview</h2>
       <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>
    </>
  )
}
