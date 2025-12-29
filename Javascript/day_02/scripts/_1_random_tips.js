let tips = ["tip 1", "tip 2", "tip 3", "tip 4", "tip 5", "tip 6", "tip 7", "tip 8", "tip 9", "tip 10"]
function todayTip() {
    let i = Math.floor(Math.random() * 10); // 0-9
    return tips[i];
}

console.log(todayTip())