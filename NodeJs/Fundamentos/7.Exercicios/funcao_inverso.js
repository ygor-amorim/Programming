// Escreva uma função que receba um valor booleano ou numérico. Se o
// parâmetro fornecido for booleano, o retorno da função deverá ser o inverso.
// Por exemplo, se a entrada for false, retornará true. Se o parâmetro for
// numérico, o retorno será o número inverso. Por exemplo, se for fornecido
// -1,o retorno será 1. Se o parâmetro de entrada não for de nenhum dos tipo
// acima, retorne "booleano ou número esperados, mas o parâmetro é do tipo ...".

// Exemplos:
// inverso(true) // retornará false
// inverso("6") // retornará "booleano ou número esperados, mas o parâmetro é do tipo string"
// inverso(-2000) // retornará 2000
// inverso("programação") // retornará "booleano ou números esperado, mas o parâmetro é do tipo string"

function inverso(dado) {
  if (typeof dado === 'boolean') {
    return !dado;
  } if (typeof dado === 'number') {
    return 0 - dado;
  }
  return `booleano ou números esperado, mas o parâmetro é do tipo ${typeof dado}`;
}

console.log(inverso(37));
console.log(inverso(3.14));
console.log(inverso(Math.LN2));
console.log(inverso(Infinity));
console.log(inverso(NaN));
console.log(inverso(Number(1)));
console.log(inverso(''));
console.log(inverso('bla'));
console.log(inverso(typeof 1));
console.log(inverso(String('ABC')));
console.log(inverso(true));
console.log(inverso(false));
console.log(inverso(undefined));
console.log(inverso({ a: 1 }));

console.log(inverso(Object()));
console.log(inverso(Math.sin));
