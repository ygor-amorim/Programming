// Crie uma função que recebe um número (de 1 a 12) e retorne o mês
// correspondente como uma string. Por exemplo, se a entrada for 2, a
// função deverá retornar "fevereiro", pois este é o 2° mês.

//   Exemplos:
//   nomeDoMes(1) // retornará "janeiro"
//   nomeDoMes(4) // retornará "abril"

function monthName(num) {
  months = [
    'january', 'february', 'march', 'april',
    'may', 'june', 'july', 'august',
    'september', 'october', 'november', 'december',
  ];
  if (num > 12 || num < 1) {
    return 'Numero inserido incorrecto.';
  }
  return months[num - 1];
}

function testMonthName() {
  for (let count = -3; count <= 20; count++) {
    const name = monthName(count);
    console.log(`For parameter = ${count}, month = ${name}`);
  }
}

testMonthName();
