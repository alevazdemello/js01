function mostrarDados() {
    var inModelo = document.getElementById("inModelo");
    var inAno = document.getElementById("inAno");
    var inPreco = document.getElementById("inPreco");
    var outRes = document.getElementById("outRes");
    var outRes2 = document.getElementById("outRes2");


    var modelo = inModelo.value;
    var ano = Number(inAno.value);
    var preco = Number(inPreco.value);

    if (modelo == "" || ano == 0 || preco == 0 || isNaN(ano) || isNaN(preco))  { 
        alert("Informe corretamente os dados do veículo");
        inModelo.focus;
        return;
    }

    // chama e atribui o retorno das funções às variáveis
    var classificacao = classificarVeiculo(ano);
    var precoVenda = calcularVenda(preco, classificacao);

    outRes.textContent = modelo + " - " + classificacao;
    outRes2.textContent = "Preço de Venda R$: " + precoVenda.toFixed(2); 
}

btClassificar.addEventListener("click", mostrarDados);

function classificarVeiculo(ano) {
    var anoAtual = new Date().getFullYear();
    var classif;

    if (ano == anoAtual) {
        classif = "Novo";
    } else if (ano == anoAtual - 1 || ano == anoAtual - 2) {
        classif = "Seminovo";
    } else {
        classif = "Usado";
    }
    return classif;
}

function calcularVenda(valor, status) {
    var prVenda = (status == "Novo") ? valor * 1.08 : valor * 1.10;
    return prVenda;
}
