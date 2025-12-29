function ensureFormat(input) {
    if (input.length != 10) 
        throw new Error("Your date is not 10 character, format dd-mm-yyyy");
    if (input[2] != '-' || input[5] != '-') 
        throw new Error("it misses `-`, format must be dd-mm-yyyy");
    return true;
}

function returnInputinDate(input) {
    let d = input.split('-');
    return new Date(d[2], d[1], d[0])
}

// console.log(returnInputinDate("01-10-2020"));

document.querySelector(".userDate").onclick = function () {
    let u_input = prompt("Enter Your Birth Date : ");
    try {
        if (ensureFormat(u_input)) {
            console.log(returnInputinDate(u_input))
        }
    } catch(e) {
        alert(e.message)
    }
}
