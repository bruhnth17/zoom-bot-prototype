// File for static data
const getRandomEntry = array => array[Math.floor(Math.random() * array.length)];


const COMPLIMENTS = [
    {
        name: "Golina",
        voiceFile: "Compliment%20-%20Golina",
        groupChatText: "Look at Golina go, she's on fire! :fire:"
    },
    {
        name: "Adrian",
        voiceFile: "Compliment%20-%20Adrian",
        groupChatText: "Adrian, you are going above and beyond. Good stuff!"
    },
    {
        name: "Henrik",
        voiceFile: "Compliment%20-%20Henrik",
        groupChatText: "Hey hey, someone is thinking about you cause your doing great Henrik. You got this!"
    },
    {
        name: "Catarina",
        voiceFile: "Compliment%20-%20Catarina",
        groupChatText: "Absolutely fantastic work Catarina, keep it up!"
    },
    {
        name: "Miriam",
        voiceFile: "Compliment%20-%20Miriam",
        groupChatText: "Wow! Good stuff Miriam, keep it up :raised_hands:"
    },
]

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
}];

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
    groupChatText: "https://i.redd.it/2qyh9ydixf351.jpg",
    voiceFile: undefined
},{
    groupChatText: "https://i.redd.it/o2oiwwq4o7061.jpg",
    voiceFile: undefined
}];

const ICEBREAKERS = [{
    groupChatText: "ice breaker 1",
    voiceFile: undefined
}];


const _getJoke = () => getRandomEntry(JOKES);
const _getMeme = () => getRandomEntry(MEMES);
const _getCompliment = name => {
        const found = COMPLIMENTS.find(compliment => compliment.name.toLowerCase() == name.toLowerCase());
        return found ? found : {name: name, groupChatText: `You are doing and awesome job ${name}!`}
}
const _getIceBreaker = () => getRandomEntry(ICEBREAKERS);
const _getRandomPerson = () => getRandomEntry(RANDOMPERSON);


module.exports = {
    getJoke: _getJoke,
    getMeme: _getMeme,
    getCompliment: _getCompliment,
    getIceBreaker: _getIceBreaker,
    getRandomPerson: _getRandomPerson
};
