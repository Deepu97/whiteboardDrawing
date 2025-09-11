require('dotenv').config();
import express from 'express';
import http from 'http';
import cors from "cors";
import handleSocket from './socket/socket.js';
import { Server } from 'socket.io';

const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 4000;
// Allowed origins
const allowedOrigins = [
  "http://127.0.0.1:5501",
  "http://127.0.0.1:5500"
];

// ✅ Express APIs ke liye CORS
app.use(cors({
  origin: function(origin, callback) {
    if(!origin) return callback(null, true); // allow non-browser requests
    if(allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Socket.IO ke liye CORS
const io = new Server(server, {
  cors: {
    origin: function(origin, callback) {
      if(!origin) return callback(null, true);
      if(allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST"],
    credentials: true
  }
});

handleSocket(io);

server.listen(PORT, () => console.log("server is running"));