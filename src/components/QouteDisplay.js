import React, { useState, useEffect } from 'react';

const QuoteDisplay = () => {
  // State variables to hold the quote, loading state, and error state
  const [quote, setQuote] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Call the fetchQuote function when the component mounts
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    const category = 'happiness';
    const url = `https://api.api-ninjas.com/v1/quotes?category=${category}`;

    try {
      // Make the API call using the fetch function
      const response = await fetch(url, {
        headers: {
          'X-Api-Key': 'a1ckGcjvtvC0t/Win9kK8A==ZCs1E8xPo0Lji1aY', // Replace with your actual API key
        },
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      // Parse the response data
      const data = await response.json();

      // Select a random quote from the data
      const randomIndex = Math.floor(Math.random() * data.length);
      const randomQuote = data[randomIndex].quote;

      // Update the state with the random quote and set loading to false
      setQuote(randomQuote);
      setLoading(false);
    } catch (error) {
      // Handle any errors that occur during the API call
      setError('Failed to fetch quote');
      setLoading(false);
    }
  };

  // Render the appropriate UI based on the loading and error states
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  // Render the quote once it has been fetched successfully
  return (
    <div>
      <h2>Random Quote</h2>
      <p>{quote}</p>
    </div>
  );
};

export default QuoteDisplay;
