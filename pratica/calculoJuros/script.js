const TAXA_MULTA = 2 / 100; //multa por atraso
const TAXA_JUROS = 0.33 / 100; //juros por dia de atraso

function calcularMulta() {
    var inDataVenc = document.getElementById("inDataVenc");
    var inValor = document.getElementById("inValor");
    var outMulta = document.getElementById("outMulta");
    var outJuros = document.getElementById("outJuros");
    var outTotal = document.getElementById("outTotal");

    var data = inDataVenc.value;
    var valor = Number(inValor.value);

    if (data == "" || valor == 0 || isNaN(valor)) {
        alert("Informe os dados corretamente");
        inDataVenc.focus();
        return;
    }

    //cria duas variaveis (instancia dois objetos) tipo data
    var hoje = new Date();
    var vencim = new Date();

    //a data vem no formato aaaa-mm-dd
    var partes = data.split("-");
    vencim.setDate(Number(partes[2]));
    vencim.setMonth(Number(partes[1]) - 1);
    vencim.setFullYear(Number(partes[0]));

    //calcula a diferenca de dias entre datas (em milisegundos)
    var atraso = hoje - vencim;

    var multa = 0; //inicializa multa e juros com zero
    var juros = 0;

    //se a conta tiver em atraso
    if (atraso > 0) {
        //converte os milisegundos da diferenca em dias
        //(1 dia = 24hrs x 60min x 60seg x 1000mseg: 86400000)
        //round(): necessario p periodos envolvendo horario de verao
        var dias = Math.round(atraso / 86400000);

        multa = valor * TAXA_MULTA;
        juros = (valor * TAXA_JUROS) * dias;

    }

    var total = valor + multa + juros;
    outMulta.value = multa.toFixed(2);
    outJuros.value = juros.toFixed(2);
    outTotal.value = total.toFixed(2);



    // document.getElementById("outRes").textContent = data + valor;



}

btCalcular.addEventListener("click", calcularMulta);

function limparCampos() {
    location.reload();

}

btNovaConta.addEventListener("click", limparCampos);
