const form = document.forms[0];

form.onsubmit = function(e) {
    e.preventDefault();
    let email = form.querySelector("input[type=email]").value;
    let password = form.querySelector("input[type=password]").value;
    let remember = form.querySelector("input[type=checkbox]").checked;

    if (remember) {
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
    }

    window.location.href = "http://127.0.0.1:5500/welcome_page.html"
}

function fillForm() {
    console.log("heloo lets fill the form")
    if (localStorage.getItem("email") && localStorage.getItem("password")) {
        document.querySelector("input[type=email]").value = localStorage.getItem("email");
        document.querySelector("input[type=password]").value = localStorage.getItem("password");
    }    
}

fillForm();