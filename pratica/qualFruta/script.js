function montarDica() {
    var inFruta = document.getElementById("inFruta");
    fruta = inFruta.value;

    if (fruta == "") {
        alert("Informe um nome válido");
        inFruta.focus();
        return;
    }


    var resposta = fruta.charAt(0);
    var estrelas = "*";
    var tam = fruta.length;


    //percorre os demais caracteres da fruta
    for (var i = 1; i < tam; i++) {
        //se a letra da posicao da variavel de controle for igual a primeira
        if (fruta.charAt(i) == fruta.charAt(0)) {
            resposta += fruta.charAt(0); //add a letra inicial
        } else {
            resposta += "_ ";
        }
        estrelas += "*";
    }


    document.getElementById("outRes").textContent = resposta;
    inFruta.value = estrelas;

}

btMontar.addEventListener("click", montarDica);
