// Import the http module from Node.js. This module is used to create an HTTP server.
const http = require('http');

// Import the app module from the local file 'app.js'. This module defines the behavior of your application.
const app = require('./app');

// Set the port to the environment variable PORT if it's defined, otherwise default to 3000. This is the port your server will listen on.
const port = process.env.PORT || 3000;

// Create a new HTTP server and pass the 'app' (Express application) as the request listener. 
// 'app' will now handle all incoming requests to this server.
const server = http.createServer(app);

// Start the server listening on the specified port. Once the server is listening, it will start handling incoming HTTP requests on this port.
server.listen(port);