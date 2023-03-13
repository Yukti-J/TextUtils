import React, {useState} from 'react'
// import PropTypes from 'react'


export default function Textform(props) {
    const[text,setText]=useState('Start typing...');
    const uppercaseFunc = () =>{
        let upText = text.toUpperCase();
        setText(upText)
    }
    const lowercaseFunc = () =>{
        let lowText = text.toLowerCase();
        setText(lowText)
    }
   
    const capWordsFunc = () =>{
        let cap = text.toLowerCase()
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

        setText(cap)
    }
    const capSenctFunc = () =>{
        let sent = text.toLowerCase()
        .split('.')
        .map((word) => word.trim().charAt(0).toUpperCase() + word.trim().slice(1))
        .join('. ');

        setText(sent)
    }
    const boldFunc = () =>{
       document.getElementById("exampleFormControlTextarea1").style.fontWeight = 'bold';
        
    }
    const italicFunc = () =>{
       document.getElementById("exampleFormControlTextarea1").style.fontStyle = 'italic';
        
    }
    const clearFunc = () =>{
       setText("") 
    }
    const copyFunc = () =>{
       let matter = document.getElementById("exampleFormControlTextarea1");
       matter.select();
       navigator.clipboard.writeText(matter.value);
    }
    const spacesFunc = () =>{
       let newtext = text.split(/[ ]+/);
       setText(newtext.join(" "))
    }
    const onChangeFunc = (event) =>{
        setText(event.target.value)
    }
  return (
     <> 
<div className={`mb-3 my-5 container text-${props.theme==='light'?'dark':'light'}`}>
    <h2> <label htmlFor="exampleFormControlTextarea1" className="form-label">Enter the text here</label></h2>
    <textarea className={`form-control  text-${props.theme==='light'?'dark':'light'}`} id="exampleFormControlTextarea1" style ={{backgroundColor: props.theme==='light'?'white':'#3A3B3C'}} rows="10" value={text} onChange={onChangeFunc}></textarea>
    <button className={`btn btn-${props.theme==='light'?'primary':'dark'} my-3 mx-1`} onClick={uppercaseFunc} >UPPERCASE</button>
    <button className={`btn btn-${props.theme==='light'?'primary':'dark'} my-3 mx-1`} onClick={lowercaseFunc} >lowercase</button>
    <button className={`btn btn-${props.theme==='light'?'primary':'dark'} my-3 mx-1`} onClick={capWordsFunc} >Capitalize words</button>
    <button className={`btn btn-${props.theme==='light'?'primary':'dark'} my-3 mx-1`} onClick={capSenctFunc} >Capitalize Sentences</button>
    <button className={`btn btn-${props.theme==='light'?'primary':'dark'} my-3 mx-1`} onClick={boldFunc} >Bold</button>
    <button className={`btn btn-${props.theme==='light'?'primary':'dark'} my-3 mx-1`} onClick={italicFunc} >Italic</button>
    <button className={`btn btn-${props.theme==='light'?'primary':'dark'} my-3 mx-1`} onClick={clearFunc} >Clear Text</button>
    <button className={`btn btn-${props.theme==='light'?'primary':'dark'} my-3 mx-1`} onClick={copyFunc} >Copy Text</button>
    <button className={`btn btn-${props.theme==='light'?'primary':'dark'} my-3 mx-1`} onClick={spacesFunc} >Remove Extra Spaces</button>
</div>
<div className={`container text-${props.theme==='light'?'dark':'light'}`}>
    <h2>Your text Summary</h2>
   <p> {text.length} characters, {text.split(" ").filter(function(num){return num !== ''}).length} words
   </p>
   <p>{0.008 *text.split(" ").filter(function(num){return num !== ''}).length.toFixed(3)} minutes of reading time
   </p>
   <h4>Preview</h4>
   <p my-4>{text}</p>
</div>

</>
  )
}
