const express = require("express");
const Timer = require('tiny-timer');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const mockData = require(__dirname + '/helper/mockData.js');

let TIMER_IN_USE = false;
let VOTE_IN_PROGRESS = false;
let USERS = []
const VOTES = {
    yes: 0,
    no: 0,
}

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
app.get('/users', (req, res) => {
    res.json(USERS);
});


// Handler for incoming socket messages from clients
io.on('connection', socket => {

    userRegistration(socket);

    socket.on('compliment', complimentObject => io.emit('compliment', mockData.getCompliment(complimentObject.name)))

    socket.on('joke', () => io.emit('joke', mockData.getJoke()));

    socket.on('showMeme', () => io.emit('showMeme', mockData.getMeme()));
    socket.on('iceBreaker', () => io.emit('iceBreaker', mockData.getIceBreaker()));
    socket.on('passTheMic', () => io.emit('passTheMic'));
    socket.on('backToWork', () => io.emit('backToWork'));
    socket.on('awkwardSilence', () => io.emit('awkwardSilence'));
    socket.on('iAmLost', () => io.emit('iAmLost'));
    socket.on('break', () => {
        if(VOTE_IN_PROGRESS)
            return;
        VOTE_IN_PROGRESS = true;
        io.emit('breakVote');
    });
    // socket.on('askOpinion', () => io.emit('askOpinion', mockData.getAskOpinion()));
    socket.on('randomPerson', () => io.emit('randomPerson', mockData.getRandomPerson()));

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
        timer.on('tick', ms => {
            io.emit('timerUpdate', {time: millisToMinutesAndSeconds(ms)})
        });
        timer.on('done', () => {
            io.emit('timerDone', { speechFile: "End%20timer"})
            TIMER_IN_USE = false;
        });
        timer.start(obj.minutes * 1000 * 60);
    })

    socket.on('vote', vote => {
        if(vote) {
            VOTES.yes = VOTES.yes+1;
        } else {
            VOTES.no = VOTES.no+1;
        }
        const threshold = USERS.length / 2;
        if(VOTES.yes > threshold) {
            io.emit('breakDecision', true);
            resetVotes();
            return;
        }
        if(VOTES.no > threshold) {
            io.emit('breakDecision', false);
            resetVotes();
            return;
        }
    })

});

const resetVotes = () => {
    VOTE_IN_PROGRESS = false;
    VOTES.yes = 0;
    VOTES.no = 0;
}

const userRegistration = socket => {
    USERS.push({
        id: socket.id,
        name: ""
    })

    socket.on('nameChange', name => {
        console.log(USERS)
        USERS = USERS.map(user =>
            user.id === socket.id ? { ...user, name: name } : user
        );
    })

    socket.on('disconnect', () => {
        USERS = USERS.filter( el => el.id !== socket.id );
    })
}




let port = process.env.PORT; // needed for export to heroku
if (port == null || port == "") {
    port = 8000;
}

http.listen(port, () => {
    console.log(`listening on ${port}`);
});


