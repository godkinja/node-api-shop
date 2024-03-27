// Import the express module. Express is a web application framework for Node.js.
const express = require("express");

// Create an instance of an Express application. This object, which we call 'app', has methods for routing HTTP requests, configuring middleware, and more.
const app = express();

// Import the morgan module. Morgan is a popular HTTP request logger middleware for Node.js. It simplifies the process of logging requests to your application.
const morgan = require("morgan");

// Import the productRoutes module from the local file './api/routes/products'. This module defines the behavior of your application for routes starting with '/products'.
const productRoutes = require("./api/routes/products");
const orderRoutes = require("./api/routes/orders");

// Use the morgan middleware function with the 'dev' option. This will log all incoming requests to the console with additional information, such as the HTTP method, status code, and response time.
app.use(morgan("dev"));

// Use a middleware function with the mount path '/products'. This function is executed every time the app receives a request at the '/products' path.
// The middleware function here is the 'productRoutes' module. It will handle all requests that start with '/products'.
app.use("/products", productRoutes);
app.use("/orders", orderRoutes);

// Handle errors for requests that reach this point. If a request reaches this point, it means that no route in the application matched the request path.
app.use((req, res, next) => {
  // Create a new Error object with the message 'Not found' and a status code of 404 (Not Found).
  const error = new Error("Not found");
  // Set the status code of the error object to 404.
  error.status = 404;
  // Pass the error object to the next middleware function in the application’s request-response cycle.
  next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

// Export the app object. This allows other modules to use it.
module.exports = app;
