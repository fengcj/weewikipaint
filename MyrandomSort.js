// rand sort
const randomSort1 = (array) => {

    const length = array.length;
    for (let i = 0; i < length; i++) {
        let randIndex = parseInt(Math.random() * length);
        let temp = array[randIndex];
        array[randIndex] = array[i];
        array[i] = temp;
    }
    return array;
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(randomSort1(array));
console.log(randomSort1(array));


console.log(parseInt(5.92));


const randomSort2 = (array) => {

    let res = [];

    while (array.length > 0) {
        let randIndex = parseInt(Math.random() * array.length);
        res.push(array[randIndex]);
        array.splice(randIndex, 1);
    }
    return res;
}

console.log(randomSort2(array));




array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const randomSort3 = (array) => {
    const compare = () => Math.random() - 0.5
    array.sort(compare);
    return array;
}
console.log(randomSort3(array));