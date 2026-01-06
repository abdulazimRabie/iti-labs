let azim = {
    name: "abdelazim",
    uni: "Minia",
    faculty: "CS",
    final_grade: "C"
};

let yaya = {
    name: "Yaya",
    uni: "Minia",
    faculty: "CS",
    final_grade: "C"
}

let abdo = {
    name: "abdelazim",
    uni: "Minia",
    faculty: "CS",
    final_grade: "C"
}

let welcome = `${azim.name} is a student in faculty of ${azim.faculty} in university ${azim.uni}`;
console.log(welcome);

let uniqueNames = new Set([azim.name, yaya.name, abdo.name]);

console.log("Set : ", uniqueNames);
console.log("Set with ... : ", ...uniqueNames);

for (let i of uniqueNames) {
    console.log(i);
}