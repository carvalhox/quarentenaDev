function criar(){

  var nomeCompleto = inputNome.value;
  var dataNascimento = inputNascimento.value;

  var temCondicao  = document.getElementById("condicao").value; // pega o valor do select com id "condicao"
  var precisa = document.getElementById("acompanhamento").value; // pega o valor do select com id "acompanhamento"

  if(temCondicao=="sim"){condicao = "Sim"}
  else {condicao = "Não"}

  if(precisa=="sim"){acompanhamento = "Sim"}
  else {acompanhamento = "Não"}

  document.getElementById("resultado").style.border = '2px dotted lightgray';

  ficha.innerHTML = "Ficha"
  
  fichaCompleta.innerHTML = 
  `
    
    <h4>Nome Completo:</h4> ${nomeCompleto} 
    <h4>Data Nascimento:</h4> ${dataNascimento}
    <h4>Tem condição pré-existente? </h4> ${condicao}
    <h4>Precisa de acompanhamento médico? </h4> ${acompanhamento}
  `
 
   
}
