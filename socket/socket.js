import {handleJoinRoom, handleMessage,handleStart,handleMove,handleEnd,handleAddsticker} from '../controller/drawing.js';
export default function handleSocket(io){
    io.on("connection",(socket)=>{
        console.log("socket id",socket.id);
        //for joining room 
        socket.on("joinRoom",(room)=>handleJoinRoom(socket,room));
        //for chat
         socket.on("chatMessage", (data) => handleMessage( socket, data));
         //for real time changes starting position
         socket.on("paintPos",(data)=>handleStart(socket,data));
         //for move position 
         socket.on("moveStroke",(data)=>handleMove(socket,data));
         //for end position
          socket.on("endStroke",(data)=>handleEnd(socket,data));
          //add sticker
          socket.on("addSticker",(data)=>handleAddsticker(socket,data));
             socket.on("disconnect", () => {
      console.log("User disconnected:", socket.id);
    });
    })

}