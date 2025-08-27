export const handleJoinRoom = (socket, room) => {
  socket.join(room);
 
  console.log(`User ${socket.id} joined room ${room}`);
};
export const handleMessage=(socket,data)=>{
 socket.emit("message",data);
}