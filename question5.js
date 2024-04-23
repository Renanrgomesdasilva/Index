var readline = require("readline-sync")
var pinho = readline.questionInt("Informe seu peso: ");

  console.log("seu peso é " + pinho +"KG");

  var pinho2 = readline.question("Informe sua altura: ");

  console.log("Sua altura é: " + pinho2 +"M");

  imc = ( pinho / pinho2**2);

console.log("Sua indice de massa corporal é de: " + imc);