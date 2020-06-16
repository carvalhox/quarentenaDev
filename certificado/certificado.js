function gerar() {
    contador = 1000000;
    while(contador>0){
      contador=contador-1;
      htmlDoCertificado = emitirCertificado(inputNome.value);
     
    }
    
        nomeLinks = [
          "Calculador de Corrida",
          "Currículo",
          "Pokébola",
          "Ficha de Academia",
          "Calculadora de IMC",
          "Sorteio Loteria",
          "Botão de Likes"
        ]

        listaLinks = [
          "https://codepen.io/laisecrv/pen/vYLLBMy",
          "https://codepen.io/laisecrv/pen/RwrrwBM",
          "https://codepen.io/laisecrv/pen/ExPPaXb",
          "https://codepen.io/laisecrv/pen/KKVVREN",
          "https://codepen.io/laisecrv/pen/rNxxrxg",
          "https://codepen.io/laisecrv/pen/NWxxBLe",
          "https://codepen.io/laisecrv/pen/WNrwxVm"
        ]
    
      contadorLinks = 0;   
      linksComHTML = " ";
      while(contadorLinks < listaLinks.length){
        
        texto = nomeLinks[contadorLinks]
        link = listaLinks[contadorLinks]
        linksComHTML = `<p><li>${texto}:  ${link}</li></p>`+ linksComHTML;
        
        contadorLinks++;
      } 
    
    document.body.innerHTML = 
      `${htmlDoCertificado}
      <ol>
        ${linksComHTML}
      </ol>
      `
      print()
}
  