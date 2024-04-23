var readline= require("readline-sync")
var temp = readline.questionInt("Digite uma temperatura: ");
    console.log("A temperatura é " + temp +"°C");
 var f = temp * 1.8 + 32 
console.log("A temperatura em Farenheit é: " + f);