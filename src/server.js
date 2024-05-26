const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
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

    // Define a route to fetch all images from the Intruder table
    app.get('/getImages', async (req, res) => {
      try {
        // Connect to the SQL Server database
        const pool = await sql.connect(config);

        // Query to select all images from the Intruder table
        const result = await pool.request().query('SELECT imageData FROM Intruder');

        // Extract the image data from the query result
        const images = result.recordset.map(record => record.imageData);

        // Send the array of image data as the response
        res.json(images);
      } catch (error) {
        console.error('Error fetching intruder images:', error);
        res.status(500).send('Internal server error');
      }
    });

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
        //console.log(full_name, phone_number, address, email, password);
        // Respond with success message
        res.status(200).send('Data posted successfully');
      } catch (error) {
        // Handle errors
        console.error('Error posting data:', error.message);
        res.status(500).send('Error posting data');
      }
    });


    app.delete('/data/:userId', async (req, res) => {
      const userId = req.params.userId;
    
      try {
        // Connect to the database
        await sql.connect(config);
    
        // Delete user query
        const result = await sql.query`DELETE FROM users WHERE user_id = ${userId}`;
    
        if (result.rowsAffected[0] > 0) {
          res.status(200).send('User deleted successfully');
        } else {
          res.status(404).send('User not found');
        }
      } catch (err) {
        console.error('Error deleting user:', err);
        res.status(500).send('Error deleting user');
      }
    });


    app.post('/login', async (req, res) => {
      const { email, password } = req.body;
    
      try {
        // Connect to the database
        await sql.connect(config);
    
        // Query the database to check user credentials
        const result = await sql.query`SELECT * FROM users WHERE email = ${email} AND password = ${password}`;
        const user = result.recordset[0];
    
        if (user) {
          // User authentication successful
          res.status(200).json({ message: 'Login successful', user });
        } else {
          // User not found or invalid credentials
          res.status(401).json({ message: 'Invalid credentials' });
        }
      } catch (error) {
        console.error('Error during login:', error.message);
        res.status(500).json({ message: 'Internal server error' });
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
    app.post('/contact-us', async (req, res) => {
      try {
        // Destructure the request body to get the necessary data
        const { name, email, phone,message } = req.body;
        const currentDate = new Date();
        // Connect to the SQL Server database
        const pool = await sql.connect(config);
    
        // Insert the data into the ContactUs table using a parameterized query
        const request = pool.request();
        await request
          .input('name', sql.NVarChar(255), name)
          .input('email', sql.NVarChar(255), email)
          .input('phone', sql.NVarChar(sql.MAX), phone)
          .input('message', sql.NVarChar(sql.MAX), message)
         
          .query(`INSERT INTO ContactUs (name, email, phone, message) 
                  VALUES (@name, @email, @phone, @message)`);
        
        // Send a success response
        res.status(200).send('Data inserted successfully into ContactUs table');
      } catch (error) {
        // Handle errors
        console.error('Error inserting data into ContactUs table:', error);
        res.status(500).send('Internal server error');
      }
    });
// Define a route to fetch all data from the ContactUs table, showing only the latest value for each unique email address
app.get('/get-contact-us', async (req, res) => {
  try {
    // Connect to the SQL Server database
    const pool = await sql.connect(config);

    // SQL query to select all data from the ContactUs table, showing only the latest value for each unique email address
    const query = `
      SELECT *
      FROM (
        SELECT *, ROW_NUMBER() OVER (PARTITION BY email ORDER BY submission_date DESC) AS rn
        FROM ContactUs
      ) AS ranked
      WHERE rn = 1;
    `;
    
    // Execute the query
    const result = await pool.request().query(query);

    // Send the query result as the response
    res.json(result.recordset);
  } catch (error) {
    // Handle errors
    console.error('Error fetching data from ContactUs table:', error);
    res.status(500).send('Internal server error');
  }
});
// Define a route to handle POST requests for deleting tuples from the ContactUs table based on email
app.post('/delete-contact', async (req, res) => {
  try {
    // Extract the email from the request body
    const { email } = req.body;

    // Connect to the SQL Server database
    const pool = await sql.connect(config);

    // Execute a DELETE query to delete tuples with the specified email
    const request = pool.request();
    await request
      .input('email', sql.NVarChar(255), email)
      .query('DELETE FROM ContactUs WHERE email = @email');
    
    // Send a success response
    res.status(200).send(`Tuples with email ${email} deleted successfully from ContactUs table`);
  } catch (error) {
    // Handle errors
    console.error('Error deleting tuples from ContactUs table:', error);
    res.status(500).send('Internal server error');
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
