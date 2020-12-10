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
}];

const ICEBREAKERS = [];
// ...


const _getJoke = () => getRandomEntry(JOKES);
const _getMeme = () => getRandomEntry(MEMES);
const _getCompliment = name => {
        const found = COMPLIMENTS.find(compliment => compliment.name.toLowerCase() == name.toLowerCase());
        return found ? found : {name: name, groupChatText: `You are doing and awesome job ${name}!`}
}

module.exports = {
    getJoke: _getJoke,
    getMeme: _getMeme,
    getCompliment: _getCompliment
};
