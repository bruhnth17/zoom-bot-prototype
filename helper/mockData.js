// File for static data


const getRandomItemFromArray = array => array[Math.floor(Math.random() * array.length)]


const JOKES = [
    "My mexican uncle is taking anti anxiety pills. It's for hispanic attacks"
]

const _getJoke = () => getRandomItemFromArray(JOKES)


module.exports = {
    getJoke: _getJoke
}
