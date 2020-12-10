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
    socket.emit('break')
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
    setTimeout(function () {
        showNotification();
        // bubble
        const bubble = document.getElementById('speechBubble');
        bubble.innerText = "I have randomly selected someone";

        // group
        const groupChat = document.getElementById("group-container");
        const paragraphElement = document.createElement("span");
        const br = document.createElement("br");
        paragraphElement.innerText = randomPersonObject.groupChatText;
        groupChat.appendChild(paragraphElement);
        groupChat.appendChild(br);

        playAudio(randomPersonObject.voiceFile);

    }, 1000);
});

socket.on('timerStart', timerStartObject => {
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
    playJingle();

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
    playJingle();
    // when someone pressed the vote button
    const breakModal = document.getElementById("breakModal");
    breakModal.classList.add('show');
    breakModal.style.display = "block";
    breakModal.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    setTimeout( () => {
        playAudio("Have a break .m4a")
    }, 1000);

});

socket.on('breakDecision', breakDecision => {
    playJingle();
    // when the vote has been decided
    setTimeout( () => {
        if(breakDecision) {
            playAudio("Break - success.m4a");
        } else {
            playAudio("Break - failure.m4a");
        }
    }, 1000);

});

socket.on('compliment', complimentObject => {
    playJingle();

    setTimeout( () => {
        const audio = new Audio(`audio/${complimentObject.voiceFile}.m4a`);
        console.log(`audio/${complimentObject.voiceFile}.m4a`);
        audio.play();
    }, 1000);

    // group
    const groupChat = document.getElementById("group-container");
    const text = document.createElement("p");
    const br = document.createElement("br");
    text.innerText = complimentObject.groupChatText;
    groupChat.appendChild(text);
    groupChat.appendChild(br);

    showNotification();
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
    playJingle();

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

const breakVote = vote => {
    console.log("vote", vote);
    socket.emit("vote", vote);
}

