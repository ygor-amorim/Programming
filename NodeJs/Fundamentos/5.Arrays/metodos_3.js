const numeros = ['A', 'B', 'C', 'D', 'E', 'F'];

function praCadaElemento(elemento, indice, array) {
  console.log(elemento, indice, array);
}

numeros.forEach(praCadaElemento);

numeros.forEach((elemento) => {
  console.log(elemento);
});
