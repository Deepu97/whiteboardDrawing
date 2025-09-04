// ✅ socket.js (clean & consistent)

import {
  handleJoinRoom,
  handleMessage,
  handleStart,
  handleMove,
  handleEnd,
  handleAddsticker
} from "../controller/drawing.js"; // Adjusted import path

export default function handleSocket(io) {
  io.on("connection", (socket) => {
    console.log(`⚡ User connected: ${socket.id}`);

    // 🔹 Room management
    socket.on("joinRoom", (roomId) => {
      handleJoinRoom(socket, roomId);
    });

    // 🔹 Chat messages
    socket.on("chatMessage", (data) => {
      handleMessage(socket, data);
    });

    // 🔹 Drawing events
    socket.on("paintPos", (data) => {
      handleStart(socket, data);
    });

    socket.on("moveStroke", (data) => {
      handleMove(socket, data);
    });

    socket.on("endStroke", (data) => {
      handleEnd(socket, data);
    });

    // 🔹 Stickers
    socket.on("addSticker", (data) => {
      handleAddsticker(socket, data);
    });

    // 🔹 Disconnect
    socket.on("disconnect", () => {
      console.log(`❌ User disconnected: ${socket.id}`);
    });
  });
}
