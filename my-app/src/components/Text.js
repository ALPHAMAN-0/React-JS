import React,{useState} from 'react'

export default function Text(props) {
    const [text, setText] = useState(props.heading);
    
    function capitalizeName(name) {
     return name
     .toLowerCase()
     .split(" ")
     .map(word => word.charAt(0).toUpperCase() + word.slice(1))
     .join(" ");
    }

    const handleUpClick = ()=>{
        console.log("Uppercase was clicked");
        setText(" ");
        //let newText = capitalizeName(text);
       // setText(newText);
    }
    const handleOnChange = (event)=>{
        console.log("On Change");
        
        setText(event.target.value);
    }
    return (
    <>
        <h1>{props.heading}</h1>

        <div className="form-floating">
        <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: "500px"}} value={text} onChange={handleOnChange}></textarea>
         
        <label htmlFor="floatingTextarea2">please enter your text here</label>
        </div>

        <button className="btn btn-primary my-3" onClick={handleUpClick}>Convert to Uppercase</button>
    </> 
  )
}
