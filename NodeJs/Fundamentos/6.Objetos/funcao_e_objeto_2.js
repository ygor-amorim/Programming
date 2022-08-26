// Funçao construtora (Classe) -> Objeto

function Produto() {
  console.log(this);
}

const p1 = new Produto();

console.log(typeof p1);

// Paralelo com o exemplo de data anterior

function Data(dia = 1, mes = 1, ano = 1970) {
  this.dia = dia;
  this.mes = mes;
  this.ano = ano;

  this.exibir = function () {
    return [this.dia, this.mes, this.ano].join('/');
  };
}
const d1 = new Data();
console.log('Funçao construtora 1:\n', d1.exibir(), '\n');

// forma alternativa (?)

function DataAlternativa(dia = 2, mes = 1, ano = 1970) {
  return {
    dia,
    mes,
    ano,

    exibir() {
      return [this.dia, this.mes, this.ano].join('/');
    },
  };
}
console.log('Funçao construtora 2:');
const d2 = new DataAlternativa(21, 6, 1999);
const d3 = new DataAlternativa();
console.log(d3.exibir());
console.log(d2.exibir());
