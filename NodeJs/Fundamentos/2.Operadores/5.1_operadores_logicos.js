// and (&&), or (||), xor (^ ou !=)  e negaçao (!)

let temDinheiro = false;
let estaEnsolarado = true;
let carroEstaNaGaragem = true;

let resultadoE = '#1 (AND) - Vai pro shopping? ';
resultadoE += temDinheiro && estaEnsolarado;

console.log(resultadoE);

let resultadoOU = '#2 (OR) - Vai pro shopping? ';
resultadoOU += estaEnsolarado || carroEstaNaGaragem

console.log(resultadoOU)

console.log('Não verdadeiro = ' + !true);
console.log('Não falso = ' + !false);


// segundo exemplo
console.log()
console.log("\tSegundo Exemplo: ")
console.log()
let t1 = false,
    t2 = false;

console.log(' "Vamos comprar a TV 50"?', t1 && t2); // AND
console.log(' "Vamos comprar a TV 32"?', t1 !== t2); // XOR
let tomarSorvete = t1 || t2;
console.log(' "Vamos comprar a sorvete?', tomarSorvete); // OR
let ficarEmCasa = !tomarSorvete
console.log(' "Vamos ficar em casa?', ficarEmCasa); // NOT
