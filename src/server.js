const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const sql = require('mssql');
app.use(cors());
app.use(express.json()); // Add this line to parse JSON bodies
app.use(bodyParser.json({ limit: '50mb' }));
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

// Connect to the database
sql.connect(config)
  .then(pool => {
    console.log('Connected to database');

    // Define a route to retrieve data from the database
    app.get('/data', async (req, res) => {
      try {
        const request = pool.request();
        const result = await request.query('SELECT * FROM users');
        res.json(result.recordset);
      } catch (error) {
        console.error('Error querying database:', error);
        res.status(500).send('Error querying database');
      }
    });

    // Define a route to receive location data from the Android app
    app.post('/location', async (req, res) => {
      try {
        const { latitude, longitude } = req.body;

        // Handle the location data as needed (e.g., store in the database)
        // Example: Insert the location data into a 'locations' table
        const request = pool.request();
        await request.query(`INSERT INTO locations (latitude, longitude) VALUES (${latitude}, ${longitude})`);

        res.status(200).send('Location data received');
      } catch (error) {
        console.error('Error receiving location data:', error);
        res.status(500).send('Error receiving location data');
      }
    });

    // Define a route to upload image data to the database

    app.post('/upload-intruder', async (req, res) => {
      try {
        const imageData = req.body.imageData; // Assuming you're sending image data in the request body

        // Connect to the SQL Server database
        const pool = await sql.connect(config);

        // Insert the image data into the Intruder table using a parameterized query
        const request = pool.request();
        await request.input('imageData', sql.VarChar(sql.MAX), imageData).query('INSERT INTO Intruder (ImageData) VALUES (@imageData)');

        res.status(200).send('Image uploaded successfully');
      } catch (error) {
        console.error('Error uploading image:', error);
        res.status(500).send('Internal server error');
      }
    });

    // Define a route to retrieve the latest entry from the locations table
    app.get('/latest-location', async (req, res) => {
      try {
        const request = pool.request();
        const result = await request.query('SELECT TOP 1 * FROM locations ORDER BY id DESC');
        res.json(result.recordset);
      } catch (error) {
        console.error('Error retrieving latest location:', error);
        res.status(500).send('Error retrieving latest location');
      }
    });

    // Start the server
    const port = process.env.PORT || 5000;
    app.listen(port, '0.0.0.0', () => {
      console.log(`Server running on port ${port}`);
    });
  })

  .catch(err => {
    console.error('Error connecting to database:', err);
  });
