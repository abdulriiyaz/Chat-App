const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);



//run when client connects

const PORT = 3000 || process.env.PORT;

//Setting static folder
app.use(express.static(path.join(__dirname,'public')))

io.on('connection',socket => {
    // console.log("New Connection...")

    //when client connects
    socket.emit('message', "Welcome to the App.");

    //broadcast when client joins
    socket.broadcast.emit('message', "User has Joined!");

    //when client disonnects.
    socket.on('disconnect', () => {
        io.emit('message', "User has left the chat.");
    });

    //listen for chat messages
    socket.on('chatMessage', msg => {
        console.log(msg);
        io.emit('message', msg);
    })
});



//Server Running
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
