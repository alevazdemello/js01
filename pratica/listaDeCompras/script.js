var numProdutos = 0;
var valTotal = 0;

var resposta = "";

function registro() {
    inProduto = document.getElementById("inProduto");
    inValor = document.getElementById("inValor");
    valor = Number(inValor.value);
    produto = inProduto.value;

    if (produto == "" || valor == "" || isNaN(valor)) {
        alert("Informe os dados corretamente.")
        inProduto.focus();
        return;
    }

    numProdutos++
    valTotal = valTotal + valor;
    resposta = resposta + produto + " - R$: " + valor.toFixed(2) + "\n";

    document.getElementById("outRes").textContent = resposta + "---------------";

    outTotal.textContent = numProdutos + " Produto(s) - Total R$ " + valTotal.toFixed(2);

    inProduto.value = "";
    inValor.value = "";
    inProduto.focus();
}

btRegistrar.addEventListener("click", registro);

