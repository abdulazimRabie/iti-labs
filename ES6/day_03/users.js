let show_element = document.querySelector(".show-user");
let select_element = document.querySelector("#users");
let user_display = document.querySelector(".user-data");

show_element.setAttribute("disabled", "true");

async function getUsers() {
    let response = await fetch("https://dummyjson.com/users");
    let data = await response.json();
    let users = data.users;

    show_element.removeAttribute("disabled");

    for (let user of users) {
        // console.log(user);
        let option_html = `<option value="${user.id}">${user.firstName}</option>`;
        select_element.innerHTML += option_html;
    }
}

show_element.onclick = async function() {
    let user_id = select_element.value;
    let user_data = await getUser(user_id);

    let html = `
        <img src="${user_data.image}"/>
        <p>${user_data.firstName} ${user_data.lastName}</p>
        <p>${user_data.email}</p>
    `
    user_display.innerHTML = html;

}

async function getUser(user_id) {
    let response = await fetch(`https://dummyjson.com/users/${user_id}`);
    let user_data = await response.json();

    return user_data;
}

getUsers();

// getUser(1);