function jogaDado(lados) {
  resultado = Math.ceil(Math.random() * lados);
  return resultado;
}

function testaDados(a) {
  console.log(`Começando sequência de testes para D${a}:\n`);
  resultado = jogaDado(a);
  let contagem = 1;
  while (resultado != 0) {
    resultado = jogaDado(a);
    console.log(`Testando iteraçao #${contagem} - Resultado D${a} = ${resultado}`);
    contagem++;
    if (contagem === 101) {
      break;
    }
  }

  console.log(`Nenhum erro encontrado em ${contagem - 1} testes`);
  console.log('Fim!\n');
}

testaDados(6);
testaDados(8);
testaDados(10);
testaDados(20);
testaDados(100);
