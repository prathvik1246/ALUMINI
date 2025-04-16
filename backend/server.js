const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("✅ MongoDB connected successfully");

  // Start server ONLY after DB connects
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
})
.catch(err => console.error("❌ MongoDB connection error:", err));

// Routes
const authRoutes = require('./routes/auth');
app.use('/api', authRoutes);

// Optional root route
app.get("/", (req, res) => {
  res.send("API is running...");
});

const corsOptions = {
  origin: 'http://localhost:3000', // Allow requests from your frontend
  methods: 'GET,POST',
  allowedHeaders: 'Content-Type',
};

app.use(cors(corsOptions));  // Apply this to handle CORS more specifically
