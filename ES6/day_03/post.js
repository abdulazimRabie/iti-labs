let body = {
    title: "foo",
    body: "boddddy",
    userId: 1
}

async function addPost() {
    let response = await fetch('https://dummyjson.com/posts/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    })

    let data = await response.json();

    console.log(data);
}

addPost();