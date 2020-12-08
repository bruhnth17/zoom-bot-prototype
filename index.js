var express = require("express");
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('joke', (msg) => {
        io.emit('joke', msg);
    });
});


let port = process.env.PORT;
if (port == null || port == "") {
    port = 8000;
}

http.listen(port, () => {
    console.log(`listening on ${port}`);
});
