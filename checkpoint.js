//Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida com seus respectivos tempos pré-definidos.
//- maior que 2x o necessário, exibir mensagem que a comida queimou.

//- Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente";

//- Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";

//- Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;

//- No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".
//1 - Pipoca – 10 segundos (padrão);
//2 - Macarrão – 8 segundos (padrão);
//3 - Carne – 15 segundos (padrão);
//4 - Feijão – 12 segundos (padrão);
//5 - Brigadeiro – 8 segundos (padrão);
//Pipoca

function microondas(comida,tempo) {
  switch (comida) {
    case 1:
      if  (tempo == 10) {
        console.log('Prato Pronto')
      } else if ((tempo > 10) & (tempo < 30)) {
        console.log('O Prato Queimou')
      } else if (tempo >= 30) {
        console.log('Kabuum')
      } else {
        console.log("Tempo Insuficiente")
      }
      break;
    

    case 2:
    
      if  (tempo == 8) {
        console.log('Prato Pronto')
      } else if ((tempo >= 16) & (tempo < 24)) {
        console.log('O Prato Queimou')
      } else if (tempo >= 24) {
        console.log('Kabuum')
      } else {
        console.log("Tempo Insuficiente")
      }    break;

       case 3:
    
        if  (tempo == 15) {
          console.log('Prato Pronto')
        } else if ((tempo >= 30) & (tempo < 45)) {
          console.log('O Prato Queimou')
        } else if (tempo >= 45) {
          console.log('Kabuum')
        } else {
          console.log("Tempo Insuficiente")
        }    break;



        case 4:
    
        if  (tempo == 12) {
          console.log('Prato Pronto')
        } else if ((tempo >= 24) & (tempo < 36)) {
          console.log('O Prato Queimou')
        } else if (tempo >= 36) {
          console.log('Kabuum')
        } else {
          console.log("Tempo Insuficiente")
        }    break;



        case 5:
    
        if  (tempo == 8) {
          console.log('Prato Pronto')
        } else if ((tempo >= 16) & (tempo < 24)) {
          console.log('O Prato Queimou')
        } else if (tempo >= 24) {
          console.log('Kabuum')
        } else {
          console.log("Tempo Insuficiente")
        }    break;
         
         default: console.log("Prato Inexistente")
         break;
        }
}





microondas(1,10)
microondas(1,20)
microondas(1,30)

//Macarão
microondas(2,24)
microondas(2,16)
microondas(2,8)

//Carne
microondas(3,15)
microondas(3,30)
microondas(3,45)

//Feijão
microondas(4,36)
microondas(4,24)
microondas(4,12)

//Brigadeiro
microondas(5,8)
microondas(5,16)
microondas(5,24)


//Prato Inexixtente
microondas(6,20)
microondas(0,2)





