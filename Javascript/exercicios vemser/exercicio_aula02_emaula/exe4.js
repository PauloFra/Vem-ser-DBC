

var pergunta = parseInt(prompt("1 - Continuar perguntando / 2 - Parar de perguntar"));

if(pergunta === 1){
    while(pergunta === 1){
        pergunta = 0;
        pergunta = parseInt(prompt("1 - Continuar perguntando / 2 - Parar de perguntar"));
    }
}else if(pergunta === 2){
}else{
    alert("Erro!");
    pergunta = parseInt(prompt("1 - Continuar perguntando / 2 - Parar de perguntar"));
}
