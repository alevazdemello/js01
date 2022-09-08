let valores = [4, 5, 6, 90, 80, 50, 44, 51]
valores.sort()
console.log(valores)

for (let rihi = 0; rihi < valores.length; rihi++) {
  console.log(`A posição ${rihi} tem o valor ${valores[rihi]}`)
}

//neste caso, for foi usado criando a variável rihi;a variavel rihi receberia um elemento a cada posição, enquanto houvessem posições;
//esse é o código tradicional do percurso em vetores 

for (let pos in valores) {
  console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

//esse segundo ex é igual ao primeiro, porém com cod mais facil e otimizado

let posdois = valores.indexOf(50)
console.log(`O valor 50 está na posoção ${posdois}`)