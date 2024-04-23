var readline= require("readline-sync")
var distance = readline.questionInt("Informe a distância em km: ");
var veloc = readline.questionInt("Informe a velocidade média em km/h:  ");
      console.log(distance)
      console.log(veloc)

     media = (distance/veloc);
     console.log("Tempo estimado é de " + media);
