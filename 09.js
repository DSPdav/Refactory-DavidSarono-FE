const arrayList = [3, 12, 4, 5, 8, 9];

const sortMethod = (items) => {
    // sort ascendingly - min to max
	return items.sort((a, b) => a - b);
}

console.log( sortMethod(arrayList) );