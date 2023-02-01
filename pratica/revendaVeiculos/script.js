var carros = [];

function adicionar() {
    var inModelo = document.getElementById("inModelo");
    var inPreco = document.getElementById("inPreco");
    modelo = inModelo.value;
    preco = Number(inPreco.value);


    if (modelo == "" || preco <= 0 || isNaN(preco)) {
        alert("Informe os dados corretamente");
        inModelo.focus();
        return;
    }


    //add dados ao vetor de objetos
    carros.push({ modelo: modelo, preco: preco });
    inModelo.value = "";
    inPreco.value = "";
    inModelo.focus();

    listarCarros();
}

btAdd.addEventListener("click", adicionar);

function listarCarros() {
    if (carros.length == 0) {
        alert("Não há carros na lista.");
        return;
    }

    var lista = "";

    for (var i = 0; i < carros.length; i++) {
        lista += carros[i].modelo + " - R$: " + carros[i].preco.toFixed(2) + "\n";
    }

    document.getElementById("outRes").textContent = lista;
}

btListarTodos.addEventListener("click", listarCarros);

function filtrarCarros() {
    var maximo = Number(prompt('Qual valor máximo o cliente deseja pagar?'))

    if (maximo == 0 || isNaN(maximo)) {
        return;
    }

    var lista = "";

    for (var i = 0; i < carros.length; i++) {
        if (carros[i].preco <= maximo) {
            lista += carros[i].modelo + " - R$: " + carros[i].preco.toFixed(2) + "\n";
        }
    }

    var outLista = document.getElementById("outLista");

    if (lista == "") {
        outRes.textContent = "Não há carros com preço até R$ " + maximo.toFixed(2);
    } else {
        outRes.textContent = "Carros até R$ " + maximo.toFixed(2) + "\n----------------------\n" + lista;
    }
}

btFiltrar.addEventListener("click", filtrarCarros);
