const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({ extended: true }));

// Serve the login form HTML page
app.get('/', (req, res) => {
  res.send(`
    <form method="post" action="/login">
      <label for="email">Email:</label>
      <input type="text" name="email" id="email">
      <br>
      <label for="password">Password:</label>
      <input type="password" name="password" id="password">
      <br>
      <input type="submit" value="Login">
    </form>
  `);
});

// Handle the login form submission
app.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  // Connect to MongoDB
  MongoClient.connect('mongodb://127.0.0.1:27017', { useUnifiedTopology: true }, (err, client) => {
    if (err) throw err;

    // Select the registration collection
    const db = client.db('cyberpunk');
    const registration = db.collection('registration');

    // Find the user with the given email and password
    registration.findOne({ email: email, password: password }, (err, user) => {
      if (err) throw err;

      if (user) {
        // Successful login
        res.send(`Welcome, ${user.email}!`);
      } else {
        // Incorrect email or password
        res.send('Invalid email or password');
      }

      // Close the MongoDB client
      client.close();
    });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
