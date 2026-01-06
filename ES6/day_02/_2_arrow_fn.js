let arr = [11, 1, 2, 0, -2, 33, 4];

// filter to return odd
console.log("ODDS : ");
let odds = arr.filter((ele) => {
    if (ele % 2 !== 0) return ele
})

console.log(odds);

// foreach to print evens
console.log("Evens : ");
arr.forEach((ele) => {
    if (ele % 2 == 0) 
        console.log(ele)
})

// map to print square
console.log("DOUBLED : ");
let doubled = arr.map((ele) => {
    return ele*ele;
})

console.log(doubled);
console.log(doubled.length);

// demo : differentaite between this in arrow and this in literal function
console.log("====  Testing Arrow Function ====");
document.querySelector(".btn-no-arrow").onclick = function() {
    console.log(this);
}

document.querySelector(".btn-arrow").onclick = () => {
    console.log(this);
}