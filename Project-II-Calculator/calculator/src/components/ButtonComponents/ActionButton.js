import React from 'react';
import './Button.css';
import ActionButtonDivide from './ActionButtonDivide';


function ActionButton(){
    return(
        <div className="actionbutton">
        <ActionButtonDivide/>
        <div>x</div>
        <div>-</div>
        <div>+</div>
        <div>=</div>
        </div>
    )
}




export default ActionButton;