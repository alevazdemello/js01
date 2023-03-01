function calcularVacina() {
    var inValor = document.getElementById("inValor");
    var valor = Number(inValor.value);

    var desconto;
    if (valor =="" || isNaN(valor)) {
        alert("Informe um valor válido");
        inValor.focus();
        return;
    }

    if (rbSim.checked) {
        if (selConvenio.value == "amigoDosAnimais") {
            desconto = calcularDesconto(valor, 20);
        } else {
            desconto = calcularDesconto(valor, 50);
        } 
    } else {
        desconto = calcularDesconto(valor, 10);
    };

    outDesconto.textContent = "Desconto R$: " + desconto.toFixed(2);
    outValor.textContent = "A pagar R$: " + (valor - desconto).toFixed(2);
}

btCalcular.addEventListener("click", calcularVacina);

function calcularDesconto(valor, taxa) {
    return valor * (taxa/100)
}

function trocarItem() {
    var inConvenio = document.getElementById("inConvenio");
    if (rbSim.checked) {
        inConvenio.className = "exibe";
    } 

}



rbSim.addEventListener("change", trocarItem);
var rbNao = document.getElementById("rbNao");

rbNao.addEventListener("change", function(){
    var inConvenio = document.getElementById("inConvenio");
    inConvenio.className = "oculta";
})

