
let xhr = new XMLHttpRequest();
let targetUrl = "https://fakestoreapi.com/users/1";
xhr.open("GET", targetUrl);
xhr.onload = function() {
    if (xhr.status >= 200) {
        let data = JSON.parse(xhr.responseText);
        document.querySelector(".username").innerHTML = data.username;
        document.querySelector(".email").innerHTML = data.email;
        document.querySelector(".id").innerHTML = data.id;
    }
}
xhr.send()

// Select user with id
let btn_display = document.getElementById("display_user_by_id");

btn_display.onclick = function () {
    let input = document.getElementById("user_id");
    if (parseInt(input.value) <= -1) {
        document.querySelector(".wrapper_div").innerHTML = "Id cannot be zero"
        return;
    }
    getUserData(input.value, "wrapper_div"); // wrapper_div
}

function getUserData(id, div_to_show) {
    let xhr = new XMLHttpRequest();
    let targetUrl = `https://fakestoreapi.com/users/${id}`;
    let data;

    xhr.open("GET", targetUrl);
    xhr.onload = function() {
        if (xhr.status >= 200) {
            data = JSON.parse(xhr.responseText);
            dispalyUser(data, div_to_show);
        }
    }
    xhr.send()
    return data;
}

function dispalyUser(userData, div_to_show) {
    let html = `
   <div>
        <span>username : </span>
        <span>${userData.username}</span>
    
        <br>
    
        <span>Emial : </span>
        <span>${userData.email}</span>
    
        <br>
        <span>ID : </span>
        <span>${userData.id}</span>
    </div>
    `

    document.querySelector(`.${div_to_show}`).innerHTML = html;
}


// Dropdown list of users
function fill_dropdown() {
    let xhr = new XMLHttpRequest();
    let targetUrl = `https://fakestoreapi.com/users`;

    xhr.open("GET", targetUrl);
    xhr.onload = function() {
        if (xhr.status >= 200) {
            let data = JSON.parse(xhr.responseText);
            console.log(data);
            addOptions(data);   
        }
    }
    xhr.send()
}

function addOptions(data) {
    let select_element = document.getElementById("drop_students");
    for(let user of data) {
        let html = `<option value="${user.id}">${user.username}</option>`
        select_element.innerHTML += html;
    }
}

fill_dropdown();

let select_element = document.getElementById("drop_students");
select_element.onchange = function(e) {
    console.log(e.target.value);
    getUserData(parseInt(e.target.value), "wrapper_div_2")
}
