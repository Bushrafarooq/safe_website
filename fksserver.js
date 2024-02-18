const express = require('express');
const app = express();
const port = 3000;

// Endpoint to receive fake shutdown request
app.post('/fake-shutdown', (req, res) => {
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
