const fs = require('fs');
const path = require('path');


// 1. read csv file
const data = fs.readFileSync(path.join(__dirname, '01.csv'), { encoding: 'utf8' });

function transformCSV(content) {
    // 2. csv content to array
    const arr = content.split(/[\n\r]+/ig);

    /**
     * JavaScript Code Snippet
     * Convert Number to Rupiah & vice versa
     * https://gist.github.com/845309
     *
     * Copyright 2011-2012, Faisalman
     * Licensed under The MIT License
     * http://www.opensource.org/licenses/mit-license  
     *
     */
    function convertToRupiah(angka) {
        let rupiah = '';
        const angkarev = angka.toString().split('').reverse().join('');
        for (let i = 0; i < angkarev.length; i++) if (i % 3 == 0) rupiah += angkarev.substr(i, 3) + '.';
        return 'Rp' + rupiah.split('', rupiah.length - 1).reverse().join('');
    }

    // 3. sort by price and transform currency format
    const keys = arr.shift().split(', ').map(str => str.toLowerCase()); // [ 'name', 'category', 'price' ]
    const transformedArr = arr.map(item => {
        const values = item.split(', ');
        return keys.reduce((obj, key, i) => ({ ...obj, [key]: values[i] }), {});
    }).sort((a, b) => b.price - a.price) //descending order
        .map(item => ({ ...item, price: convertToRupiah(parseInt(item.price)) }));

    return transformedArr;
}

// 4. save as json
const dataJSON = JSON.stringify(transformCSV(data))
fs.writeFileSync('01.json', dataJSON);