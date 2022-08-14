// #1: Funçao COM Parâmetro e COM Retorno
function soma(a, b) {
  return a + b;
}

// #2: Funçao COM Parâmetro e SEM Retorno

function exibirMultiplicacao(a, b) {
  console.log(a * b)
}

// #3: Funçao SEM Parâmetro e COM Retorno:

function vantagemD10() {
  let a = Math.random().toFixed(1);
  let b = Math.random().toFixed(1);
  a > b ? resultado = a : resultado = b
  return resultado
}

// #4: Funcao SEM Parametro e SEM Retorno:

function mensagemInicio() {

  if (true) {  
    console.log("Atenção")
    console.log("Jogador A Começa!")
  } else {
    console.log("Atenção")
    console.log("Jogador B Começa!")

  }
}

mensagemInicio();