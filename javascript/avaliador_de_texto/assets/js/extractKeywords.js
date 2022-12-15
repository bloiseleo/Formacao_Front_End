function notAWord(word) {
    const notANoun = [
        "THE",
        "AND",
        "OR",
        "IN",
        "I",
        "AM",
        "SHE",
        "IT",
        "HE",
        "WITH",
        "YOUR",
        "YOU",
        "WAS",
        "BY",
        "TO",
        "FOR",
        "OF",
        "ARE",
        "A",
        "CAN",
        "ALSO",
        "MY"
    ]

    return notANoun.includes(word)
}

/**
 * 
 * @param {string} word 
 * @param {string[]} words 
 */
function howManyTimesItAppears(word, words) {
    return words.reduce((times, textWord) => {
        if(textWord === word) {
            return times + 1;
        } else {
            return times;
        }
    }, 0)
}

/**
 * 
 * @param {string} text 
 * @returns {string[]} Words
 */
function getWords(text) {
    return text.match(/([A-z]*\s*)/g).map(piece => piece.replace(/\s/g, "")).filter(piece => piece != "").map(piece => piece.toUpperCase())
    .filter(piece => !notAWord(piece))
}
/**
 * 
 * @param {string} text 
 * @returns {string[]} Keywords found.
 */
function extractKeywords(text) {
    
    const words = getWords(text)
    const wordsAndItsRepetitions = [];
    words.forEach(word => {
        let repititions = howManyTimesItAppears(word, words);
        wordsAndItsRepetitions.push({repititions, word})
    })

    let possibleKeywords = wordsAndItsRepetitions.sort((wordA, wordB) => {
        return wordB.repititions - wordA.repititions 
    });

    const keywords = {}
    
    possibleKeywords.map((keyword) => {
        keywords[keyword.word] = keyword.repititions
    })

    return Object.keys(keywords)
}