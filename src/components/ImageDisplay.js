import React, { useState, useEffect } from 'react';
import './ImageDisplay.css';

const ImageDisplay = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchRandomImage = async () => {
      try {
        const response = await fetch(
          'https://api.api-ninjas.com/v1/randomimage?category=nature',
          {
            headers: {
              'X-Api-Key': 'a1ckGcjvtvC0t/Win9kK8A==ZCs1E8xPo0Lji1aY',
              Accept: 'image/jpg',
            },
          },
        );
        if (!response.ok) {
          throw new Error('Failed to fetch image');
        }
        const imageData = await response.blob();
        const imageUrl = URL.createObjectURL(imageData);
        setImageUrl(imageUrl);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };

    fetchRandomImage();
  }, []);

  if (loading) {
    return <div className="image-display">Loading image...</div>;
  }

  if (error) {
    return <div className="image-display">Error: Failed to fetch image</div>;
  }

  return (
    <div className="image-display">
      <h2>Random Image</h2>
      <img src={imageUrl} alt="" />
    </div>
  );
};

export default ImageDisplay;
