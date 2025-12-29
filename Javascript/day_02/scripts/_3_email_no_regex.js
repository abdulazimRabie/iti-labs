document.querySelector(".userEmail").onclick = function () {
    let email = prompt("Enter Your Email Yaaaaaa User : ");
    console.log(validateUserEmail(email));
}

function validateUserEmail(email) {
    let i = email.indexOf("@");
    if (i === -1) return "Not valid email, Email must contain @"

    if (i == 0 || i == email.length -1) 
        return "What is that baby!! @ cannot be at first or at last of string"

    return "Perfect Email"
}

// let email = "abdo_rabie_with_no_@at"
// console.log(validateUserEmail(email))