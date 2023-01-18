function contarCriacao() {
    var inNum = document.getElementById("inNum").value;
    var inAnos = document.getElementById("inAnos").value;

    if (inNum < 1 || isNaN(inNum) || inAnos == 0 || isNaN(inAnos)) {
        alert("Informe os dados corretamente")
        inNum.focus();
        return;
    }

    //cria variavel do tipo string que ira concatenar a resposta

    var resposta = "";
    var total = inNum;

    //cria um laço de repetição 

    for (var i = 1; i <= inAnos; i++) {
        resposta = resposta + i + "° Ano: " + total + " Drags \n";
        total = total * 3;
    }

    //altera o conteudo da tag de resposta 

    document.getElementById("outRes").textContent = resposta;
}


btCalcular.addEventListener("click", contarCriacao);
alert("hiiii")