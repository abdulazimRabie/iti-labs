var name, birthDate;

do {
    name = prompt("Your Name : ");
} while(!isNaN(parseInt(name)))

do {
    birthDate = parseInt(prompt("Your age : "));
} while(birthDate > 2010)

// normal name : abscfds
// start with nums : 312fdass , parseInt() can figure it
// end with nums : dfasn123 , parseInt() cannot figure it at all

age = 2025 - birthDate;

document.write("Name : ", name, "<br>");
document.write("Age : ", age, "<br>");
document.write("BirthDate : ", age, "<br>");