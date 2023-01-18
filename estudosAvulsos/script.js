function contarNome() {
    var inNome = document.getElementById("inNome").value;
    var inNumber = document.getElementById("inNumber").value;



    if (inNome == "" || inNumber == 0 || isNaN(inNumber)) {
        alert("Informe os dados corretamente.")
        inNome.focus();
        return;
    }

    var resposta = "";


    for (var i = 1; i < inNumber; i++) {
        resposta = resposta + inNome + " * ";
    }

    document.getElementById("outRes").textContent = resposta;

}

btRepetir.addEventListener("click", contarNome);