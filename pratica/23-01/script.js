var carros = []; //vetor globales

function adicionarCarros() {
    var inModelo = document.getElementById("inModelo");
    var inPreco = document.getElementById("inPreco");

    var modelo = inModelo.value;
    var preco = Number(inPreco.value);

    if (modelo == "" || preco == 0 || isNaN(preco)) {
        alert("Informe corretamente os dados.");
        inModelo.focus(); //chama o id como está definido no html   
        return;
    }

    //add dados ao vetor de objetos
    carros.push({ modelo: modelo, preco: preco });

    //limpa os dados e posiciona o cursor
    inModelo.value = "";
    inPreco.value = "";
    inModelo.focus();

    listarCarros(); //chama function que lista carros


    //  document.getElementById("outLista").textContent = carros;

}

btAdd.addEventListener("click", adicionarCarros);

function listarCarros() {
    //verifica se o vetor esta vazio
    if (carros.length == 0) {
        alert("Não há carros na lista");
        return;
    }

    var lista = ""; //p concatenar a lista de carros;

    //percorre os elementos do vetor
    for (var i = 0; i < carros.length; i++) {
        //adiciona a lista, cada objeto do vetor
        lista += carros[i].modelo + " - R$ " + carros[i].preco.toFixed(2) + "\n";
    }

    //referencia elemento e altera conteudo exibido
    document.getElementById("outLista").textContent = lista;
}

var btListar = document.getElementById("btListar");
btListar.addEventListener("click", listarCarros);


function filtrarCarros() {
    //faz a leitura do valor maximo a partir do metodo prompt
    var maximo = Number(prompt("Qual o valor máximo que o cliente deseja pagar?"));

    //se nao preencheu ou conteudo invalido

    if (maximo == 0 || isNaN(maximo)) {
        return;
    }

    //para concatenar lista de carros que obedecem ao criterio de pesquisa/filtro
    var lista = "";

    //percorre todos os elementos do vetor
    for (var i = 0; i < carros.length; i++) {
        //verifica se o preço é inferior ou igual ao maximo
        if (carros[i].preco <= maximo) {
            lista += carros[i].modelo + " R$: " + carros[i].preco.toFixed(2) + "\n"
        }
    }
    var outLista = document.getElementById("outLista"); //cria referencia a outlista

    //se a lista estiver vazia significa que nenhum veiculo foi encontraddo no for
    if (lista == "") {
        outLista.textContent = "Não há carros com preço até R$ " + maximo.toFixed(2);
    } else {
        //senão mostra os veiculos obtidos
        outLista.textContent = "Carros até R$ " + maximo.toFixed(2) + "\n------------------------\n" + lista;
    }
}

var btFiltrar = document.getElementById("btFiltrar");
btFiltrar.addEventListener("click", filtrarCarros);





