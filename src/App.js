import React from 'react';
import Calculator from './components/Calculator'; 
import QuoteDisplay from './components/QouteDisplay';


const App = () => {
  return (
    <div>
      <h1>My Calculator App</h1>
      <QuoteDisplay />
      <Calculator />
    </div>
  );
};

export default App;
