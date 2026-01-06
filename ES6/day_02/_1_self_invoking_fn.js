function alertToSum() {
    alert("enter to number to sum");
    let a = parseInt(prompt("Enter a :"));
    let b = parseInt(prompt("Enter b :"));

    function sum(a, b) {
        return a+b;
    }

    console.log(sum(a,b));
}

// alertToSum();