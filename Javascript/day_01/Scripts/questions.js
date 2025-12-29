/*
// Q1.

"use strict" // makes it more logical and avoid the weird behavior of JS
function foo() {
    var x;
    x = 5;
    y = 6; return x + y;
}

console.log(foo());
*/

/*
// Q2.

"use strict" 
// wont differ in this example, 
// since you declared x and y, 
// no matter where because `var` hoist everything at top of the script
// 
var y;
y=10;
x = 5;
console.log(x);
console.log(y);
var x;
*/

/*
Q4.

function test() {
    for (let i = 0; i < 10; i++) {
        alert(i); // prints 0 , it is normal
        alert (x); // pop error, he cannot access x before declaration
        let x=10;
    }
    console.log(i); // reference error , i is not declared
}

test()

*/
// Switching to `var` instead of `let`

function test() {
    for(var i = 0; i < 10; i++) {
        alert(i); // alert with 0,1,2,..,9
        alert(x); // alert with 10 -> 10 times
        var x = 10;
    }
    console.log(i); // log 10
}

test();


