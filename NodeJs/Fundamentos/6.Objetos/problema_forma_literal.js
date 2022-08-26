const d1 = { 
  dia: 21,
  mes: 06,
  ano: 1999,
  exibir: function() {
    return [this.dia, this.mes, this.ano].join('/')
  }
}

const d2 = { 
  dia: 7,
  mes: 12,
  ano: 1982,
  exibir: function() {
    return [this.dia, this.mes, this.ano].join('/')
  }
}


const d3 = { 
  dia: 28,
  mes: 02,
  ano: 2015,
  exibir: function() {
    return [this.dia, this.mes, this.ano].join('/')
  }
}

console.log(d1.exibir())
console.log(d2.exibir())
console.log(d3.exibir())


// Muita duplicaçao de codigo e repetiçao de metodos parecidos