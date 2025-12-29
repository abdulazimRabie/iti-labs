function sum(num1, num2) {   
    return num1+num2;
}

document.getElementById("btn").onclick = function () {
    var n1, n2;
    do {
        n1 = prompt("First Num: ");
    } while(isNaN(n1))

    do {
        n2 = prompt("Second Num: ");
    } while(isNaN(n2));

    n1 = parseFloat(n1);
    n2 = parseFloat(n2);
    console.log("Sum of 2 Nums : ", sum(n1, n2))
}