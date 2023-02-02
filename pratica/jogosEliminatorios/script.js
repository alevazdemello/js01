clubes = [];

function adicionar() {
    var inClube = document.getElementById("inClube");
    time = inClube.value;

    if(time == "") {
        alert("Informe um nome válido.");
        inClube.focus();
        return;
    }

    clubes.push(time);
    listarClubes();

    inClube.value = "";
    inClube.focus();


}

btAdd.addEventListener("click", adicionar);

function listarClubes() { 
    if (clubes.length == 0) {
        alert("Não há itens na lista");
        return;
    }

    var lista = "";

    for (var i = 0; i < clubes.length; i++) {
        lista += (i + 1) + ". " + clubes[i] + "\n";

    }

    document.getElementById("outRes").textContent = lista;
    
}

btListar.addEventListener("click", listarClubes);

function mostrarTabela() {
    var tam = clubes.length;


    if (tam == 0|| (tam % 2 == 1)) {
        alert("Deve haver número par de clubes.");
        return;
    }

    
    var jogos = "";
    var ultimo = tam - 1;

    for (i = 0; i < tam / 2; i++) {
        jogos += clubes[i] + " x " + clubes[ultimo - i] + "\n";
    }

    document.getElementById("outRes").textContent = jogos;

}

btTabela.addEventListener("click", mostrarTabela);
