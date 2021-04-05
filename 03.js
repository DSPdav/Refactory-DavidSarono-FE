const searchWords = [`aku`, `ingin`, `dapat`];

const sentence = `Aku ingin begini
Aku ingin begitu
Ingin ini itu banyak sekali

Semua semua semua
Dapat dikabulkan
Dapat dikabulkan
Dengan kantong ajaib

Aku ingin terbang bebas
Di angkasa
Hei… baling baling bambu

La... la... la...
Aku sayang sekali
Doraemon

La... la... la...
Aku sayang sekali`;

function countWord(sentence, words) {
    return words.map(str => ({[str]: sentence.match(new RegExp(`${str}`, 'gi')).length}))
}

console.log( countWord(sentence, searchWords) )