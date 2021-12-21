import React from 'react'
import "../style/style.css"
import Togglebutton from './Togglebutton'

export default function promo(props) {
    return (
        <div className="promo" >
            <div>
                <h2>{props.name}</h2>
                <h1>{props.ac}</h1>
                <Togglebutton/>
            </div>
        </div>
    )
}
