var btExibir = document.getElementById("btExibir");

btExibir.addEventListener("click", function() {

    var inPreco = document.getElementById("inPreco");
    var outRes = document.getElementById("outRes");
    var preco = Number(inPreco.value);

    var lista = "";

    for (var i = 1; i <= 10; i++) {
        lista += i + "x de R$: " + (preco / i).toFixed(2) + "\n";
    }

    outRes.textContent = "Opções de pagamento\n\n" + lista;

});

