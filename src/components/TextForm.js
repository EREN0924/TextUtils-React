import React,{useState} from 'react'

export default function TextForm(props) {
  const [text, setText] = useState('');
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case!","success");
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  }
  const handleLoClick = () => {
    let Eren = text.toLowerCase();
    setText(Eren);
        props.showAlert("Converted to Lower Case!","success");

  }
  const handleClearClick = () => {
    setText('');
        props.showAlert("Text cleared!","success");

  }
  const handleCamelCase = () => {
    let newText = text 
    .trim() 
    .toLowerCase() 
    .split(/\s+/) 
    .map((word, index) => 
      { if (index === 0) 
        { return word; } 
        return word.charAt(0).toUpperCase() + word.slice(1); }) 
        .join(""); 
        setText(newText);
            props.showAlert("Converted to Camel Case!","success");

  }
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    
        props.showAlert("Text copied to clipboard!","success");

  }
  return (
    <>
    <div className="container" style={{color: props.mode === 'dark' ? 'white':'#042743'}}>
        <h1 className='mb-4'>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode === 'dark' ? '#13466e':'white', color: props.mode === 'dark' ? 'white':'#042743'}} id="myBox" rows="8"></textarea>
  
</div>
<button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert To Uppercase</button>
<button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert To Lowercase</button>
<button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
<button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCamelCase}>CamelCase</button>
<button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>


    </div>

    <div className="container my-3" style={{color: props.mode === 'dark' ? 'white':'#042743'}}>
      <h2>Your text summary</h2>
<p>{text.trim().split(/\s+/).filter((element) => element.length !== 0).length} words and {text.length} characters</p>      
<p>You require {0.008 * text.trim().split(/\s+/).filter((element) => {return element.length !== 0;}).length} minutes to read this</p>
      <h3>Preview</h3>
      <p>{text.length>0? text : "Nothing to preview"}</p>
      </div>
    </>
  )
}
