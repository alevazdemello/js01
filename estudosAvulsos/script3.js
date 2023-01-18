function calcularLinhas() {
    var inNum = document.getElementById("inNum").value;


    var resposta = "";
    var estrela = "*";
    for (var i = 1; i <= inNum; i++) {
        for (var j = 1; j <= i; j++) {
            resposta = resposta + "*"
        }
        resposta = resposta + "\n";

    }

    document.getElementById("outRes").textContent = resposta;

}

alert('hi');

btCalcular.addEventListener("click", calcularLinhas);