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

const OPINIONS = [
    {
        name: "Golina",
        voiceFile: "Opinion%20-%20Golina",
        groupChatText: "Hey Golina, what do you think?"
    },
    {
        name: "Adrian",
        voiceFile: "Opinion%20-%20Adrian",
        groupChatText: "Hey Adrian, what do you think?"
    },
    {
        name: "Henrik",
        voiceFile: "Opinion%20-%20Henrik",
        groupChatText: "Hey Henrik, what do you think?"
    },
    {
        name: "Catarina",
        voiceFile: "Opinion%20-%20Catarina",
        groupChatText: "Hey Catarina, what do you think?"
    },
    {
        name: "Miriam",
        voiceFile: "Opinion%20-%20Miriam",
        groupChatText: "Hey Miriam, what do you think?"
    },
]

const JOKES = [{
    groupChatText: "Here's a wee joke for you, guys. I told my girlfriend she drew her eyebrows too high. She seemed surprised.",
    voiceFile: "Joke 1.m4a"
}, {
    groupChatText: "Here's a joke for you, guys. My dog used to chase people on a bike a lot. It got so bad, finally I had to take his bike away.",
    voiceFile: "Joke 2.m4a"
}, {
    groupChatText: "Here's a joke for you, guys. I'm so good at sleeping... I can do it with my eyes closed",
    voiceFile: "Joke 3.m4a"
}, {
    groupChatText: "Here's a joke for you, guys. My boss told me to have a good day... so I went home.",
    voiceFile: "Joke 4.m4a"
}, {
    groupChatText: "Here's a joke for you, guys. Why do blind people hate skydiving? It scares the hell out of their dogs.",
    voiceFile: "Joke 5.m4a"
}, {
    groupChatText: "Here's a joke for you, guys. What do you call a guy with a rubber toe. Roberto.",
    voiceFile: "Joke 6.m4a"
}, {
    groupChatText: "Here's a joke for you, guys. When you look really closely, all mirrors look like eyeballs.",
    voiceFile: "Joke 7.m4a"
}, {
    groupChatText: "Here's a joke for you, guys. A blind man walks into a bar. And a table. And a chair.",
    voiceFile: "Joke 8.m4a"
}, {
    groupChatText: "Here's a joke for you, guys. Where do you find a cow with no legs? Right where you left it.",
    voiceFile: "Joke 9.m4a"
}, {
    groupChatText: "Here's a joke for you, guys. I think I would like a job cleaning mirrors. It's just something I could really see myself doing, you know?",
    voiceFile: "Joke 10.m4a"
}

];

const MEMES = [{
    groupChatText: "https://i.redd.it/2qyh9ydixf351.jpg"
}, {
    groupChatText: "https://i.redd.it/o2oiwwq4o7061.jpg"
}, {
    groupChatText: "https://i.redd.it/swtnvpd3r3z51.jpg"
}, {
    groupChatText: "https://i.redd.it/9epxlzevp3m41.jpg"
}, {
    groupChatText: "https://i.redd.it/d0c3d5ohhx161.jpg"
}, {
    groupChatText: "https://external-preview.redd.it/wVya2b2lXP9ZvUNC0XnQeK2cUR5lkWBCkCnFN3bnbkU.jpg?auto=webp&s=101f96e778afb44a50c2cf399d732dc8a255670c"
}, {
    groupChatText: "https://i.redd.it/na1jtt5nktw51.jpg"
}, {
    groupChatText: "https://i.redd.it/cfd8uqhlyko51.jpg"
}, {
    groupChatText: "https://i.redd.it/d0c3d5ohhx161.jpg"
}, {
    groupChatText: "https://sayingimages.com/wp-content/uploads/lets-divide-the-work-equally-group-memes.jpg"
}
];

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
const _getOpinion = name => {
    const found = OPINIONS.find(op => op.name.toLowerCase() == name.toLowerCase());
    return found ? found : {name: name, groupChatText: `What do you think ${name}?`}
}

module.exports = {
    getJoke: _getJoke,
    getMeme: _getMeme,
    getCompliment: _getCompliment,
    getIceBreaker: _getIceBreaker,
    getRandomPerson: _getRandomPerson,
    getOpinion: _getOpinion
};
