// modelo -> if (expressao); 

const nota = 9;
const bomComportamento = true;

// sentenças
if (nota >=7 && nota < 10 && bomComportamento)
    console.log("Parabéns");

if (nota < 7 || !bomComportamento)
    console.log("Uma pena!");

// bloco de código
if (nota === 10 && bomComportamento) {
    console.log("Quadro de Honra!!!")
    console.log("Parabéns!!")

}