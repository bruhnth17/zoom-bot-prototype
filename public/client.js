var socket = io();

// Incoming socket events
socket.on('joke', e => {
    const list = document.getElementById('list');
    const jokeElement = document.createElement("p");
    const newListItem = document.createElement("li");
    jokeElement.innerText = e.text;
    newListItem.appendChild(jokeElement);
    console.log(newListItem);
    list.appendChild(newListItem);
});



// Outgoing socket events
const jokeOnClick = () => {
    // This will emit the event to all connected sockets
    socket.emit('joke', { text: "My mexican uncle is taking anti anxiety pills. It's for hispanic attacks" });
}
