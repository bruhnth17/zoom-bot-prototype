const socket = io();

// Outgoing socket events
const jokeOnClick = () => socket.emit('joke');

const timerOnClick = () => socket.emit('timer');

// Handler for an incoming joke

socket.on('randomPerson', randomPersonObject => {
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





