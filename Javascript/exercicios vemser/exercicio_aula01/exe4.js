let n1 = parseFloat(prompt("digite o primeiro numero:"));
let n2 = parseFloat(prompt("digite o segundo numero:"));
let opSinal = prompt("digite o sinal da operação / * + -");


if( isNaN(n1) || isNaN(n2) ){
    alert("Digite números válidos");
}
else if( n1 === 0 || n2 === 0 && opSinal === "/"){
    alert("Impossivel dividir por 0")
}
else if(opSinal == "+" || opSinal == "-" || opSinal == "/" || opSinal == "*") {    
    alert(eval(n1 + opSinal + n2));
}else{
    alert("Digite sinais válidos");
}