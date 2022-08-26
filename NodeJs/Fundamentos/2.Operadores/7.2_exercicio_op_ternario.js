const a = 8;
const b = 4;
const operacao = '/'; // + - * /

const resultado = operacao === '+' ? (a + b)
  : (operacao === '-' ? (a - b)
    : (operacao === '*' ? (a * b)
      : (operacao === '/' ? a / b
        : console.log('Operaçao nao suportada'))));

console.log(resultado);
