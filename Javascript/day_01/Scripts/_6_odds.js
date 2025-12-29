function getOddsInRange(start, end) {
    // if (start < end) return "Invalid range, start must be smaller than end";
    if (Math.abs(start) < Math.abs(end)) return "Invalid range"

    var result = [];
    var count = 0;
    for(var i = start; i <= end; i++) {
        if (i%2 != 0) {
            result[count++] = i;
        }
    }

    return result;
}

// console.log(getOddsInRange(2, 0)) // invalid range, start >= end
// console.log(getOddsInRange(3, 3))
console.log(getOddsInRange(-10, 10))
