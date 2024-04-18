const express = require('express');
const bodyParser = require('body-parser');
const sql = require('mssql');
const cors = require('cors'); // Import the cors package

const app = express();
const port = 3000; // or any port you prefer

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Use the cors middleware to enable CORS

// Database configuration
const config = {
  user: 'SafeAdmin',
  password: '#Safeapp',
  server: 'safeserver.database.windows.net',
  database: 'SafeDatabase',
  options: {
    encrypt: true, // Use encryption
    enableArithAbort: true // Enable ArithAbort
  }
};

// API endpoint for posting data
// POST endpoint for posting data
app.post('/postData', async (req, res) => {
  try {
    // Connect to the database
    const pool = await sql.connect(config);
    
    const { full_name, phone_number, address, email, password } = req.body;
    console.log('Recevied data');
    console.log(full_name, phone_number, address, email, password);
    const request = pool.request();
    const query = `INSERT INTO users (full_name, phone_number, address, email, password) VALUES ('${full_name}', '${phone_number}', '${address}', '${email}', '${password}')`;
    await request.query(query);
   console.log(full_name, phone_number, address, email, password);
    // Respond with success message
    res.status(200).send('Data posted successfully');
  } catch (error) {
    // Handle errors
    console.error('Error posting data:', error.message);
    res.status(500).send('Error posting data');
  }
});

// GET endpoint for retrieving data
app.get('/postData', (req, res) => {
  // Handle GET request (e.g., retrieve data from the database)
  res.status(200).send('GET request received');
});


// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
