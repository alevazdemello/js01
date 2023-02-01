//declaracao de escopo global que ira conter os numeros apostados
var erros = [];

//gera um numero aleatorio
var sorteado = Math.floor(Math.random() * 100) + 1;

//declara constante com n de chances
const CHANCES = 6;

function apostarNumero() {
    var inNum = document.getElementById("inNum");
    var numero = Number(inNum.value);


    if (numero <= 0 || numero > 100 || isNaN(numero)) {
        alert("Informe um número válido, não estrague a brincadeira!!!!!!!!!!!!");
        inNum.focus();
        return;
    }


    var outErros = document.getElementById("outErros");
    var outChances = document.getElementById("outChances");
    var outDica = document.getElementById("outDica");

    if (numero == sorteado) {
        alert("Parabéeeens, você acertou! Não ganha nada, além de saber que está com sorte xD");


        //troca o status dos botoes
        btApostar.disabled = true;
        btJogar.className = "exibe";

        outDica.textContent = "Parabéns! Número sorteado: " + sorteado;
    } else {
        //se o numero existe no vetor erros
        /* 
        Caso o número apostado não corresponda ao
sorteado, utilizamos o método indexOf() discutido nesta seção. Se o retorno do indexOf() for maior ou igual a zero, signica que o número 
apostado já consta no vetor e a mensagem de alerta é exibida        
        */
        if (erros.indexOf(numero) >= 0) {
            alert("Você já apostou o número " + numero + ". Tente outro valor...");
        } else {
            erros.push(numero); //add numero ao vetor
            var numErros = erros.length;
            var numChances = CHANCES - numErros; //calcula o n de chances

            //exibe o n de erros, conteudo do vetor e n de chances
            outErros.textContent = numErros + " (" + erros.join(", ") + ")";
            outChances.textContent = numChances;


            //Caso o número de chances seja igual a 0,as instruções de final de jogo são executadas.
            if (numChances == 0) {
                alert("Suas chances acabaram! :((((");
                btApostar.disabled = true;
                btJogar.className = "exibe";
                outDica.textContent = "FIM DE JOGO :(" + "\n" + "Número sorteado " + sorteado;
            } else {
                //usar operador ternario(condicional) p mensagem da dica
                var dica = numero < sorteado ? "maior" : "menor";
                outDica.textContent = "Dica: tente um número " + dica + " que " + numero;
            }
        }
    }

    //limpa o campo de entrada
    inNum.value = "";
    inNum.focus();

}

btApostar.addEventListener("click", apostarNumero);

function jogarNovamente() {
    location.reload();
}

btJogar.addEventListener("click", jogarNovamente);
