const numbers = [9, 4, 2, 4, 1, 5, 3, 0];

function sort_odd(arr) {
    // 1. take only odd number, and sort it ascending
    const odd = arr.filter(x => x % 2).sort((a,b) => a - b);

    // 2. return new sorted array
    return arr.map(x => x % 2 ? odd.shift() : x);
}

console.log( sort_odd(numbers) );