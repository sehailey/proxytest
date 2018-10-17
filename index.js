const express = require("express");
const path = require("path");
const morgan = require("morgan");

// Create the server
const app = express();
app.use(morgan("tiny")); // logging framework

// Serve our api message
app.get("/api/message", async (req, res, next) => {
  try {
    res.status(201).json({ message: "HELLOOOOO FROM EXPRESS" });
  } catch (err) {
    next(err);
  }
});

if (process.env.NODE_ENV === "production") {
  // Express will serve up production assets
  app.use(express.static("build"));

  // Express will serve up the front-end index.html file if it doesn't recognize the route
  app.get("*", (req, res) => res.sendFile(path.resolve("build", "index.html")));
}

// Choose the port and start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Mixing it up on port ${PORT}`);
});
