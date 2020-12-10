const socket = io();

// Outgoing socket events
const jokeOnClick = () => {
    socket.emit('joke')
};

// Outgoing socket events
const memeOnClick = () => {
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
const randomOnClick = () => {
    playJingle();
    socket.emit('randomPerson')
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


const complimentClick = name => {
    socket.emit('compliment', {
        name: name
    })
}

socket.on('randomPerson', randomPersonObject => {
    changeEyecolor();
    playJingle();

    setTimeout(function () {
        showNotification();

        // bubble
        const bubble = document.getElementById('speechBubble');
        bubble.innerText = "I have randomly selected someone";

        sendTextToGroup(randomPersonObject.groupChatText);

        playAudio(randomPersonObject.voiceFile);

    }, 1000);
});

socket.on('timerStart', timerStartObject => {
    changeEyecolor();
    playJingle();

    setTimeout(function () {

        playAudio("Start timer.m4a");

    }, 1000);
});

socket.on('timerUpdate', timerUpdateObject => {
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

socket.on('passTheMic', iAmLostObject => {
    changeEyecolor();
    playJingle();

    setTimeout(function () {

        // bubble
        const bubble = document.getElementById('speechBubble');
        bubble.innerText = "I have passed the mic";

        sendTextToGroup("Hey! Let's pass the mic to someone else!")

        playAudio("Pass the mic.m4a");

    }, 1000);
});

socket.on('backToWork', backToWorkObject => {
    changeEyecolor();
    playJingle();

    setTimeout(function () {

        // bubble
        const bubble = document.getElementById('speechBubble');
        bubble.innerText = "I have asked the group to go back to work";

        sendTextToGroup("Alright everyone! Enough of this dilly-dallying... Let's get back to work!")

        playAudio("Back to work.m4a");

    }, 1000);
});

socket.on('awkwardSilence', awkwardSilenceObject => {
    changeEyecolor();
    playJingle();

    setTimeout(function () {

        // bubble
        const bubble = document.getElementById('speechBubble');
        bubble.innerText = "I have asked the group to repeat what has been said";

        playAudio("Awkward silence.m4a");

    }, 1000);
});

socket.on('iAmLost', iAmLostObject => {
    changeEyecolor();
    setTimeout(function () {

        // bubble
        const bubble = document.getElementById('speechBubble');
        bubble.innerText = "I have asked the group to repeat what has been said";

        playAudio("I am lost.m4a");

    }, 1000);
});

socket.on('breakVote', breakVoteObject => {
    playJingle();
    // when someone pressed the vote button
    const breakModal = document.getElementById("breakModal");
    breakModal.classList.add('show');
    breakModal.style.display = "block";
    breakModal.style.backgroundColor = "rgba(0, 0, 0, 0.7)";

});

socket.on('breakDecision', breakDecisionObject => {
    playJingle();
    // when the vote has been decided

    playAudio("Break - failure.m4a");

    // playAudio("Break - success.m4a");
});

socket.on('compliment', complimentObject => {
    changeEyecolor();
    playJingle();

    setTimeout( () => {
        const audio = new Audio(`audio/${complimentObject.voiceFile}.m4a`);
        console.log(`audio/${complimentObject.voiceFile}.m4a`);
        audio.play();
    }, 1000);

    sendTextToGroup(complimentObject.groupChatText);

    showNotification();
});


socket.on('askOpinion', askOpinionObject => {

});

socket.on('showMeme', showMemeObject => {
    changeEyecolor();
    playJingle();

    setTimeout(function () {
        showNotification();

        // bubble
        const bubble = document.getElementById('speechBubble');
        bubble.innerText = "I have sent a meme to the group chat";

        sendMemeToGroup(showMemeObject.groupChatText);

        playAudio("Meme.m4a");

    }, 1000);
});

socket.on('iceBreaker', iceBreakerObject => {
    changeEyecolor();
    playJingle();

    setTimeout(function () {

        // bubble
        const bubble = document.getElementById('speechBubble');
        bubble.innerText = "I have proposed an ice breaker activity";

        playAudio("Icebreaker.m4a");

    }, 1000);
});

// joke object = {groupChatText, speechFile}
socket.on('joke', jokeObject => {
    changeEyecolor();
    playJingle();

    setTimeout(function () {
        showNotification();

        // bubble
        const bubble = document.getElementById('speechBubble');
        bubble.innerText = "I sent a joke in the group chat";

        sendTextToGroup(jokeObject.groupChatText);

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

function sendMemeToGroup(meme) {

    const groupChat = document.getElementById("group-container");
    const memeImg = document.createElement("img");
    const br = document.createElement("br");
    memeImg.src = meme;
    memeImg.classList.add("memeImg");
    groupChat.appendChild(memeImg);
    groupChat.appendChild(br);
}

function sendTextToGroup(text) {
    const groupChat = document.getElementById("group-container");
    const paragraphElement = document.createElement("span");
    const br = document.createElement("br");
    const br2 = document.createElement("br");
    const bot = document.createElement("span");
    bot.innerHTML = "From Bot";
    paragraphElement.innerText = text;
    groupChat.appendChild(bot);
    groupChat.appendChild(br);
    groupChat.appendChild(paragraphElement);
    groupChat.appendChild(br2);
}

const showNotification = () => {
    // show notification
    const groupTab = document.getElementById("group");
    if (groupTab.classList.contains("hide")) {
        const notification = document.getElementById("msg");
        notification.classList.remove("hide");
    }
}

const changeName = () => {
    const newName = document.getElementById("nameInput").value;
    socket.emit("nameChange", newName);
}

/**
 * Used to automatically genereate names of connected people
 */
const generateNames = async () => {
    const nameList = document.getElementById("dynamicNameList")
    nameList.innerHTML = ''; // empty

    const response = await fetch('/users');
    const users = await response.json(); //extract JSON from the http response

    for (const user of users) {
        const newButton = document.createElement('button');
        newButton.type = "button"
        newButton.className = "btn btn-primary btn-block"
        newButton.innerText = user.name  === "" ? "<no name>" : user.name;
        newButton.onclick = () => {
            if(user.name !== "") {
               complimentClick(user.name);
            }
        };
        nameList.append(newButton);
    }
}

function changeEyecolor() {
    var eyecolor = document.getElementById("eyecolor");
    eyecolor.classList.toggle("eyecolor");

    setTimeout(function () {
        eyecolor.classList.toggle("eyecolor");
    }, 500);
}


