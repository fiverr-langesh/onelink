const express = require("express");
const { connectDb } = require("./utils/db/connectDb");
const { LinkRouter } = require("./routes/links/link.route");
const { mainLink } = require("./routes/links/mainLink.controller");
const app = express();
const cors = require("cors");

// Load env vars
require("dotenv").config();
const PORT = process.env.PORT || 3000;

// Connect to database
connectDb();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/link", LinkRouter);

// Main link
app.get("/:mainUrlId", mainLink);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
