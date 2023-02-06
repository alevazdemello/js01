function validarSenha() {
    inSenha = document.getElementById("inSenha");
    senha = inSenha.value;

    erros = [];

    if (senha.length < 8 || senha.length > 15) {
        erros.push("possuir entre 8 e 15 caracteres");
        inSenha.focus();
        alert;
    }

    if (senha.match(/[0-9]/g) == null) {
        erros.push(" possuir números (no mínimo 1)");
    }

    if (!senha.match(/[a-z]/g)) {
        erros.push(" possuir letras minúsculas (no mínimo, 1)");
    }

    if (!senha.match(/[A-Z]/g) || senha.match(/[A-Z]/g).length == 1) {
        erros.push(" possuir letras maiúsculas (no mínimo 2)")
    }

    if (erros.length == 0) {
        outRes.textContent = "Ok, senha válida!"
    } else {
        outRes.textContent = "Erro, a senha deve "+ erros.join(", ") + ".";
    }


 //   document.getElementById("outRes").textContent = senha;
}

btValidar.addEventListener("click", validarSenha);