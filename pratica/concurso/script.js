var relacao = [];

function adicionar() {
    var inCandidato = document.getElementById("inCandidato");
    var inAcertos = document.getElementById("inAcertos");

    var candidato = inCandidato.value;
    var acertos = Number(inAcertos.value);

    if (candidato == "" || isNaN(acertos)) {
        alert("Favor informar os dados corretamente");
        inCandidato.focus();
        return;
    }

    relacao.push({ candidato: candidato, acertos: acertos });
    inCandidato.value = "";
    inAcertos.value = "";
    inCandidato.focus();

    listarTodos();

}


btAdd.addEventListener("click", adicionar);


function listarTodos() {
    if (relacao.length == 0) {
        alert("Não há itens na relação de candidatos");
        inCandidato.focus();
        return;
    }

    var lista = "";
    for (var i = 0; i < relacao.length; i++) {
        lista += relacao[i].candidato + " - " + relacao[i].acertos + " Acertos\n";
    }

    document.getElementById("outRes").textContent = lista;
}

btListar.addEventListener("click", listarTodos);


function aprovados() {
    var notaAprovacao = prompt("Número de acertos para aprovação?");

    if (notaAprovacao == "") {
        alert("Informações inválidas");
        inCandidato.focus();
        return;
    }

    lista = "";

    for (var i = 0; i < relacao.length; i++) {
        if (relacao[i].acertos >= notaAprovacao) {
            lista += relacao[i].candidato + relacao[i].acertos;
        }
    }

    document.getElementById("outRes").textContent = lista;
}

btAprovados.addEventListener("click", aprovados);
