function* showTip() {
    let tips = ["tip 1 ya user", "tip 2 ya user", "tip 3 ya user"];
    for (let tip of tips) {
        yield tip;
    }
}

let generator = showTip();
console.log(generator)

document.querySelector(".next-tip").onclick = function() {
    let val = generator.next();
    if (val.value != undefined) console.log(val.value);
    else console.log("No more tips");
}

document.querySelector(".next-timer-tip").onclick = () => {
    setInterval(() => {
        let val = generator.next();
        if (val.value != undefined) {
            console.log(val.value)
        } else {
            console.log("No more tips")
        }
    }, 3000)
}