var isValueEmpty;
let isFriday = confirm("Hoje é sexta-feira?");
let isTwoGreaterThanFour = 2 > 4;
let valorDigitado = prompt("Digite uma informação");
if(valorDigitado === null || valorDigitado === "" || valorDigitado === undefined){
    isValueEmpty = true;  
}else{
    isValueEmpty = false;
}
alert(isValueEmpty);