let isFriday = Boolean;
let isTwoGreaterThanFour = Boolean;
let isValueEmpty = Boolean;

isFriday = prompt("Hoje é sexta-feira?");

isTwoGreaterThanFour = 2 > 4;

isValueEmpty = prompt("Digite uma informação");

if(isValueEmpty === null){
    isValueEmpty = null;
}else if(isValueEmpty === ""){
    isValueEmpty = "";
}
else if(isValueEmpty === undefined){
    isValueEmpty = undefined;
}
alert(isValueEmpty);