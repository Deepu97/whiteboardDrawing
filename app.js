import express from 'express';


import http from 'http';
import cors from "cors";
import  handleSocket from './socket/socket.js';
import {Server} from 'socket.io';
const app = express();
const server=http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://127.0.0.1:5500", // frontend ka URL
    methods: ["GET", "POST"],
    credentials: true
  }
});

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
// ✅ Express APIs ke liye CORS
app.use(cors({
  origin: "http://127.0.0.1:5500",
  credentials: true
}));
handleSocket(io);
server.listen(4000,()=>console.log("server is running")
)