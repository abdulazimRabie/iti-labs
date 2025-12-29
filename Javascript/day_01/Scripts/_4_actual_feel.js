function evalTempActualFeel(temp, actualFeel) {
    if (temp >= 25 && temp <= 30 && actualFeel >= 25 && actualFeel <= 30) {
        return "Normal";
    } else if (temp < 25 && actualFeel < 25) {
        return "Cold";
    } else if (temp > 30 && actualFeel > 30) {
        return "Hot";
    } else {
        return "Ambigious";
    }
}

console.log("Temp + Actual Feel : ", evalTempActualFeel(27))

// We cannot use tenray operation
// Because it is more than one condition
// We need to provide three answerts based on options in specific ranges


// We cannot use switch cases
// Becauase we don't compare the input values (temp, actualFeel)
// With specific value (===)