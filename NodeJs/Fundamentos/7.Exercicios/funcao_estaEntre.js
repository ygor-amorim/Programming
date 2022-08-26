function estaEntre(numero, minimo, maximo, inclusivo = false) {
  if (inclusivo === false) {
    if (numero <= minimo && numero >= maximo) {
      return false;
    }
    return true;
  }
  if (numero < minimo && numero > maximo) {
    return false;
  }
  return true;
}

console.log(estaEntre(10, 100, 50)); // retornará true
console.log(estaEntre(16, 100, 160)); // retornará false
console.log(estaEntre(3, 150, 3)); // retornará false
console.log(estaEntre(3, 150, 3, true)); // retornará true
