let t1 = parseFloat(prompt("Digite a primeira nota:"));
let t2 = parseFloat(prompt("Digite a segunda nota:"));
let p1 = parseFloat(prompt("Digite a terceira nota:"));

if(isNaN(t1) || isNaN(t2) || isNaN(p1)){
     alert("Adicione numeros válidos");
}else{
    let mediaDoAluno = (t1 + t2 + p1)/3;
    mediaDoAluno = parseFloat(mediaDoAluno.toFixed(2));
    if(mediaDoAluno < 5){
        alert("Reprovado");
    }else if(mediaDoAluno >= 5 && mediaDoAluno <= 7){
        alert("Recuperação");
    }else{
        alert("Parabens!");
    }
}