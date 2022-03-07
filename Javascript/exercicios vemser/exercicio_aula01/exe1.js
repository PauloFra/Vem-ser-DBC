
let yesOrNot = prompt("Digite sim ou não");

if(yesOrNot.toLowerCase() === "sim"){
    alert("Parabéns");
}
else if(yesOrNot.toLowerCase() === "não"){
    let userText = prompt("Informe algum texto:")
    alert("O que você escreveu foi: " + userText);
}
else{
    confirm("Você tem noção do seus atos?")
}