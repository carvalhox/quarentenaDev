function sortear(){
  
    var numero = prompt("Digite um número de 0 a 1000: ");
    var sorteado =  Math.floor(Math.random()*1000);
    if (numero == sorteado) {
       resultado.innerHTML = 
            ` 
            Número escolhido:  ${numero}. Número sorteado: ${sorteado}. Você ganhou o sorteio. Parabéns!
            `
    } else {
       resultado.innerHTML = 
            ` 
            Número escolhido:  ${numero}. Número sorteado: ${sorteado}. Que pena.. Não foi dessa vez..  =(
            `
    } 
  }