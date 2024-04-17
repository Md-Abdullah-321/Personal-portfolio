const express = require("express");
const cors = require("cors");
const next = require("next");
const path = require("path");

const app = express();
const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
  // Serve static files from the correct directory
  app.use(express.static(path.join(__dirname, "../client/.next")));

  // Handle all other requests with Next.js
  app.get('/', (req, res) => {
    return handle(req, res);
  });

  // Optional: Add your custom API routes here (if needed)
});

// Other middlewares and routes
app.use(cors());

module.exports = app;
