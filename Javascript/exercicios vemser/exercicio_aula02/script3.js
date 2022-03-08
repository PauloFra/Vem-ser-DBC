var escolhaDaTabuada = parseInt(prompt("Você quer qual tabuada"));
var valorFixo = escolhaDaTabuada;
var valorDoResultado = 0;
for(let i = 0; i <= 10 ;i++ ){
    valorDoResultado = i*escolhaDaTabuada;
    console.log(i + ' X ' + valorFixo + ' = ' + valorDoResultado);
}