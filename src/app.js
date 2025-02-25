// This file is responsible for setting up an Express.js server, connecting to a MongoDB database, 
// and configuring middleware for logging and parsing JSON requests. It also imports routes from 
// a separate module and starts the server on a specified port.

const express = require('express'); // Import the Express framework
const { router } = require('./routes/route'); // Import the router from the routes module
const morgan = require('morgan'); // Import the morgan middleware for logging HTTP requests
const app = express(); // Create an instance of an Express application
// const { body, validationResult } = require('express-validator');
const dotenv = require('dotenv'); // Import dotenv to load environment variables from a .env file
const { default: mongoose } = require('mongoose'); // Import mongoose for MongoDB object modeling
const bodyParser = require('body-parser'); // Import body-parser to parse incoming request bodies
dotenv.config(); // Load environment variables from .env file

// Database connection
mongoose.connect(process.env.MONGO_URI) // Connect to MongoDB using the URI from environment variables
    .then(() => console.log('Db Connected!!')) // Log success message if connection is successful
    .catch(err => console.log(`Db Connection error: ${err.message}`)); // Log error message if connection fails

// Middleware  
app.use(morgan('dev')); // Use morgan middleware to log requests in 'dev' format
app.use(bodyParser.json()); // Use body-parser middleware to parse JSON request bodies
app.use('/', router); // Use the imported router for handling routes

const port = process.env.PORT || 8080; // Set the port to the value from environment variables or default to 8080
app.listen(port, () => { // Start the server and listen on the specified port
    console.log(`A nodeJS Server is listening on port: ${port}`); // Log the port the server is listening on
});
