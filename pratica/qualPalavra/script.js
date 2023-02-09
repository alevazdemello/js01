var palavraReservada = [];

function exibirPalavra() {
    var inPalavra = document.getElementById("inPalavra");
    var palavra = inPalavra.value;

    palavraReservada.push(palavra);
    var primeiraLetra = palavra.charAt(0);

    var resposta = "";
    var estrelas = "";

    for (var i = 0; i < palavra.length; i++) {
        if (palavra.charAt(i) == primeiraLetra) {
            resposta += primeiraLetra;
        } else {
            resposta += "_ ";
        }
        estrelas += "*";
        inPalavra.value = estrelas;
    }

    document.getElementById("outDica").textContent = "Dica: " + resposta;
}

btExibir.addEventListener("click", exibirPalavra);

function exibirVogais() {

    var copiaPalavra = palavraReservada.toString()
    var primeiraLetra = copiaPalavra.charAt(0);
    var resposta = "";

    for (var i = 0; i < copiaPalavra.length; i++) {
        if (copiaPalavra.charAt(i) == primeiraLetra) {
            resposta += primeiraLetra;
        } else if (copiaPalavra.charAt(i) == "a") {
            resposta += "a";
        } else if (copiaPalavra.charAt(i) == "e") {
            resposta += "e"
        } else if (copiaPalavra.charAt(i) == "i") {
            resposta += "i"
        } else if (copiaPalavra.charAt(i) == "o") {
            resposta += "o"
        } else if (copiaPalavra.charAt(i) == "u") {
            resposta += "u"
        } else {
            resposta += "_ ";
        }
    }

    document.getElementById("outDica").textContent = "Dica: " + resposta;
}

btExibirVogais.addEventListener("click", exibirVogais);



/*Este programa pede uma palavra ao user; assim que clicado em "Exibir primeira letra e suas semelhantes", damos inicio ao 
"jogo", semelhante a uma forca onde a primeiro momento o programa identifica a existencia de mais caracteres igual ao primeiro.
caso existe, eles logo são revelados, e os demais caracteres são mostrados com "_ ", para que o usuário possa tentar descobrir a palavra.
caso precise de mais dica, o botao "Exibir vogais" exibe as vogais podendo assim facilitar o processo de descobrimento da palavra.

descricao do script
1) declaracao de vetor global;
2) referencia aos elementos de entrada;
3) enviamos a palavra informada pelo usuario ao vetor, para que ela seja referenciada na 2° function atraves do metodo push();
4) identificamos a primeira letra com o metodo charAt();
5) definimos as variaveis acumuladoras para resposta e para alterar o conteudo do campo texto por asteriscos;
6) laço de repetição que proucura caracteres que sejam iguais ao primeiro ao longo da palavra informada;
7) dentro do laço, definimos que caso o caractere !== do primeiro, os substitui por "_";
8) a segunda funcao basicamente repete a dinamica da primeira, exceto pela identificação das vogais (caso ocorra, add a vogal a variavel resposta)
__________________________________________
importante: metodos charAt()/push();
palavra.length para medir o tamanho;
estrelas += "*" dentro o loop para esconder a palavra informada;
*/
