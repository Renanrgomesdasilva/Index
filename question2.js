var readline = require("readline-sync")
var number1 = readline.questionInt("Digite sua primeira nota: ");
var number2 = readline.questionInt("Digite sua segunda nota: ");
var number3 = readline.questionInt("Digite sua terceira nota: ");

console.log(number1);
console.log(number2);
console.log(number3);

var media = ((number1 + number2 + number3) / 3)

console.log(" Sua média é: " + media);
