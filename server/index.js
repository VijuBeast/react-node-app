// Create a express server
const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/api", (req, res) => {
  res.json({
    message: "Welcome to the React Server",
  });
});

// Login API
app.get("/api/login", (req, res) => {
  res.json({
    username: "admin",
    password: "admin",
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
