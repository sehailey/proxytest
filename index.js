const express = require("express");
const path = require("path");

// Create the server
const app = express();

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, "build")));

// Serve our api route /cow that returns a custom talking text cow
app.get("/api", async (req, res, next) => {
  try {
    const data = { data: "HELLOOOOO FROM EXPRESS" };
    console.log(data);
    res.json(data);
  } catch (err) {
    next(err);
  }
});

// Anything that doesn't match the above, send back the index.html file
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/build/index.html"));
});

// Choose the port and start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Mixing it up on port ${PORT}`);
});
