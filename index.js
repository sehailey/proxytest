const express = require("express");
const path = require("path");
const morgan = require("morgan");
if (process.env.NODE_ENV === "dev") require("./.secrets");
// Create the server
const app = express();
app.use(morgan("tiny")); // logging framework
console.log(process.env.NODE_ENV, process.env.SECRET);

// Serve our api message
app.get("/api/message", async (req, res, next) => {
  try {
    res.status(201).json({ message: "Hello From Express!!" });
  } catch (err) {
    next(err);
  }
});

if (process.env.NODE_ENV === "production") {
  // Express will serve up production assets
  app.use(express.static("build"));
  app.get("*", (req, res) => res.sendFile(path.resolve("build", "index.html")));
}

if (process.env.NODE_ENV === "dev") {
  // Express will serve up production assets
  app.use(express.static("public"));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve("public", "index.html"))
  );
}

// Express will serve up the front-end index.html file if it doesn't recognize the route

// Choose the port and start the server
const PORT = process.env.PORT || 1337;
app.listen(PORT, () => {
  console.log(`Mixing it up on port ${PORT}`);
});
