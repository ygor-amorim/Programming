let hora = 19,
    saudacao;

if (hora < 12) {
    saudacao = "Bom Dia!";
} else if (hora < 18) {
        saudacao = "Boa Tarde!";
    } else {
        saudacao = "Boa Noite!";
    }

console.log(saudacao);