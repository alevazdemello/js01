function citacaoBibliografica() {
    var inNome = document.getElementById("inNome");
    var nome = inNome.value;

    var resposta = "";
    var ultimoEspaco = nome.lastIndexOf(" ");

    var resposta = nome.substr(ultimoEspaco) + ", ";

    var partes = nome.split(" ");
    var tam = partes.length;

    for (var i = 0; i < tam - 1; i++) {
        resposta += partes[i].charAt(0) + ".";

    }


    document.getElementById("outRes").textContent = "Citação Bibliográfica: " + resposta.toUpperCase();
}

btGerar.addEventListener("click", citacaoBibliografica);

