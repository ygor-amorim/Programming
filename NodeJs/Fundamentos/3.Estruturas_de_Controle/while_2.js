// mais um exemplo utilizando data
/* A funçao Date.now() retorna a quantidade de milisegundos que se passaram desde 1o de
Janeiro de 1970 até o momento atual. */

const futuro = Date.now() + 1000; // Momento atual + 1 segundos
const agora = Date.now();
let tempoCorrido;

while (Date.now() < futuro) {
  tempoCorrido = (Math.abs(agora - Date.now())) / 1000;
}

console.log(`Passaram-se aproximadamente ${tempoCorrido} segundo(s) durante a execução do código.`);

console.log();
console.log('Tempo passado');
console.log(Date.now());
