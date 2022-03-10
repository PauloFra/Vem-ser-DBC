function numeroAleatorio(){
   let randomNumber =  Math.trunc(Math.random()*100+1);
   return randomNumber;
}


function geraNumeros(){
    var arrayAleatorio = [0];
    let count = 0;
    let randomNumber = 0;
    for(i = 0 ; count<10; i++){
        randomNumber = Math.trunc(Math.random()*50+1);
        if((randomNumber % 2 === 1 && randomNumber > 14 && randomNumber < 50) || (randomNumber % 6 === 0)){
            arrayAleatorio[count] = randomNumber;
            count++;
        }
    }
    return arrayAleatorio;
}

console.log(geraNumeros());
console.log(geraNumeros());
console.log(geraNumeros());

