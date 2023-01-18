var pacientes = []; //vetor global

function adicionarPaciente() {
    var nome = document.getElementById("inPaciente").value;

    if (nome == "") {
        alert("Informe o nome do paciente");
        inPaciente.focus();
        return;
    }

    pacientes.push(nome); //adiciona um nome ao final do vetor
    var lista = ""; //string p concatenar pacientes

    //percorre os elementos do vetor
    for (i = 0; i < pacientes.length; i++) {
        lista += (i + 1) + " - " + pacientes[i] + "\n";

        /* 
        Observe que, dentro do laço for, o valor da variável i é adicionado
    a 1, pois caria estranho numerar a lista considerando a posição real dos elementos do vetor – 
    que começa por 0.
        */

    }

    //limpa os campos e posiciona o cursor 
    inPaciente.value = "";
    inPaciente.focus();

    outLista.textContent = lista;
}


function atendimentoUrgencia() {
    var nome = document.getElementById("inPaciente").value;


    pacientes.unshift(nome); //adiciona um nome ao final do vetor
    var lista = ""; //string p concatenar pacientes

    //percorre os elementos do vetor
    for (i = 0; i < pacientes.length; i++) {
        lista += (i + 1) + " ? " + pacientes[i] + "\n";

        /* 
        Observe que, dentro do laço for, o valor da variável i é adicionado
    a 1, pois caria estranho numerar a lista considerando a posição real dos elementos do vetor – 
    que começa por 0.
        */

    }
    outLista.textContent = lista;


    

}

function atenderPaciente() {
    //remove o paciente do inicio da fila (e obtem o nome)
    var atender = pacientes.shift();
    //exibe o nome do paciente em atendimento
    outAtendimento.textContent = atender;

    var lista = "";
    for (i = 0; i <pacientes.length; i++) {
        lista += (i + 1) + " - "+ pacientes[i] + "\n";
    }

    outLista.textContent = lista;


}



btAdd.addEventListener("click", adicionarPaciente);
btUrg.addEventListener("click", atendimentoUrgencia);
btAtender.addEventListener("click", atenderPaciente);