// objeto data 
// atributos: dia, mes, ano
// metodo: exibir -> "dia/mes/ano"
// utilizar a forma literal para definir o objeto

const data = { 
  dia: 21,
  mes: 06,
  ano: 1999,
  exibir: function() {
    return [this.dia, this.mes, this.ano].join('/')
  }
}

