let students = [
    {name: "abdelazim", degree: 100},
    {name: "rabie", degree: 30},
    {name: "yaya", degree: 50},
    {name: "karim", degree: 90},
    {name: "ossama", degree: 10},
]
//a. student with degree in range
let stdName = students.find(function (std) {
    return std.degree >= 90 && std.degree <= 100;
}).name;

console.log(stdName);

//b. student with degree less than 60
let studentsLessThan60 = students.filter(function(std) {
    return std.degree < 60;
});
// console.log(studentsLessThan60)

let names = [];
for (let std of studentsLessThan60) {
    names.push(std.name)
}

console.log(names);

//c. push
console.log("==========")
students.push({name: "mannooor", degree: 200})
for (let student of students) {
    console.log(student);
}
console.log("==========")

//d. poop and console
students.pop();
for (let student of students) {
    console.log(student);
}
console.log("==========")

// e.
students.sort(function(std1, std2) {
    return std1.name > std2.name;
})

for (let student of students) {
    console.log(student.name);
}

console.log("==========")
// f. splice
students.splice(2, 0, {name: "a", degree: 1}, {name: "b", degree: 2})
console.log(students);

// g. splice and remove
students.splice(3, 1)
console.log(students)
