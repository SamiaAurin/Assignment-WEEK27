const express = require("express");
const connectDB = require("./config/db");
require("dotenv").config();

const app = express();

// Connect to MongoDB
connectDB();

app.use(express.json());

// Import routes
const authRoutes = require("./routes/authRoutes");
const contentRoutes = require("./routes/contentRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/content", contentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
