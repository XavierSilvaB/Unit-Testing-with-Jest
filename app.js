let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}
const fromEuroToDollar = function(valueInEuro){
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    return valueInDollar;
}
const fromDollarToYen = function(valueInDollar){
return (valueInDollar / 1.29) * oneEuroIs.JPY;
}
console.log(fromDollarToYen(15));
const sum = (a,b) => {
    return a + b
}
const fromYenToPound = function(valueInYen){
    return (valueInYen / 127.9) * oneEuroIs.GBP;
}
console.log(sum(7,3))
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };