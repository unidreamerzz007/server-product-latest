// Import required modules
const jsonServer = require('json-server');
const path = require('path');

// Create a JSON Server instance
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json')); // Path to your db.json file
const middlewares = jsonServer.defaults();

// Set up middlewares and router
server.use(middlewares);
server.use(jsonServer.bodyParser); // Parse incoming request bodies
server.use(router);

// Start the server
const port = process.env.PORT || 5001;
server.listen(port, () => {
  console.log(`JSON Server is running on http://localhost:${port}`);
});