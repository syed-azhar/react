import React from 'react'
import "../style/style.css"
import Togglebutton from './Togglebutton'


export default function accountstatus(props) {
    return (
        <div className="account-main-div">
            <div  className="display-flex" >
            <h3  className="account-h3" >{props.ac}</h3>
           <Togglebutton/>
            </div>          
            <h1 className="account-h1"  >{props.name}</h1>
            <h1 className="account-h1" >BROWN</h1>
        </div>
    )
}

