var criancas = [];

function adicionar() {
    var inNome = document.getElementById("inNome");
    var inIdade = document.getElementById("inIdade");

    nome = inNome.value;
    idade = Number(inIdade.value);

    if (nome == "" || idade <= 0 || isNaN(idade)) {
        alert("Informe os dados corretamente!");
        inNome.focus;
        return;
    }

    criancas.push({ nome: nome, idade: idade });
    inNome.value = "";
    inIdade.value = "";
    inNome.focus();

    listarTodos();
    //    document.getElementById("outRes").textContent = criancas;

}

btAdd.addEventListener("click", adicionar);

function listarTodos() {
    if (nome.length == 0) {
        alert("Não há itens na lista");
        return;
    }

    var lista = "";
    for (var i = 0; i < criancas.length; i++) {
        lista += criancas[i].nome + " - " + criancas[i].idade + " anos \n";
    }

    document.getElementById("outRes").textContent = lista;

}

btListar.addEventListener("click", listarTodos);


function resumirLista() {
    if (criancas.length == 0) {
        alert("Não há itens na lista.")
        return;
    }

    //cria uma copia do vetor crianças
    var copia = criancas.slice();

    //ordena o vetor copia pela idade
    copia.sort(function (a, b) { return a.idade - b.idade });

    var resumo = ""; //concatena a saida;

    var aux = copia[0].idade; //menor idade do vetor ordenado anteiormente(começa em 0);
    var nomes = []; //vetor p inserir nomes de cada idade;

    //percorre os elementos do vetor (classificado por idade)
    for (var i = 0; i < copia.length; i++) {
        //se é da mesma idade auxiliar, add ao vetor
      
      /*
      Se a idade da criança for igual ao valor da variável auxiliar, essa criança deve ser inserida na lista de nomes.
Caso contrário, signica que houve uma troca de idades na lista.
Portanto, devemos concluir a idade anterior e iniciar uma nova lista para a idade em questão.
      
      */
        if (copia[i].idade == aux) {
            nomes.push(copia[i].nome);
        } else {
            //senao add ao resumo, dados e nomes inseridos em  nomes [];
            resumo += aux + " ano(s): " + nomes.length + " criança(s) - ";
            resumo += (nomes.length / copia.length * 100).toFixed(2) + "%\n";
            resumo += "(" + nomes.join(", ") + ")\n\n";
            aux = copia[i].idade; //obtem a nova idade na ordem
            nomes = []; //limpa o vetor dos nomes;
            nomes.push(copia[i].nome); //adiciona o primeiro da nova idade;

        }
    }

    //add os nomes da ultima lista ordenada
    resumo += aux + " ano(s): " + nomes.length + " criança(s) - ";
    resumo += (nomes.length / copia.length * 100).toFixed(2) + "%\n";
    resumo += "(" + nomes.join(", ") + ")\n\n";

    document.getElementById("outRes").textContent = resumo;
}

btResumo.addEventListener("click", resumirLista);
