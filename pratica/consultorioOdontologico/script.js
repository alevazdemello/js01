var pacientes = [];

function adicionar() {
    inPaciente = document.getElementById("inPaciente");
    nome = inPaciente.value;

    if (nome == "") {
        alert("Infome corretamente os dados")
        inPaciente.focus();
        return;
    }

    pacientes.push(nome);
    var lista = "";

    for (i = 0; i < pacientes.length; i++) {
        lista += (i + 1) + ". " + pacientes[i] + "\n";
    };

    document.getElementById("outLista").textContent = lista;

    inPaciente.value = "";
    inPaciente.focus();
}

function adicionarUrgencia() {
    inPaciente = document.getElementById("inPaciente");
    nome = inPaciente.value;

    pacientes.unshift(nome);
    var lista = "";

    for (i = 0; i < pacientes.length; i++) {
        lista += (i + 1) + ". " + pacientes[i] + "\n";
    };

    document.getElementById("outLista").textContent = lista;

    inPaciente.value = "";
    inPaciente.focus();
}

function atenderPaciente() {
    if (pacientes.length == 0) {
        alert("Não há pacientes na fila de espera.");
        inPaciente.focus();
        return;
    }
    //remove o paciente do inicio da fila e obtem seu nome
    var atender = pacientes.shift();
    outAtendimento.textContent = atender;

    var lista = "";
    for (i = 0; i < pacientes.length; i++) {
        lista += (i + 1) + ". " + pacientes[i] + "\n";
    }

    outLista.textContent = lista;
}

btAdd.addEventListener("click", adicionar);
btUrgencia.addEventListener("click", adicionarUrgencia);
btAtender.addEventListener("click", atenderPaciente);
