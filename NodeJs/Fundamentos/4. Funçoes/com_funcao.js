
function exibirData(d, m, a) {
  console.log()
  console.log("Data Inserida!")
  console.log(`Data: ${d}/${m}/${a}`)
}

exibirData(3, 7, 2022);
exibirData(5, 02, 1999);
exibirData(21, 06, 1999);
exibirData(11, 11, 2001);
exibirData(6, 05, 2014);


// experimentando fatiar uma string que recebe uma data em string e retorna
// em forma de array com os valores numericos da data
function retornarData(dataString) {
  let lista = new Array(dataString)
  let dia = Number(lista[0][0] + lista[0][1])
  let mes = Number(lista[0][3] + lista[0][4])
  let ano = Number(lista[0][6] + lista[0][7] + lista[0][8] + lista[0][9])

  return new Array(dia, mes, ano)
}

dataDia = retornarData("21/06/1999")

console.log(dataDia)

