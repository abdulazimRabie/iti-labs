let arr1 = [1, 3, 2, 0],
    arr2 = [9, -12, 20, 99];

let wholeArr = [...arr1, ...arr2];

console.log(wholeArr);

function printArr(...arrItems) {
    for (let item of arrItems) {
        console.log(item);
    }
}

printArr(...arr1, ...arr2);


console.log(...[[1,1], [2,2], [3,3]])