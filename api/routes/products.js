// Import the express module. Express is a web application framework for Node.js.
const express = require('express');

// Create a new router object. This object can be used to define routes in your application.
const router = express.Router();

// Define a route for GET requests to the path '/'. When the server receives a GET request at this path, it will execute the provided function.
// The function takes three arguments: the request object, the response object, and the next middleware function in the application’s request-response cycle.
router.get('/', (req, res, next) => {
    // Respond with a status code of 200 (OK) and a JSON object containing a single property 'message' with the value 'Handling GET requests to /products'.
    res.status(200).json({
        message: 'Handling GET requests to /products'
    });
});

// Define a route for POST requests to the path '/'. When the server receives a POST request at this path, it will execute the provided function.
// The function takes three arguments: the request object, the response object, and the next middleware function in the application’s request-response cycle.
router.post('/', (req, res, next) => {
    // Respond with a status code of 200 (OK) and a JSON object containing a single property 'message' with the value 'Handling POST requests to /products'.
    res.status(201).json({
        message: 'Handling POST requests to /products'
    });
});

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    if (id === 'special'){
        res.status(200).json({
            message: 'You discovered the special ID',
            id: id
        });
    } else {
        res.status(200).json({
            message: 'You passed an ID'
        });
    }
});

router.patch('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'Updated product!'
    });
});

router.delete('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'Deleted product!'
    });
});

// Export the router object. This allows other modules to use it.
module.exports = router;