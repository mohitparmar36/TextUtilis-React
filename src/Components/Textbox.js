import React,{useState} from 'react'


export default function Textbox(props) {
    let changeToUp = ()=>{
         let newText = text.toUpperCase();
         setText(newText);
         props.func("Converted to UpperCase","Success")
         
    }
    let changeToLow = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.func("Converted to LowerCase","Success")
   }
   const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.func("Copied to clipboard !!","Success")
   }
   let removeSpace = ()=>{
    let newText = text.replace(/ /g,"");
    setText(newText);
    props.func("Spaces removed","Success")
    }
    // let findChar = ()=>{
    //     let newText = text.charAt(setCount);
    //     setText(newText);
    // }
    let handleOnChange = (event)=>{
        setText(event.target.value);  
    }
    // let handleOnChange2 = (event)=>{
    //     setCount(event.target.value);
    //     console.log(setCount);
    // }
    
    const [text, setText] = useState("");
    // const [count, setCount] = useState(0); 
   return (
    
    <div className={`text-${props.mode==='dark'?'light':'dark'}`}>
      <h1 className="heading">Enter the Text you want to Analyze</h1>
      <textarea className="form-control my-3" value={text}  id="" style={{backgroundColor : props.mode==='light'?'white':'#040614',color: props.mode==='light'?'black':'white'}} onChange={handleOnChange} rows="8"></textarea>
      <div className="button">
        <button className="btn btn-primary mx-1" onClick={changeToUp}>Change to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={changeToLow}>Change to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={removeSpace}>Remove White Space</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        {/* <input className="form-control" type="text"  aria-label="default input example" value={count} onChange={handleOnChange2}></input>
        <button className="btn btn-primary mx-1" onClick={findChar}>Find Charecter</button> */}
      </div>
      <div className={`text-${props.mode==='dark'?'light':'dark'}`}>
      <h1>Counter</h1>
      <p>{text.split(" ").length} Words and {text.length} Charecters</p>
      <h2>{text===""?'Enter Some text to preview':'Preview'}</h2>
      <p>{text}</p>
      </div>
    </div>
  )

    }  
