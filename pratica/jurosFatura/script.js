const TAXA_MULTA = 2 / 100;
const TAXA_JUROS = 0.33 / 100;

function renegociarConta() {
    var inData = document.getElementById("inData");
    var inValor = document.getElementById("inValor");
    var outMulta = document.getElementById("outMulta");
    var outJuros = document.getElementById("outJuros");
    var outTotal = document.getElementById("outTotal");

    var data = inData.value;
    var valor = Number(inValor.value);

    if (data == "" || valor == 0 || isNaN(valor)) {
        alert("Informe os dados corretamente");
        inData.focus();
        return;
    }


    var hoje = new Date;
    var venc = new Date;

    var partes = data.split("-");
    venc.setDate(Number(partes[2]));
    venc.setMonth(Number(partes[1]) -1);
    venc.setFullYear(Number(partes[0]));

    var atraso = hoje - venc;

    var multa = 0;
    var juros = 0;

    if (atraso > 0) {
        var dias = Math.round(atraso / 86400000);

        multa = valor * TAXA_MULTA;
        juros = (valor * TAXA_JUROS) * dias;
    }

    var total = valor + multa + juros;
    outMulta.value = multa.toFixed(2);
    outJuros.value = juros.toFixed(2);
    outTotal.value = total.toFixed(2);

    
}


btCalcular.addEventListener("click", renegociarConta);
