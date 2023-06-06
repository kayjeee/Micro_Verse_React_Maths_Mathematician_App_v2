import React from 'react';
import './Calculator.css'; // Import the CSS file

const Calculator = () => (
  <div className="App">

    <div className="top" />
    <div className="display">0</div>

    <div className="buttons">
      <div className="Button function">AC</div>
      <div className="Button function">±</div>
      <div className="Button function">%</div>
      <div className="Button operator">÷</div>
      <div className="Button">7</div>
      <div className="Button">8</div>
      <div className="Button">9</div>
      <div className="Button operator">x</div>
      <div className="Button">4</div>
      <div className="Button">5</div>
      <div className="Button">6</div>
      <div className="Button operator">-</div>
      <div className="Button">1</div>
      <div className="Button">2</div>
      <div className="Button">3</div>
      <div className="Button operator">+</div>
      <div className="Button zero">0</div>
      <div className="Button">.</div>
      <div className="Button operator">=</div>

    </div>
  </div>
);

export default Calculator;
