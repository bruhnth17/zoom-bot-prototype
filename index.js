const express = require("express");
const Timer = require('tiny-timer');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const mockData = require(__dirname + '/helper/mockData.js');

let TIMER_IN_USE = false;

app.use(express.static(__dirname + '/public'));
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});


// Handler for incoming socket messages from clients
io.on('connection', socket => {
    console.log('a user connected');

    socket.on('joke', () => io.emit('joke', mockData.getJoke()));
    socket.on('showMeme', () => io.emit('showMeme', mockData.getMeme()));
    // socket.on('compliment', name => io.emit('compliment', mockData.getCompliment(name)));

    socket.on('timer', obj => {

        if(TIMER_IN_USE)
            return;

        TIMER_IN_USE = true;

         const millisToMinutesAndSeconds = (millis) => {
            var minutes = Math.floor(millis / 60000);
            var seconds = ((millis % 60000) / 1000).toFixed(0);
            return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
        }

        io.emit('timerStart', { speechFile: "Start%20timer"});

        const timer = new Timer();
        timer.on('tick', ms => io.emit('timerUpdate', { time: millisToMinutesAndSeconds(ms)}));
        timer.on('done', () => {
            io.emit('timerDone', { speechFile: "End%20timer"})
            TIMER_IN_USE = false;
        });
        timer.start(obj.minutes * 1000 * 60);
    })
});


let port = process.env.PORT; // needed for export to heroku
if (port == null || port == "") {
    port = 8000;
}

http.listen(port, () => {
    console.log(`listening on ${port}`);
});
