const express = require("express");
const app = express();

app.get("/api/health", (req, res) => {
  res.json({ message: "API is healthy", time: new Date() });
});

app.get("/api/employee", (req, res) => {
  res.json({
    id: 101,
    name: "Saradysol Engineer",
    role: "Backend Developer"
  });
});

app.listen(3000, () => console.log("Server running on port 3000"));
