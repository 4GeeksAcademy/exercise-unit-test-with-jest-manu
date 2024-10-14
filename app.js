// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = parseFloat((valueInEuro * 1.07).toFixed(2));

    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar) {
    let valueInYen = parseFloat(((valueInDollar / 1.07) * 156.5).toFixed(2));

    return valueInYen;
} 

const fromYenToPound = function(valueInYen) {
    let valueInPound = parseFloat(((valueInYen / 156.5) * 0.87).toFixed(2));

    return valueInPound;
} 
// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

console.log(fromYenToPound(1))
// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};