// File for static data
const getRandomEntry = array => array[Math.floor(Math.random() * array.length)];


const JOKES = [{
    chatText: "My mexican uncle is taking anti anxiety pills. It's for hispanic attacks",
    voiceFile: undefined
}];
const MEMES = [];
const ICEBREAKERS = [];
// ...


const _getJoke = () => getRandomEntry(JOKES);


module.exports = {
    getJoke: _getJoke
};
