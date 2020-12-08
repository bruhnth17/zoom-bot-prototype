var socket = io();

// Incoming socket events
socket.on('joke', response => {
    const list = document.getElementById('list');
    const jokeElement = document.createElement("p");
    const newListItem = document.createElement("li");
    jokeElement.innerText = response.text;
    newListItem.appendChild(jokeElement);
    console.log(newListItem);
    list.appendChild(newListItem);
});



// Outgoing socket events
const jokeOnClick = () => {
    // This will emit the event to all connected sockets
    socket.emit('joke');
}
