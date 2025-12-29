// /^[a-z]{3,} [a-z]{3,}$/i.test("abd rab")
// /^[a-z]+@[a-z]+\.[a-z]+\.eg$/i.test("name@domain.outlook.eg")

let nameRegex = new RegExp(/^[a-z]{3,} [a-z]{3,}$/i);
let emailRegex = new RegExp(/^[a-z]+@[a-z]+\.[a-z]+\.eg$/i);

let email_with_regex_btn = document.querySelector(".email_with_regex_btn");

email_with_regex_btn.onclick = function () {
    let userName, userEmail;
    do {
        userName = prompt("User Name : ");
    } while(!nameRegex.test(userName))

    do {
        userEmail = prompt("User Email Ya Ensan : ");
    } while(!emailRegex.test(userEmail));

    console.log("What a user !!!!!! Polite one");
    console.log("User Name : ", userName);
    console.log("User Email : ", userEmail)
}


