// quantidade determinada de repetiçoes
// declaraçao; expressao; incremento -> quantidade determinada
let contagem = 0;
while (contagem < 10) {
  contagem += 1;
}

console.log(contagem);
console.log();

// quantidade indeterminada de repetiçoes
contagem = 0;
while (Math.random() < 0.9) {
  contagem++;
}

console.log('Quantidade: ', contagem);

console.log(Date.now());

// mais um exemplo utilizando data
/* A funçao Date.now() retorna a quantidade de milisegundos que se passaram desde 1o de
Janeiro de 1970 até o momento atual. */

const futuro = Date.now() + 1500; // Momento atual + 1 segundo
const agora = Date.now();
let tempoCorrido;

while (Date.now() < futuro) {
  tempoCorrido = (Math.abs(agora - Date.now())) / 1000;
}

console.log('Passaram', tempoCorrido, 'segundo(s) durante a execução do código.');
