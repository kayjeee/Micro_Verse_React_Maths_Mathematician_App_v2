import React, { useState, useEffect } from 'react';

const ImageDisplay = () => {
  const [imageUrl, setImageUrl] = useState('');
  const category = 'technology';

  useEffect(() => {
    fetchRandomImage();
  }, []);

  const fetchRandomImage = async () => {
    const url = `https://api.api-ninjas.com/v1/randomimage?category=${category}`;

    try {
      const response = await fetch(url, {
        headers: {
          'X-Api-Key': 'a1ckGcjvtvC0t/Win9kK8A==ZCs1E8xPo0Lji1aY',
          Accept: 'image/jpg',
        },
      });

      if (!response.ok) {
        throw new Error('Error fetching image');
      }

      const data = await response.json();
      setImageUrl(data.url);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>Random Image</h2>
      {imageUrl ? (
        <img src={imageUrl} alt="Random Image" />
      ) : (
        <p>Loading image...</p>
      )}
    </div>
  );
};

export default ImageDisplay;
