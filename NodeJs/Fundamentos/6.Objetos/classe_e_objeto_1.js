class Data {
  constructor(dia = 1, mes = 1, ano = 1970) {
    this.dia = dia;
    this.mes = mes;
    this.ano = ano;
  }

  exibirData() {
    return [this.dia, this.mes, this.ano].join('/')
  };
}

const d1 = new Data(21, 06, 1999);
console.log(d1)

console.log(d1.exibirData())

