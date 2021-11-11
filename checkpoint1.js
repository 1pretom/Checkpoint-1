
console.log("1 - Pipoca – 10 segundos (padrão)");
console.log("2 - Macarrão – 8 segundos (padrão)");
console.log("3 - Carne – 15 segundos (padrão)");
console.log("4 - Feijão – 12 segundos (padrão)");
console.log("5 - Brigadeiro – 8 segundos (padrão)\n");

let tempoPadrao = 0;

const opcaoMenu = parseInt(prompt("Opção do menu:"));
const tempoCliente = parseInt(prompt("Tempo do prato:"));

const checkOpcaoMenu = () => {
  switch (opcaoMenu) {
    case 1:
      tempoPadrao = 10;
      break;
    case 2:
      tempoPadrao = 8;
      break;
    case 3:
      tempoPadrao = 15;
      break;
    case 4:
      tempoPadrao = 12;
      break;
    case 5:
      tempoPadrao = 8;
      break;
    default:
      throw new Error("Prato Inexistente");
  }
}

const checkTempoPrato = () => {
  if (tempoCliente < tempoPadrao) {
    return "Tempo Insuficiente!"
  } else if (tempoCliente >= tempoPadrao && tempoCliente < (tempoPadrao * 2)) {
    return "Prato pronto, bom apetite!!"
  } else if (tempoCliente >= (tempoPadrao * 2) && tempoCliente < (tempoPadrao * 3)) {
    return "A Comida Queimou!"
  } else if (tempoCliente >= (tempoPadrao * 3)) {
    return "KABUUUUM!!!"
  }
}

try {
  checkOpcaoMenu();
  checkTempoPrato();
} catch (error) {
  console.log(error.message);
} 


/* Equipe 7

André Alves
Gabrielle Bianca Ferreira Rodrigues de Araujo
Rafael Dos Santos Reyes Júnior
Renato De Oliveira Fernandes
Sheila Sampaio Costa
Washington Luis Damacena Conceição */