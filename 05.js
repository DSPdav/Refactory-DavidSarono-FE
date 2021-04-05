const text_1 = "Mammals";
const text_2 = "Bruiser build";

function countUnique(str) {
    str = str.replace(' ', '');
    const s = str.toLowerCase();

    return [...new Set(s)].reduce((obj, key, i) => {
        const len = s.match(new RegExp(key, 'g')).length;
        let star = '*';

        for (let i = 1; i < len; i++) {
            star += '*';
        }

        return { 
            ...obj, 
            [key]: star 
        };
    }, {});
}

console.log( countUnique(text_1) )
console.log( countUnique(text_2) )