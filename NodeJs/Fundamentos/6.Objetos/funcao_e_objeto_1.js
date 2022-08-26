

const d1 = {
  dia: 21,
  mes: 6,
  ano: 1999,
  exibir: function () {
    return [this.dia, this.mes, this.ano].join('/')
  }
}

const d2 = {
  dia: 7,
  mes: 12,
  ano: 1982,
  exibir: function () {
    return [this.dia, this.mes, this.ano].join('/')
  }
}


const d3 = {
  dia: 28,
  mes: 2,
  ano: 2015,
  exibir: function () {
    return [this.dia, this.mes, this.ano].join('/')
  }
}


// forma 1 de resolver esse problema
// criar uma funcao que receba o objeto

function criarData(dia, mes, ano) {
  return {
    dia: dia,
    mes: mes,
    ano: ano,
    exibir: function () {
      return [this.dia, this.mes, this.ano].join('/')
    }
  };
}


// forma 1 SIMPLIFICADA

function criarData(dia, mes, ano) {
  return {
    dia,
    mes,
    ano,
    exibir() {
      return [this.dia, this.mes, this.ano].join('/')
    }
  };
}

data1 = criarData(21, 6, 1999);
data2 = criarData(7, 12, 1982);
data3 = criarData(28, 2, 2015);

console.log(data1.exibir());
console.log(data2.exibir());
console.log(data3.exibir());