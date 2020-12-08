const express = require("express");
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const mockData = require(__dirname + '/helper/mockData.js');

// add client resource folder
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Handler for incoming socket messages from clients
io.on('connection', (socket) => {
    console.log('a user connected');


    socket.on('joke', (msg) => {
        io.emit('joke', {
            text: mockData.getJoke()
        });
    });
});


let port = process.env.PORT;
if (port == null || port == "") {
    port = 8000;
}

http.listen(port, () => {
    console.log(`listening on ${port}`);
});
