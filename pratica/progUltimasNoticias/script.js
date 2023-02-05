var listaNews = [];

function adicionar() {
    var inNews = document.getElementById("inNews");
    var noticias = inNews.value;

    if (noticias == "") {
        alert("Informe os dados corretamente");
        inNews.focus();
        return;
    }

    listaNews.push(noticias);
    inNews.value = "";
    inNews.focus();

    document.getElementById("outRes").textContent = "Notícias cadastradas: " + listaNews.length;
}

btAdd.addEventListener("click", adicionar);


function listarUltimasNoticias() {
    var quant = Number(prompt("Qual número de notícias você deseja visualizar?"));

    var total = listaNews.length;

    if (quant == 0 || isNaN(quant) || quant > total) {
        alert("Número inválido");
        return;
    }


    var ultimas = quant + " Últimas notícias \n-----------------------------\n";


    for (var i = total - 1; i >= total - quant; i--) {
        ultimas += (i + 1) + "°) " + listaNews[i] + "\n";
    }


    document.getElementById("outRes2").textContent = ultimas;



}

btListar.addEventListener("click", listarUltimasNoticias);
