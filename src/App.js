import React from 'react';
import Calculator from './components/Calculator';
import QuoteDisplay from './components/QouteDisplay';
// import ImageDisplay from './components/ImageDisplay';
import './App.css';

const App = () => (
  <div>
    <h1>My Calculator App</h1>

    <div className="grid-container">
      Star this project
      {' '}
      <a href="https://github.com/kayjeee/Micro_Verse_React_Maths_Mathematician_App_v2">here</a>
      <Calculator />
      <QuoteDisplay />
    </div>
  </div>
);

export default App;
