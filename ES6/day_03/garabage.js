let azim = { name: "a.azim" };
let table = new WeakMap();

// set it to null , before you set it as key in map !!!
table.set(azim, "a greate student");

console.log(table.has(azim));
console.log(table.get(azim));

azim = null;

// console.log(azim);
