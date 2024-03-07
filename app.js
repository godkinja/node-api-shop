// Import the express module. Express is a web application framework for Node.js.
const express = require('express');

// Create an instance of an Express application. This object, which we call 'app', has methods for routing HTTP requests, configuring middleware, and more.
const app = express();

// Use a middleware function with no mount path. This function is executed every time the app receives a request.
// Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle.
app.use((req, res, next) => {
    // Respond with a status code of 200 (OK) and a JSON object containing a single property 'message' with the value 'It works!'.
    // This means that every request to this server will receive this response.
    res.status(200).json({
        message: 'It works!'
    });
});

// Export the app object. This allows other modules to use it.
module.exports = app;