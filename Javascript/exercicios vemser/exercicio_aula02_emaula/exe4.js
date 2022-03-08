

var pergunta = parseInt(prompt("1 - Continuar perguntando / 2 - Parar de perguntar"));

pergunta === 2 
?alert("OK")
:alert("Erro");
pergunta = parseInt(prompt("1 - Continuar perguntando / 2 - Parar de perguntar"));

while(pergunta === 1){
    pergunta = 0;
    pergunta = parseInt(prompt("1 - Continuar perguntando / 2 - Parar de perguntar"));
}