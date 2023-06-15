import React, { useState } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';
// import kayjeeImage from '../kayjee.jpg';

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
    <div className="calculator-container">
      <div className="header">
        <h1>My Calculator App</h1>
      </div>
      <div className="calculator">
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
          {/* Numeric buttons */}
          <button type="button" className="Button" onClick={() => handleButtonClick('7')}>
            7
          </button>
          <button type="button" className="Button" onClick={() => handleButtonClick('8')}>
            8
          </button>
          <button type="button" className="Button" onClick={() => handleButtonClick('9')}>
            9
          </button>
          {/* x button */}
          <button
            type="button"
            className="Button operator"
            onClick={() => handleButtonClick('x')}
          >
            x
          </button>
          <button type="button" className="Button" onClick={() => handleButtonClick('4')}>
            4
          </button>
          <button type="button" className="Button" onClick={() => handleButtonClick('5')}>
            5
          </button>
          <button type="button" className="Button" onClick={() => handleButtonClick('6')}>
            6
          </button>
          {/* - button */}
          <button
            type="button"
            className="Button operator"
            onClick={() => handleButtonClick('-')}
          >
            -
          </button>
          <button type="button" className="Button" onClick={() => handleButtonClick('1')}>
            1
          </button>
          <button type="button" className="Button" onClick={() => handleButtonClick('2')}>
            2
          </button>
          <button type="button" className="Button" onClick={() => handleButtonClick('3')}>
            3
          </button>
          {/* + button */}
          <button
            type="button"
            className="Button operator"
            onClick={() => handleButtonClick('+')}
          >
            +
          </button>
          {/* 0 button */}
          <button
            type="button"
            className="Button zero"
            onClick={() => handleButtonClick('0')}
          >
            0
          </button>
          {/* . button */}
          <button
            type="button"
            className="Button"
            onClick={() => handleButtonClick('.')}
          >
            .
          </button>
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
    </div>
  );
};

export default Calculator;
