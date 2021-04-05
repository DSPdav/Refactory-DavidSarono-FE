const groupsBy = ['even', 'odd', 'numbers multiplies by 5', 'prime numbers', 'prime numbers less than 100']


function createGroupBy(start = 0, end = 10, groups) {

    function isPrime(num) {
        for(let i = 2; i < num; i++) {
            if(num % i === 0) return false;
        }
        return num > 1;
    }

    return groups.map(group => {
        let nums = [];
        for (let i = start; i <= end; i++) {
            switch (group) {
                case 'even':
                    if (i % 2 === 0) nums.push(i);
                    continue;
                
                case 'odd':
                    if (i % 2 === 1) nums.push(i);
                    continue;

                case 'numbers multiplies by 5':
                    if (i !== 0 && i % 5 === 0) nums.push(i);
                    continue;

                case 'prime numbers':
                    if (isPrime(i)) nums.push(i);
                    continue;
                
                case 'prime numbers less than 100':
                    if (i < 100 && isPrime(i)) nums.push(i);
                    continue;
            
                default:
                    continue;
            }
        }

        return {
            [group]: nums
        };
    });
}

console.log( createGroupBy(0, 150, groupsBy) )