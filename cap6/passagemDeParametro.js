function exibirCituacao(nota, media) {
    if (nota > media) {
        alert("Aprovade");
    } else {
        alert("Reprovade");
    }
}

var prova1 = Number(prompt("Qual nota?"));
exibirCituacao(prova1, 7);

alert("hi")
