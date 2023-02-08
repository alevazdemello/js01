function criptografar() {

    var inMensagem = document.getElementById("inMensagem");
    var mensagem = inMensagem.value;


    if (mensagem == "") {
        alert("Informe uma mensagem válida");
        inMensagem.focus();
        return;
    }

    resposta = "";
    tamanho = mensagem.length;


    for (var i = 1; i < tamanho; i = i + 2) {
        resposta += mensagem.charAt(i)
    }

    //no for acima, o i começa em 1, que no caso é a segunda letra, que ao longo do loop recebe 2;

    for (var i = 0; i < tamanho; i = i + 2) {
        resposta += mensagem.charAt(i);

    }
    //neste caso, o i precisou receber +2 pois se ele recebesse só 1, retornaria o nome completo

    document.getElementById("outRes").textContent = resposta;

}

function decriptografar() {
    var inMensagem = document.getElementById("inMensagem");
    var mensagem = inMensagem.value;
    var resposta = mensagem;

    document.getElementById("outRes").textContent = resposta;
}

btCripto.addEventListener("click", criptografar);
idDesfaz.addEventListener("click", decriptografar);

