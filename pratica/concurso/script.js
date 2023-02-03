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

    if (relacao.length == 0) {
        alert("A relação de aprovados está vazia.");
        inCandidato.focus();
        return;
    }

    var notaAprovacao = Number(prompt("Número de acertos para aprovação?"));

    if (notaAprovacao == 0 || isNaN(notaAprovacao)) {
        alert("Número Inválido");
        inCandidato.focus();
        return;
    }


    var copia = relacao.slice();

    copia.sort(function (a, b) { return a.acertos - b.acertos });

    copia.reverse();

    var aprovados = "";

    
    for (var i = 0; i < copia.length; i++) {
        if (copia[i].acertos >= notaAprovacao) {
            aprovados += copia[i].candidato + " - " + copia[i].acertos + " Acertos\n";
        }
    }

    var outRes = document.getElementById("outRes");

    if (aprovados == "") {
        outRes.textContent = "Não há candidatos aprovados";
        } else {
            outRes.textContent = aprovados;
        }

   // document.getElementById("outRes").textContent = lista;
}

btAprovados.addEventListener("click", aprovados);
