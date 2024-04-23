var readline = require("readline-sync")
var total = readline.questionInt("Informe um valor: ")
var percent = readline.question("Informe um valor de desconto: ")

      console.log(total)
      console.log(percent) 

  function calcularPorcentagem ( total, percent){
       return (total * percent) / 100; 
  }
       const resultado = calcularPorcentagem (total, percent);
       console.log(`a porcentagem de ${percent}% de ${total} é ${resultado}.`);
  