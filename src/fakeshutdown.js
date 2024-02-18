// React component
import React, { useState } from 'react';
import axios from 'axios';

const FakeShutdownScreen = () => { // Renamed from App to FakeShutdownScreen
  const [message, setMessage] = useState('');

  const handleShutdown = async () => {
    try {
      console.log("Sending shutdown command to Node Server...");
      const response = await axios.post('http://localhost:3000/fake-shutdown');
      console.log("Connected to Node Server");
      console.log("Response from server:", response);
      setMessage(response.data);
    } catch (error) {
      console.error('Error sending shutdown command:', error);
      setMessage('Error sending shutdown command');
    }
  };

  return (
    <div>
      <button onClick={handleShutdown}>Shutdown Device</button>
      <p>{message}</p>
    </div>
  );
};

export default FakeShutdownScreen;
