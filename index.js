const express = require("express");
const app = express();
const port = 3000;

// Variable to store the date
let retainedDate = new Date();

// Middleware to log the retained date
app.use((req, res, next) => {
  console.log(`Retained Date: ${retainedDate}`);
  next();
});

app.get("/", (req, res) => {
  //return hello from time server
  res.send("Hello from time server");
});

// Route to get the retained date
app.get("/date", (req, res) => {
  res.json({ retainedDate });
});

// Route to update the retained date
app.post("/update-date", (req, res) => {
  retainedDate = new Date();
  res.json({ message: "Date updated!", retainedDate });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
