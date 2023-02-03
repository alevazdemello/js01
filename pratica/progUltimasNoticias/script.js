var listaNews = [];

function adicionar() {
    var inNews = document.getElementById("inNews");
    var noticias = inNews.value;

    if(noticias == "") {
        alert("Informe os dados corretamente");
        inNews.focus();
        return;
    }

    listaNews.push(noticias);
    inNews.value = "";
    inNews.focus();

  document.getElementById("outRes2").textContent = listaNews;
}

btAdd.addEventListener("click", adicionar);

