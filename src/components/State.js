import React, {useState,} from 'react'

export default function State() {
    let [text , setText] = useState(0);
    
    function plus(){
        text = text + 1;
        setText(text)
    }
    function minus(){
        text = text -1;
        setText(text)
    }
   
    
    return (
        <div >
        <button onClick={plus} className="btn btn-primary ">+</button>
        <div>{text}</div>
        <button  onClick={minus}  className="btn btn-primary ">-</button>

            
        </div>
    )
}
