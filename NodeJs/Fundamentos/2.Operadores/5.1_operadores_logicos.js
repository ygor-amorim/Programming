// and (&&), or (||), xor (^ ou !=)  e negaçao (!)

const temDinheiro = false;
const estaEnsolarado = true;
const carroEstaNaGaragem = true;

let resultadoE = '#1 (AND) - Vai pro shopping? ';
resultadoE += temDinheiro && estaEnsolarado;

console.log(resultadoE);

let resultadoOU = '#2 (OR) - Vai pro shopping? ';
resultadoOU += estaEnsolarado || carroEstaNaGaragem;

console.log(resultadoOU);

console.log(`Não verdadeiro = ${!true}`);
console.log(`Não falso = ${!false}`);

// segundo exemplo
console.log();
console.log('\tSegundo Exemplo: ');
console.log();
const t1 = false;
const t2 = false;

console.log(' "Vamos comprar a TV 50"?', t1 && t2); // AND
console.log(' "Vamos comprar a TV 32"?', t1 !== t2); // XOR
const tomarSorvete = t1 || t2;
console.log(' "Vamos comprar a sorvete?', tomarSorvete); // OR
const ficarEmCasa = !tomarSorvete;
console.log(' "Vamos ficar em casa?', ficarEmCasa); // NOT
