import React from 'react';
import {
  BrowserRouter as Router, Route, Routes, Link,
} from 'react-router-dom';
import Home from './components/Home';
import Calculator from './components/Calculator';
import QuoteDisplay from './components/QouteDisplay';
import './App.css';

const App = () => (
  <Router>
    <div>
      <div className="nav-container">
        <nav>
          <h1>
            <Link to="https://github.com/kayjeee/Micro_Verse_React_Maths_Mathematician_App_v2">
              Micro_Verse_React_Maths_Mathematician_App_v2
            </Link>
            <span className="heart-sticker" role="img" aria-label="heart">❤️</span>
          </h1>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/calculator">Calculator</Link></li>
            <li><Link to="/quote">Quote</Link></li>
          </ul>
        </nav>
      </div>

      <div className="content-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quote" element={<QuoteDisplay />} />
        </Routes>
      </div>
    </div>
  </Router>
);

export default App;
