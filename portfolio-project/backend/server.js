const express = require("express");
const path = require("path");
const cors = require("cors");
const connectDB = require("./config/db");
require("dotenv").config();

const app = express();

// Connect to MongoDB
connectDB();

// Middleware to parse JSON and enable CORS
app.use(express.json());
app.use(cors());

// API Routes
const authRoutes = require("./routes/authRoutes");
const contentRoutes = require("./routes/contentRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/content", contentRoutes);

// Serve frontend as static files from one level up (../frontend)
app.use(express.static(path.join(__dirname, "../frontend")));

// Catch-all route to serve index.html for any unknown routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend", "index.html"));
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
