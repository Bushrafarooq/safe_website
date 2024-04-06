const express = require('express');
const cors = require('cors');
const app = express();
const sql = require('mssql');
app.use(cors());
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

    // Start the server
    const port = process.env.PORT || 5000;
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch(err => {
    console.error('Error connecting to database:', err);
  });
