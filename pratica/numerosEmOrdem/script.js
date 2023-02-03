var conjunto = [];


function addNumero() {

    var inNum = document.getElementById("inNum");
    var numero = Number(inNum.value);

    if (numero == 0 || isNaN(numero) || conjunto.indexOf(numero) >= 0) {
        alert("Informe um valor correto e inexistente na lista.");
        inNum.focus();
        return;
    }

    conjunto.push(numero);
    inNum.value = "";
    inNum.focus();

    document.getElementById("outNum").textContent = conjunto.join(", ");

    //verificarOrdem();
}

btAdd.addEventListener("click", addNumero);

function verificarOrdem() {

    if (conjunto.length == 0) {
        alert("Para conferir a ordem numérica, é necessário adicionar números.");
        inNum.focus();
        return;
    }

    var copia = conjunto.slice();
    copia.sort((a, b) => a - b);


    var copiadacopia = copia.toString();
    var copiaconjunto = conjunto.toString();


    if (copiadacopia == copiaconjunto) {
        document.getElementById("outRes").textContent = "Números em ordem crescente.";
    } else {
        document.getElementById("outRes").textContent = "Os númros não estão em ordem crescente.";
    }


}

btVerificar.addEventListener("click", verificarOrdem);





function ordenar() {

    var copia = conjunto.slice();
    copia.sort((a, b) => a - b);


    var copiadacopia = copia.toString();

    document.getElementById("outRes2").textContent = "A ordem crescente da numeração informada é " + copia + ".";

}

btOrdenar.addEventListener("click", ordenar);


function limparDados() {
    location.reload();
}

btLimpar.addEventListener("click", limparDados);
