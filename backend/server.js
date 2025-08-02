const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// CORS setup (define this BEFORE using any routes)
const corsOptions = {
  origin: 'http://localhost:3000', // your frontend origin
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders: 'Content-Type,Authorization'
};
app.use(cors(corsOptions));
app.use(express.json());

// Routes
const authRoutes = require('./routes/auth');
const graduatesRoute = require('./routes/graduates');
const clubsRoute = require('./routes/clubs');
//const helpRequestRoutes = require('./routes/helpRequest');
const invitationsRoute = require('./routes/invitations');
const referralsRoute = require('./routes/referral');
const chatRoutes = require('./routes/chatRequest');

app.use('/api', authRoutes);
app.use('/api/graduates', graduatesRoute);
app.use('/api/clubs', clubsRoute);
app.use('/api/requests', require('./routes/requests'));
app.use('/api/invitations', invitationsRoute);
app.use('/api/referral', referralsRoute);
app.use('/api', chatRoutes);
app.use('/api/chat', require('./routes/chat'));


// Optional root route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Socket.IO setup
const http = require('http');
const { Server } = require('socket.io');
const httpServer = http.createServer(app);
const io = new Server(httpServer, {
  cors: { origin: 'http://localhost:3000' }
});

io.on('connection', (socket) => {
  console.log('🔌 New client connected:', socket.id);

  // Client should emit 'joinRoom' with roomId
  socket.on('joinRoom', (roomId) => {
    socket.join(roomId);
    console.log(`📥 Socket ${socket.id} joined room: ${roomId}`);
  });

  socket.on('sendMessage', (data) => {
    const { room, from, message } = data;
    console.log(`📨 Message from ${from} to room ${room}: ${message}`);
    io.to(room).emit('receiveMessage', { from, message });
  });

  socket.on('disconnect', () => {
    console.log('❌ Client disconnected:', socket.id);
  });
});
// Database connect and server start (use only httpServer.listen!)
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("✅ MongoDB connected successfully");
  httpServer.listen(PORT, () => {
    console.log(`🚀 Server with Socket.IO running on http://localhost:${PORT}`);
  });
})
.catch(err => console.error("❌ MongoDB connection error:", err));
