let grades = [ 60, 100, 10, 15, 85];

function compare(a, b) {
    return a < b;
}

grades.sort(compare);

console.log(grades);

function callbackFunc(item) {
    return item <= 100
}

function callbackFuncFilter(item) {
    return item < 60;
}

console.log(grades.find(callbackFunc))
console.log(grades.filter(callbackFuncFilter))
