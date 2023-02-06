function gerarEmail() {
    var inNome = document.getElementById("inNome");
    var nome = inNome.value;

    if (nome == "" || nome.indexOf(" ") == -1) {
        alert("Informe corretamente o nome completo do funcionário");
        inNome.focus();
        return;
    }

    var partes = nome.split(" ");
    var email = "";
    var tam = partes.length;


    for (var i = 0; i < tam - 1; i++) {
        email += partes[i].charAt(0);
    }

    email += partes[tam - 1] + "@empresa.com.br";

    document.getElementById("outRes").textContent = email;
}

btGerar.addEventListener("click", gerarEmail);
