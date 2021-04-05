const censoredWords = ['dolor', 'elit', 'quis', 'nisi', 'fugiat', 'proident', 'laborum'];

const sentence = `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

function censorMe(sentence, cenWords) {
    // 1. create censored word
    const replaceWords = cenWords.map(ele => {
        let str = '*';
        for (let i = 1; i < ele.length; i++) str += '*';
        return str;
    });

    // 2. return censored sentence
    return sentence.split(' ').map(word => {
        for (let j = 0; j < cenWords.length; j++) {
            if (word.search(new RegExp(`^${censoredWords[j]},?\\.?$`, "ig")) !== -1) {
                word = word.replace(cenWords[j], replaceWords[j])
            }
        }
        return word;
    }).join(' ');
}

// test
console.log(sentence, "\n");
console.log( censorMe(sentence, censoredWords) );