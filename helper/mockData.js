// File for static data
const getRandomEntry = array => array[Math.floor(Math.random() * array.length)];


const JOKES = [{
    groupChatText: "My mexican uncle is taking anti anxiety pills. It's for hispanic attacks",
    voiceFile: undefined
}];

const MEMES = [{
    groupChatText: "https://i.redd.it/2qyh9ydixf351.jpg",
    voiceFile: undefined
},{
    groupChatText: "https://i.redd.it/o2oiwwq4o7061.jpg",
    voiceFile: undefined
}

];
const ICEBREAKERS = [];
// ...


const _getJoke = () => getRandomEntry(JOKES);
const _getMeme = () => getRandomEntry(MEMES);


module.exports = {
    getJoke: _getJoke,
    getMeme: _getMeme
};
