/*
Dada uma nota entre 0 e 10, criar codigos condicionais que devolvem o conceito
que o aluno recebeu de acordo com a nota.

A - entre 9 e 10
B - entre 7 e 8.9
C - entre 5 e 6,9
D - entre 4,5 e 4,9
F - abaixo de 4,5

*/
const conceitoA = 'Conceito A!\nAprovado! :D\nVocê entra na segunda fase com 20 pontos!';
const conceitoB = 'Conceito B!\nAprovado! :D\nVocê entra na segunda fase com 15 pontos!';
const conceitoC = 'Conceito C!\nAprovado! :D\nVocê entra na segunda fase com 10 pontos!';
const conceitoD = 'Conceito D!\nAprovado! :D\nVocê entra na segunda fase com 5 pontos!';
const conceitoF = 'Conceito F.\nReprovado. :(\nInfelizmente você não foi classificado!';
const nota = 4;

if (nota >= 9 && nota <= 10) {
  console.log(conceitoA);
} else if (nota >= 7 && nota < 9) {
  console.log(conceitoB);
} else if (nota >= 5 && nota < 7) {
  console.log(conceitoC);
} else if (nota >= 4.5 && nota < 5) {
  console.log(conceitoD);
} else if (nota < 4.5) {
  console.log(conceitoF);
} else {
  console.log('Nota inválida, ligue para (99)9999-9999');
}
