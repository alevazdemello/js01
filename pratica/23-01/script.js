var carros = []; //vetor globales

function adicionarCarros() {
    var modelo = document.getElementById("inModelo").value;
    var preco = document.getElementById("inPreco").value;

    if (modelo == "" || preco == 0 || isNaN(preco)) {
        alert("Informe corretamente os dados.");
        inModelo.focus();
        return;
    }

    //add dados ao vetor de objetos
    carros.push({modelo: modelo, preco: preco });

    //limpa os dados e posiciona o cursor
    inModelo.value = "";
    inPreco.value = "";
    inModelo.focus();

    listarCarros(); //chama function que lista carros


  //  document.getElementById("outLista").textContent = carros;

}

function listarCarros() {
    //verifica se o vetor esta vazio
    if (carros.length == 0) {
        alert("Não há carros na lista");
        return;
    }

    var lista = ""; //p concatenar a lista de carros;
    for (var i = 0; i < carros.length; i++) {
        //adiciona a lista, cada objeto do vetor
        lista += carros[i].modelo + " - R$ " + carros[i].preco.toFixed(2) + "\n";
    }

    //referencia elemento e altera conteudo exibido
    document.getElementById("outLista").textContent = lista;
}

var btListar = document.getElementById("btListar");
btListar.addEventListener("click", listarCarros);


btAdd.addEventListener("click", adicionarCarros);


