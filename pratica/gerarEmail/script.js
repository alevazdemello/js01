function gerarEmail() {
    var inText = document.getElementById("inText");
    var nome = inText.value;

    if (nome == "" || nome.indexOf(" ") == -1) {
        alert("Informe o nome corratamente, separado com espaço (' ')");
        inText.focus();
        return;
    }

    var copiaNome = nome.replace("de", "");
    var copiaNome2 = copiaNome.replace(" e ", " ");


    var partes = copiaNome2.split(" ");
    var email = "";
    var tam = partes.length;



    for (var i = 0; i < tam - 1; i++) {
        email += partes[i].charAt(0);
    }
    email += "_" + partes[tam -1];

    document.getElementById("outRes").textContent = email + "@nomedaempresa.com";
}

btGerar.addEventListener("click", gerarEmail);


/*

1) referencia aos dados de entrada;
2) alerta o usuário caso o nome informado nao esteja dentro do padrão;
3) retira do nome informado as partes "de" e "e" para que nao sejam contabilizadas como sobrenome;
4) transforma a string em elementos de vetor a cada ocorrencia do caractere " " usando o metodo split();
5) declara variavel acumuladora;
6) contabiliza o tamanho da variavel vinculada ao nome;
7) cria um for que percorre todo o nome informado, adicionando a variavel acumuladora a primeira letra de cada nome usando o metodo charAt();
8) concatena as primeiras letras de cada nome + o ultimo sobrenome [tam - 1]
__________________________________________


*/
