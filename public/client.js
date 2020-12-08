const socket = io();

// Outgoing socket events
const jokeOnClick = () => socket.emit('joke');


// Handler for an incoming joke
// joke object = {chatText, speechFile}
socket.on('joke', jokeObject => {
    const list = document.getElementById('list');
    const newListItem = document.createElement("li");
    const paragraphElement = document.createElement("p");
    paragraphElement.innerText = jokeObject.chatText;
    newListItem.appendChild(paragraphElement);
    list.appendChild(newListItem);
});





