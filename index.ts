
const express = require("express");

const app = express();
const PORT = 4000;

// Middleware to parse JSON
app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the Express.js API",
    status: "running",
  });
});

// Get all users
app.get("/api/users", (req, res) => {
  res.json([
    { id: 1, name: "John" },
    { id: 2, name: "Mary" },
  ]);
});

// Create a user
app.post("/api/users", (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({
      error: "Name is required",
    });
  }

  res.status(201).json({
    message: "User created successfully",
    user: {
      id: Date.now(),
      name,
    },
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`API running at http://localhost:${PORT}`);
});
