function testar(){

    var anuncio = prompt("Anuncio: ");
    var tam = anuncio.length;

    var numeroPalavras = 0;
/*basicamente esse for conta a quantidade de espaços, 
tendo esse valor, acrescenta 1 p obter o numero de palavras */

    for (var i = 0; i < tam; i++) {
        //loop percorre o anuncio, proucurando por espaços > " "
        if(anuncio.charAt(i) == " ") {
            numeroPalavras++;
        }
    }
    numeroPalavras += 1;
    
    document.getElementById("outRes").textContent = numeroPalavras;
}

btTeste.addEventListener("click", testar);
