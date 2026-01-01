let std_1 =  {
    ID: 321,
    name: "abdelazim",
    age: 21,
    address: "on earth",
    skills: ["skill 1", "fdsa"],
    IsLeader: true,
    testing: null
}

let std_2 =  {
    ID: 321,
    name: 'omar',
    age: 21,
    address: 'on earth',
    skills: ["js", "pplala"],
    IsLeader: true
}

let std_3 =  {
    ID: 321,
    name: 'yaya',
    age: 21,
    address: 'on earth',
    skills: ['skill 1', 'fdsa'],
    IsLeader: true,
    testing: null
}

let students = [std_1, std_2, std_3]; 


for (let student of students) {
    console.log(student.name, student.skills)
}

console.log(students[0].IsLeader)
console.log(students[0].testing)

// Questions
/**
 * a. json can hold null values, and boolean values
 * b. XML -> not serialized, have namespaces, doesn't handle arrays, markup lang
 *      json -> serialized, handels array, readable, data format lang
**/