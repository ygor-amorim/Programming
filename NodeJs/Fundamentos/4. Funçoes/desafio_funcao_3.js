// Fazer uma funcao que recebe 3 notas e faz a media das 3 maiores notas
// fazer uma funcao que mostra o status de aprovaçao do aluno
// se nota >= 7 : aprovado
// se nota >= 4 e < 7: reprovacao
// se nota < 4 : reprovado

function minimo(a, b) {
  return a <= b ? a : b;
}

function mediaDuasMaiores(n1, n2, n3) {
  const menorNota = minimo(n1, minimo(n2, n3))

  if (n1 < 0 || n1 > 10) {
    return "Notas Inválidas"
  } else if (n2 < 0 || n2 > 10) {
    return "Notas Inválidas"
  } else if (n3 < 0 || n3 > 10) {
    return "Notas Inválidas"
  }

  if (menorNota === n1) {
    return (n2 + n3) / 2;
  } else if (menorNota === n2) {
    return (n1 + n3) / 2;
  } else {
    return (n1 + n2) / 2;
  }
}

function mediaParaStatus(media) {
  if (typeof (media) == typeof ("")) {
    return "Nota(s) Inserida(s) Inválida(s)";
  } else if (media >= 7 && media <= 10) {
    return `Status do Aluno:\nAprovado!\nMédia = ${media}`;
  } else if (media >= 4 && media < 7) {
    return `Status do Aluno:\nEm Recuperação!\nMédia = ${media}`;
  } else if (media < 4 && media >= 0) {
    return `Status do Aluno:\nReprovado!\nMédia = ${media}`;
  }
}

function statusAluno(nota1, nota2, nota3) {
  const status = mediaParaStatus(mediaDuasMaiores(nota1, nota2, nota3))
  return console.log(status)
}

statusAluno(7.8, 3.1, 6.7)
console.log()
statusAluno(10,10,10)
console.log()
statusAluno(10,9,8)
console.log()
statusAluno(6, 4, 6)
console.log()
statusAluno(3, 4, 3)