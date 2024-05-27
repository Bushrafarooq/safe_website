import React, { useState, useEffect } from 'react';

const ImageDisplay = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Replace 'YOUR_API_ENDPOINT' with the actual endpoint URL
    fetch('http://localhost:5000/getImages')
      .then(response => response.json())
      .then(data => {
        // Assuming the API rsponse contains an array of Base64-encoded image strings
        console.log(data[0])
        setImages(data); // Adjust according to your API response
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading images</div>;

  return (
    <div>
        <h1>Intruders</h1>
      {images.map((base64Image, index) => (
        <img
          key={index}
          src={`data:image/jpeg;base64,${base64Image}`}
          alt={`Fetched from API ${index + 1}`}
          style={{ width: '30%', height: '30%', marginBottom: '10px', margin:'5px' }}
        />
      ))}
    </div>
  );
};

export default ImageDisplay;
