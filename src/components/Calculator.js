import React from 'react';
import './Calculator.css'; // Import the CSS file

const Calculator = () => (
  <div className="App">
    {/* Top section for displaying time */}
    <div className="top" />

    {/* Display section for showing the result */}
    <div className="display">0</div>

    {/* Buttons section */}
    <div className="buttons">
      {/* Function buttons */}
      <div className="Button function">AC</div>
      <div className="Button function">±</div>
      <div className="Button function">%</div>

      {/* Operator buttons */}
      <div className="Button operator">÷</div>

      {/* Number buttons */}
      <div className="Button">7</div>
      <div className="Button">8</div>
      <div className="Button">9</div>

      {/* Operator button */}
      <div className="Button operator">x</div>

      {/* Number buttons */}
      <div className="Button">4</div>
      <div className="Button">5</div>
      <div className="Button">6</div>

      {/* Operator button */}
      <div className="Button operator">-</div>

      {/* Number buttons */}
      <div className="Button">1</div>
      <div className="Button">2</div>
      <div className="Button">3</div>

      {/* Operator button */}
      <div className="Button operator">+</div>

      {/* Zero button */}
      <div className="Button zero">0</div>

      {/* Decimal point button */}
      <div className="Button">.</div>

      {/* Equals button */}
      <div className="Button operator">=</div>
    </div>
  </div>
);

export default Calculator;
