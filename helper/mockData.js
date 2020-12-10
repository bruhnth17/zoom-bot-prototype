// File for static data
const getRandomEntry = array => array[Math.floor(Math.random() * array.length)];

const RANDOMPERSON = [{
    groupChatText: "I have randomly chosen Adrian",
    voiceFile: "Random - Adrian.m4a"
}, {
    groupChatText: "I have randomly chosen Catarina",
    voiceFile: "Random - Catarina.m4a"
}, {
    groupChatText: "I have randomly chosen Golina",
    voiceFile: "Random - Golina.m4a"
}, {
    groupChatText: "I have randomly chosen Henrik",
    voiceFile: "Random - Henrik.m4a"
}, {
    groupChatText: "I have randomly chosen Miriam",
    voiceFile: "Random - Miriam.m4a"
}
];

const COMPLIMENT = [{
    groupChatText: "Adrian",
    voiceFile: "Compliment - Adrian.m4a"
}, {
    groupChatText: "Catarina",
    voiceFile: "Compliment - Catarina.m4a"
}, {
    groupChatText: "Golina",
    voiceFile: "Compliment - Golina.m4a"
}, {
    groupChatText: "Henrik",
    voiceFile: "Compliment - Henrik.m4a"
}, {
    groupChatText: "Miriam",
    voiceFile: "Compliment - Miriam.m4a"
}
];

const JOKES = [{
    groupChatText: "text",
    voiceFile: "Joke 1.m4a"
}, {
    groupChatText: "text",
    voiceFile: "Joke 2.m4a"
}, {
    groupChatText: "text",
    voiceFile: "Joke 3.m4a"
}, {
    groupChatText: "text",
    voiceFile: "Joke 4.m4a"
}, {
    groupChatText: "text",
    voiceFile: "Joke 5.m4a"
}, {
    groupChatText: "text",
    voiceFile: "Joke 6.m4a"
}, {
    groupChatText: "text",
    voiceFile: "Joke 7.m4a"
}, {
    groupChatText: "text",
    voiceFile: "Joke 8.m4a"
}, {
    groupChatText: "text",
    voiceFile: "Joke 9.m4a"
}, {
    groupChatText: "text",
    voiceFile: "Joke 10.m4a"
}

];

const MEMES = [{
    groupChatText: "https://i.redd.it/2qyh9ydixf351.jpg"
}, {
    groupChatText: "https://i.redd.it/o2oiwwq4o7061.jpg"
}

];
const ICEBREAKERS = [{
    groupChatText: "ice breaker 1",
    voiceFile: undefined
}];


const _getJoke = () => getRandomEntry(JOKES);
const _getMeme = () => getRandomEntry(MEMES);
const _getIceBreaker = () => getRandomEntry(ICEBREAKERS);
const _getRandomPerson = () => getRandomEntry(RANDOMPERSON);


module.exports = {
    getJoke: _getJoke,
    getMeme: _getMeme,
    getIceBreaker: _getIceBreaker,
    getRandomPerson: _getRandomPerson
};
