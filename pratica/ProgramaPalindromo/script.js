function verificar() {
    var inText = document.getElementById("inText");
    var texto = inText.value.toUpperCase();
    var outRes = document.getElementById("outRes");

    if (texto == "" || texto.indexOf(" ") == -1) {
        alert("Informe uma frase válida");
        inText.focus();
        return;
    }

    var frase = texto.replace(/ /g, "");
    var tam = frase.length;

    var iguais = true;

    for(var i = 0; i < tam / 2; i++) {
        if (frase[i] != frase[tam - 1 - i]) {
            iguais = false;
            break;
        }
    }

    if (iguais) {
        outRes.textContent = frase + " é um Palíndromo";
    } else {
        outRes.textContent = frase + " Não é um Palíndromo"
    }

    
}
btVerificar.addEventListener("click", verificar);
