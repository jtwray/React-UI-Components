import React from 'react';
import './Button.css';

const CalculatorProfile = {
    numberButtons:['7','8','9','4','5','6','1','2','3','0',],
    largeActionButtons:['clear','0'],
    smallActionButtons:['&#247','x','-','+','='],
};
const num = {CalculatorProfile};


const DefaultActionButton = (props) =>{
    return( <button className={`basicButtonStyles  ${props.buttonStyles}`}>${props.text}</button>);
};


<DefaultActionButton num={CalculatorProfile}/>

const NumberButtons = props=> {
    return(
           <DefaultActionButton buttonStyles={}>{props.num}</DefaultActionButton>;
        );
};

const NumButtonList = num.numberButtons.map((NB) => {

    return(
        <li> {NB}</li>
        )
    }



    
export default DefaultActionButton;
