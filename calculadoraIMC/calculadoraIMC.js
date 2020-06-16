function calcular(){

    var Peso = peso.value;
    var Altura = altura.value;
    var imc = Peso/(Altura*Altura);
    var mensagem = "";
    
    if(imc < 17) {mensagem="Você está muito abaixo do peso."}
    else if(imc >= 17 && imc < 18.49) {mensagem="Você está abaixo do peso."}
    else if(imc >= 18.5 && imc < 24.99) {mensagem="Você está no peso normal."}
    else if(imc >= 25 && imc < 29.99) {mensagem="Você está acima do peso."}
    else if(imc >= 30 && imc < 34.99) {mensagem="Você está com Obesidade I."}
    else {mensagem="Você está com Obesidade II."}
    
    resultado.innerHTML = 
    `
        Seu peso: ${Peso.replace('.',',')} kg. <br> 
        Você mede ${Altura.replace('.',',')} cm. <br>
        Seu IMC é ${imc.toFixed(2).replace('.',',')}. <br> 
        ${mensagem} <br>

    `
     
}

