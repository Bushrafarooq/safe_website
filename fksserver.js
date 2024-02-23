const express = require('express');
const cors = require('cors'); // Import the CORS middleware
const app = express();
const port = 3000;

// Enable CORS middleware
app.use(cors());
app.get('/api/fake-shutdown', (req, res) => {
  // Here you can return the current status of the fake shutdown toggle
  // For demonstration purposes, let's assume it's always off
  const fakeShutdownStatus = { isToggled: false };

  // Print "connection established with Flutter" to the console
  console.log('Connection established with Flutter ');
   
  // Send the fake shutdown status as the response
  res.status(200).json(fakeShutdownStatus);
});

// Endpoint to receive fake shutdown request
app.post('/api/fake-shutdown', (req, res) => {
  // Perform fake shutdown action here
  
  // Simulate a delay of 5 seconds before sending the response
  const delay = 5000; // 5 seconds in milliseconds
  
  // Set a timeout to send the response after 5 seconds
  const timeoutId = setTimeout(() => {
    console.log('Fake shutdown initiated.Server');
    // Send response to the Flutter app
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ message: 'Fake shutdown initiated successfully.Server' }));
  }, delay);

  req.on('close', () => {
    clearTimeout(timeoutId);
    console.log('Fake shutdown request cancelled.Server');
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
