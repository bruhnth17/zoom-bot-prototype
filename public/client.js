const socket = io();

// Outgoing socket events
const jokeOnClick = () => {
    // Example how to send audio TODO: delete later
    playJingle();
    socket.emit('joke')
};

// Outgoing socket events
const memeOnClick = () => {
    playJingle();
    socket.emit('showMeme')
};

// Outgoing socket events
const micOnClick = () => {
    playJingle();
    socket.emit('passTheMic')
};

// Outgoing socket events
const awkwardOnClick = () => {
    playJingle();
    socket.emit('awkwardSilence')
};

// Outgoing socket events
const workOnClick = () => {
    playJingle();
    socket.emit('backToWork')
};
// Outgoing socket events
const breakOnClick = () => {
    playJingle();
    socket.emit('breakVote')
};

// Outgoing socket events
const lostOnClick = () => {
    playJingle();
    socket.emit('iAmLost')
};

// Outgoing socket events
const iceBreakerOnClick = () => {
    playJingle();
    socket.emit('iceBreaker')
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

    setTimeout(function () {

        // put text in group chat
        // play speech file


        // const audio = new Audio(`audio/${randomPersonObject.speechFile}.mp3`);
        // audio.play();

    }, 1000);
});

socket.on('timerStart', timerStartObject => {
    playJingle();

    setTimeout(function () {

        playAudio("Start timer.m4a");

    }, 1000);
});

socket.on('timerUpdate', timerUpdateObject => {
    console.log(timerUpdateObject.time)
    const timer = document.getElementById('timer');
    const timerText = document.createElement("span");
    timer.innerText = "Timer: " + timerUpdateObject.time;
    timer.appendChild(timerText);

});

socket.on('timerDone', timerDoneObject => {
    playJingle();

    setTimeout(function () {

        playAudio("End timer.m4a");

    }, 1000);
});


socket.on('passTheMic', passTheMicObject => {
    setTimeout(function () {

        // bubble
        const bubble = document.getElementById('speechBubble');
        bubble.innerText = "I have passed the mic";

        playAudio("Pass the mic.m4a");

    }, 1000);
});

socket.on('backToWork', backToWorkObject => {
    setTimeout(function () {

        // bubble
        const bubble = document.getElementById('speechBubble');
        bubble.innerText = "I have asked the group to go back to work";

        playAudio("Back to work.m4a");

    }, 1000);
});

socket.on('awkwardSilence', awkwardSilenceObject => {
    setTimeout(function () {

        // bubble
        const bubble = document.getElementById('speechBubble');
        bubble.innerText = "I have asked the group to repeat what has been said";

        playAudio("Awkward silence.m4a");

    }, 1000);
});

socket.on('iAmLost', iAmLostObject => {
    setTimeout(function () {

        // bubble
        const bubble = document.getElementById('speechBubble');
        bubble.innerText = "I have asked the group to repeat what has been said";

        playAudio("I am lost.m4a");

    }, 1000);
});

socket.on('breakVote', breakVoteObject => {
    // when someone pressed the vote button
    const breakModal = document.getElementById("breakModal");
    console.log("show modal request")
    breakModal.classList.add('show');
    breakModal.style.display = "block";
    breakModal.style.backgroundColor = "rgba(0, 0, 0, 0.7)";

});

socket.on('breakDecision', breakDecisionObject => {
    // when the vote has been decided

    playAudio("Break - failure.m4a");

    // playAudio("Break - success.m4a");
});

socket.on('compliment', complimentObject => {

});

socket.on('askOpinion', askOpinionObject => {
});

socket.on('showMeme', showMemeObject => {
    setTimeout(function () {
        showNotification();

        // bubble
        const bubble = document.getElementById('speechBubble');
        bubble.innerText = "I have sent a meme to the group chat";

        // group
        const groupChat = document.getElementById("group-container");
        const memeImg = document.createElement("img");
        const br = document.createElement("br");
        memeImg.src = showMemeObject.groupChatText;
        memeImg.classList.add("memeImg");
        groupChat.appendChild(memeImg);
        groupChat.appendChild(br);

        playAudio("Meme.m4a");

    }, 1000);
});

socket.on('iceBreaker', iceBreakerObject => {
    setTimeout(function () {

        // bubble
        const bubble = document.getElementById('speechBubble');
        bubble.innerText = "I have proposed an ice breaker activity";

        playAudio("Icebreaker.m4a");

    }, 1000);
});

// joke object = {groupChatText, speechFile}
socket.on('joke', jokeObject => {
    setTimeout(function () {
        showNotification();

        // bubble
        const bubble = document.getElementById('speechBubble');
        bubble.innerText = "I sent a joke in the group chat";

        // group
        const groupChat = document.getElementById("group-container");
        const paragraphElement = document.createElement("span");
        const br = document.createElement("br");
        paragraphElement.innerText = jokeObject.groupChatText;
        groupChat.appendChild(paragraphElement);
        groupChat.appendChild(br);

        playAudio(jokeObject.voiceFile);

    }, 1000);
});

const playJingle = () => {
    const audio = new Audio('audio/jingle.wav');
    audio.play();
}


function playAudio(name) {
    const audio = new Audio("audio/" + name);
    audio.play();
}

const showNotification = () => {
    // show notification
    const groupTab = document.getElementById("group");
    if (groupTab.classList.contains("hide")) {
        console.log("here")
        const notification = document.getElementById("msg");
        notification.classList.remove("hide");
    }
}



