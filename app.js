// Import the express module. Express is a web application framework for Node.js.
const express = require("express");

// Create an instance of an Express application. This object, which we call 'app', has methods for routing HTTP requests, configuring middleware, and more.
const app = express();

// Import the productRoutes module from the local file './api/routes/products'. This module defines the behavior of your application for routes starting with '/products'.
const productRoutes = require("./api/routes/products");
const orderRoutes = require("./api/routes/orders");

// Use a middleware function with the mount path '/products'. This function is executed every time the app receives a request at the '/products' path.
// The middleware function here is the 'productRoutes' module. It will handle all requests that start with '/products'.
app.use("/products", productRoutes);
app.use("/orders", orderRoutes);

// Export the app object. This allows other modules to use it.
module.exports = app;
