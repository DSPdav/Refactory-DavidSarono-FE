const list_letters_first = ["c","d","e","g","h"];
const list_letters_second = ["X","Z"];

function findChar(arr) {
    // Sequence generator function
    const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));

    // 1. generate complete letters
    const completeArr = range(arr[0].charCodeAt(0), arr[arr.length-1].charCodeAt(0), 1).map(x => String.fromCharCode(x));

    // 2. return missing letter
    return completeArr.filter(ele => !arr.includes(ele))[0];
}

console.log(`list_letters_first = ${findChar(list_letters_first)}`)
console.log(`list_letters_second = ${findChar(list_letters_second)}`)