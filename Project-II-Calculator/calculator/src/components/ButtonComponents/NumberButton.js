import React from 'react';
import './Button.css';

function NumberButton(){
	return(
		<div>
		<div className="numsRow"><div className="clear0">clear</div></div>
		<div className="numsRow"> <div className="nums">7</div><div className="nums">8</div><div className="nums">9</div></div>
		<div className="numsRow"><div className="nums">4</div><div className="nums">5</div><div className="nums">6</div></div>
		<div className="numsRow"><div className="nums">1</div><div className="nums">2</div><div className="nums">3</div></div>
		<div className="numsRow"><div className="clear0">0</div></div>
		
		</div>
	)

const BasicButton = (props) =><button  className={`basicButtonStyles  ${props.buttonStyles}`}></button>;

BasicButton.defaultProps = {
		buttonStyles: 'teal',
   };

const ButtonApp = () => {
	return (
	<div>
	<h1>ButtonApp</h1>  
	<BasicButton buttonStyles="red"/>
	<BasicButton/>
	<BasicButton />
	</div> 
	)
};



const CalculatorProfile = {
	numberButtons:['7','8','9','4','5','6','1','2','3','0',],
	largeActionButtons:['clear','0'],
	smallActionButtons:['&#247','x','-','+','=']
}; 

const DefaultActionButton = (props) =>{
	const num = {CalculatorProfile};

	return( <button className={`basicButtonStyles  ${props.className}`}>${props.text}</button>);
	
	
};
	
	
   
	
	<DefaultActionButton />

export default NumberButton;                                                                                                                                                      
