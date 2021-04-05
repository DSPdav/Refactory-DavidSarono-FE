const text_1 = "Mammals";
const text_2 = "Bruiser build";

function countUnique(str) {
    const s = str.toLowerCase();
    const arrStr = s.match(/[a-z]/gi);
    // console.log(arrStr)

    return [...new Set(arrStr)].reduce((obj, key, i) => {
        const len = s.match(new RegExp(key, 'g')).length;

        return { 
            ...obj, 
            [key]: '*'.repeat(len) 
        };
    }, {});
}

console.log( countUnique(text_1) );
console.log( countUnique(text_2) );
console.log( countUnique("Search for a $10") );