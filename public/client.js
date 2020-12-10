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
    const timer = document.getElementById('timer');
    const timerText = document.createElement("span");
    timer.innerText = "Timer: "+ timerUpdateObject.time;
    timer.appendChild(timerText);

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
    // bubble
    const bubble = document.getElementById('speechBubble');
    bubble.innerText = "I have sent a meme to the group chat";

    setTimeout( () => {
        const audio = new Audio(`audio/Meme.m4a`);
        audio.play();
    }, 1000);

    // group
    const groupChat = document.getElementById("group-container");
    const memeImg = document.createElement("img");
    const br = document.createElement("br");
    memeImg.src = showMemeObject.groupChatText;
    memeImg.classList.add("memeImg");
    groupChat.appendChild(memeImg);
    groupChat.appendChild(br);

    showNotification();

});

socket.on('iceBreaker', iceBreakerObject => {
    // bubble
    const bubble = document.getElementById('speechBubble');
    bubble.innerText = "I have proposed an ice breaker activity";

});

// joke object = {groupChatText, speechFile}
socket.on('joke', jokeObject => {
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

    showNotification();
});

const playJingle = () => {
    const audio = new Audio('audio/jingle.wav');
    audio.play();
}

const showNotification = () => {
    // show notification
    const groupTab = document.getElementById("group");
    if(groupTab.classList.contains("hide")){
        console.log("here")
        const notification = document.getElementById("msg");
        notification.classList.remove("hide");
    }
}



