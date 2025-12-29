function statusOfFaculty(faculty) {
    switch (faculty) {
        case "FCI":
            return "You’re eligible to Programing tracks";
        case "Engineering":
            return "You’re eligible to Network and Embedded tracks";
        case "Commerce":
            return "“You’re eligible to ERP and Social media tracks";
        default:
            return "You are not eligible at al";
    }
}


// console.log(statusOfFaculty("Computers")); // default result
console.log(statusOfFaculty("FCI"))

// Switch case here matches the best use
// Because We're comparing value with specific values (fci, engineering, commerce)
