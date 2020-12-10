const socket = io();

// Outgoing socket events
const jokeOnClick = () => {
    // Example how to send audio TODO: delete later
    playJingle();
    socket.emit('joke')
};

const timerOnClick = minutes => {
    socket.emit('timer', {
        minutes: minutes
    })
};

// Handler for an incoming joke

// randomPersonObject = {groupChatText, speechFile}
socket.on('randomPerson', randomPersonObject => {
    playJingle();

    setTimeout(function (){

        // put text in group chat
        // play speech file

        // const audio = new Audio(`audio/${randomPersonObject.speechFile}.mp3`);
        // audio.play();

    }, 1000);
});

socket.on('timerStart', timerStartObject => {
    playJingle();

    setTimeout(function (){

        console.log(`audio/${timerStartObject.speechFile}.m4a`);
        const audio = new Audio(`audio/${timerStartObject.speechFile}.m4a`);
        audio.play();

    }, 1000);
});

socket.on('timerUpdate', timerUpdateObject => {
    console.log(timerUpdateObject.time)
});

socket.on('timerDone', timerDoneObject => {
    playJingle();

    setTimeout(function (){

        console.log(`audio/${timerDoneObject.speechFile}.m4a`);
        const audio = new Audio(`audio/${timerDoneObject.speechFile}.m4a`);
        audio.play();

    }, 1000);
});



socket.on('passTheMic', passTheMicObject => {
});

socket.on('backToWork', backToWorkObject => {
});

socket.on('awkwardSilence', awkwardSilenceObject => {
});

socket.on('iAmLost', iAmLostObject => {
});

socket.on('breakVote', breakVoteObject => {
    // when someone pressed the vote button
});

socket.on('breakDecision', breakDecisionObject => {
    // when the vote has been decided
});

socket.on('compliment', iAmLostObject => {
});

socket.on('askOpinion', askOpinionObject => {
});

socket.on('showMeme', showMemeObject => {
});

socket.on('iceBreaker', iceBreakerObject => {
});

// joke object = {groupChatText, speechFile}
socket.on('joke', jokeObject => {
    const list = document.getElementById('list');
    const newListItem = document.createElement("li");
    const paragraphElement = document.createElement("p");
    paragraphElement.innerText = jokeObject.groupChatText;
    newListItem.appendChild(paragraphElement);
    list.appendChild(newListItem);
});

const playJingle = () => {
    const audio = new Audio('audio/jingle.wav');
    audio.play();
}





