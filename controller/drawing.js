// patched_drawing.js

export const handleJoinRoom = (socket, room) => {
  try {
    if (!room || typeof room !== "string") {
      console.warn(`joinRoom called with invalid room:`, room);
      return;
    }
    socket.join(room);
    socket.data = socket.data || {};
    socket.data.room = room;
    console.log(`✅ ${socket.id} joined room ${room}`);
  } catch (err) {
    console.error("joinRoom error:", err);
  }
};

// 🔹 Helper: broadcast within a room if available; otherwise to everyone except sender
const broadcast = (socket, event, payload) => {
  const room = socket?.data?.room;
  if (room) {
    socket.to(room).emit(event, payload);
  } else {
    socket.broadcast.emit(event, payload);
  }
};

export const handleMessage = (socket, data) => {
  broadcast(socket, "message", data);
};

export const handleStart = (socket, data) => {
  broadcast(socket, "start", data);
};

export const handleMove = (socket, data) => {
  broadcast(socket, "move", data);
};

export const handleEnd = (socket, data) => {
  broadcast(socket, "end", data);
};

export const handleAddsticker = (socket, data) => {
  broadcast(socket, "addSticker", data);
};
