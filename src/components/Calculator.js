import React, { useState } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  // State variables to hold the current result and calculation
  const [result, setResult] = useState('0');
  const [calculation, setCalculation] = useState({
    total: null,
    next: null,
    operation: null,
  });

  // Function to handle button clicks
  const handleButtonClick = (value) => {
    // Calculate the updated calculation based on the button value
    const updatedCalculation = calculate(calculation, value);
    setCalculation(updatedCalculation);

    // Update the result based on the updated calculation
    if (updatedCalculation.total !== null) {
      setResult(updatedCalculation.total);
    } else if (updatedCalculation.next !== null) {
      setResult(updatedCalculation.next);
    } else {
      setResult('0');
    }
  };

  return (
    <div className="App">
      <div className="top" />
      {/* Display the current result */}
      <div className="display" role="alert">
        {result}
      </div>
      <div className="buttons">
        {/* AC button */}
        <button
          type="button"
          className="Button function"
          onClick={() => handleButtonClick('AC')}
        >
          AC
        </button>
        {/* +/- button */}
        <button
          type="button"
          className="Button function"
          onClick={() => handleButtonClick('+/-')}
        >
          ±
        </button>
        {/* % button */}
        <button
          type="button"
          className="Button function"
          onClick={() => handleButtonClick('%')}
        >
          %
        </button>
        {/* ÷ button */}
        <button
          type="button"
          className="Button operator"
          onClick={() => handleButtonClick('÷')}
        >
          ÷
        </button>
        {/* Rest of the numeric buttons */}
        <button type="button" className="Button" onClick={() => handleButtonClick('7')}>
          7
        </button>
        {/* ... rest of  the numeric buttons ... */}
        {/* x button */}
        <button
          type="button"
          className="Button operator"
          onClick={() => handleButtonClick('x')}
        >
          x
        </button>
        {/* - button */}
        <button
          type="button"
          className="Button operator"
          onClick={() => handleButtonClick('-')}
        >
          -
        </button>
        {/* + button */}
        <button
          type="button"
          className="Button operator"
          onClick={() => handleButtonClick('+')}
        >
          +
        </button>
        {/* Rest of the numeric buttons */}
        {/* = button */}
        <button
          type="button"
          className="Button operator"
          onClick={() => handleButtonClick('=')}
        >
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
