let nota = 11;

switch (Math.ceil(nota)) {
  case 10:
    console.log("Aprovado com honras!!");
    break;
  case 9: case 8: case 7:
    console.log("Parabéns!");
    break;
  case 6: case 5:
    if (nota === 6) {
      console.log("Passou raspando!");
      break;
    }
    console.log("Recuperaçao!");
    break;
  case 4: case 3: case 2:
    console.log("Reprovado!");
    break;
  case 1: case 0:
    console.log("Muito reprovado!");
    break;
    
  default:
    console.log("Nota inválida");
}


