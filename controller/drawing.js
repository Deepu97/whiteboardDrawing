export const handleJoinRoom = (socket, room) => {
  socket.join(room);
 
  console.log(`User ${socket.id} joined room ${room}`);
};
export const handleMessage=(socket,data)=>{
 socket.emit("message",data);
}
export const handleStart=(socket,data)=>{
  console.log(data);
  socket.emit("start",data);
}
export const handleMove=(socket,data)=>{
  console.log(data);
  socket.emit("move",data);
}
export const handleEnd=(socket,data)=>{
  socket.emit("end",data)
}
export const handleAddsticker=(socket,data)=>{
  socket.emit("addSticker",data);
}