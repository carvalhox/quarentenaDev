// Cálculo do valor da corrida
// 2 + km * 1,4 + min * 0,26 

function calcular() {
    var km = inputDistancia.value
    var min = inputTempo.value
    var valorCorrida = 2 + km * 1.4 + min * 0.26 
    botaoCalcular.innerHTML = ("Valor da corrida: R$ " + valorCorrida.toFixed(2).replace('.',','))
    
  }
  
  