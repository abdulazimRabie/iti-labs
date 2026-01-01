if (localStorage.getItem("email")) {
    console.log(localStorage.getItem("email"));
    document.querySelector(".name").innerHTML = localStorage.getItem("email");
}