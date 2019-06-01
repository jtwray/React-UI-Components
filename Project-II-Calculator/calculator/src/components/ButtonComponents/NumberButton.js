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
}

export default NumberButton;