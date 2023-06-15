import React, { useState, useEffect } from 'react';
import './QouteDisplay.css';
import kayjeeImage from '../kayjee.jpg';

const QuoteDisplay = () => {
  const [quote, setQuote] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch(
          'https://api.api-ninjas.com/v1/quotes?category=happiness',
          {
            headers: {
              'X-Api-Key': 'a1ckGcjvtvC0t/Win9kK8A==ZCs1E8xPo0Lji1aY',
            },
          },
        );
        if (!response.ok) {
          throw new Error('Failed to fetch quote');
        }
        const data = await response.json();
        const { quote } = data[0];
        setQuote(quote);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };

    fetchQuote();
  }, []);

  if (loading) {
    return <div>Loading quote...</div>;
  }

  if (error) {
    return <div>Error: Failed to fetch quote</div>;
  }

  return (
    <div className="quote-container">
      <div className="image-container">
        <img src={kayjeeImage} alt="Kayjee" />
      </div>
      <div className="quote-content">
        <h2>Random Quote</h2>
        <p>{quote}</p>
      </div>
    </div>
  );
};

export default QuoteDisplay;
