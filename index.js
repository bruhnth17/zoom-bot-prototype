const express = require("express");
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const mockData = require(__dirname + '/helper/mockData.js');

app.use(express.static(__dirname + '/public'));
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});


// Handler for incoming socket messages from clients
io.on('connection', socket => {
    console.log('a user connected');

    socket.on('joke', () => io.emit('joke', mockData.getJoke()));
    // socket.on('compliment', name => io.emit('compliment', mockData.getCompliment(name)));
});


let port = process.env.PORT; // needed for export to heroku
if (port == null || port == "") {
    port = 8000;
}

http.listen(port, () => {
    console.log(`listening on ${port}`);
});
