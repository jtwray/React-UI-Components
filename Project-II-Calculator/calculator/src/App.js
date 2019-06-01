import React from 'react';
import './App.css';
import ActionButton from "./components/ButtonComponents/ActionButton"
import NumberButton from "./components/ButtonComponents/NumberButton"
import Display from "./components/DisplayComponents/CalculatorDisplay"


const App = () => {
  return (
    <div>
      <h3>Welcome to React Calculator</h3>
      <Display/>
      <div className="calccontainer">      
      <NumberButton/>
      <ActionButton/>
      </div>
      
    </div>
  );
};

export default App;
