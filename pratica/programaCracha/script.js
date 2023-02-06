function gerarCracha() {
    inNome = document.getElementById("inNome");
    nome = inNome.value;

    if (nome == "" || nome.indexOf(" ") == -1) {
        alert("Informe o nome completo do participante");
        inNome.focus();
        return;
    }

    var priEspaco = nome.indexOf(" ");
    var ultEspaco = nome.lastIndexOf(" ");

    var cracha = nome.substr(0, priEspaco) + nome.substr(ultEspaco);

    document.getElementById("outRes").textContent = "Crachá: " + cracha;
}

btGerar.addEventListener("click", gerarCracha);
