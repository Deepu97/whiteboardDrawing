import {handleJoinRoom, handleMessage} from '../controller/drawing.js';
export default function handleSocket(io){
    io.on("connection",(socket)=>{
        console.log("socket id",socket.id);
        socket.on("joinRoom",(room)=>handleJoinRoom(socket,room));
         socket.on("chatMessage", (data) => handleMessage( socket, data));
             socket.on("disconnect", () => {
      console.log("User disconnected:", socket.id);
    });
    })

}