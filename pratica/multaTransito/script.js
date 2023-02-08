function calculoMulta() {
    var inData = document.getElementById("inData");
    var data = inData.value;

    var inValor = document.getElementById("inValor");
    var multa = inValor.value;


    var valorDesconto = multa - (multa * 0.20); 


    var dataLimite = new Date();
    var partes = data.split("-");

    dataLimite.setDate(Number(partes[2]));
    dataLimite.setMonth(Number(partes[1]) - 1);
    dataLimite.setFullYear(Number(partes[0]));

    var dia = dataLimite.getDate();
    dataLimite.setDate(dia + 90);

    var dia = dataLimite.getDate();
    var mes = dataLimite.getMonth() + 1;
    var ano = dataLimite.getFullYear();


    document.getElementById("outData").textContent = + (dia < 10 ? "0" + dia : dia) + "/" + (mes < 10 ? "0" + mes: mes) + "/" + ano;
    document.getElementById("outValor").textContent = "Valor com desconto R$" + valorDesconto.toFixed(2);
}


btCalcular.addEventListener("click", calculoMulta);
