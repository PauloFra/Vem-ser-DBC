// function inverteNumeros(number){
//     let array = [];
//     let arrayInvertido = [];
//     let numberVar = '';
//     array = number.toString().split('');
//     console.log(array.lenght);  
//     for(let i = 2 ; i >= 0 ;i--){
//         arrayInvertido.push(array[i]);
//     }
//     return arrayInvertido;
// }
// console.log(inverteNumeros(234));
const invertNumber = num =>{
    let numInvertido = 0;
    while(num > 0){
        let resto = num % 10;
        numInvertido = numInvertido * 10 + resto;
        num = Math.floor(num / 10);
    }
    return numInvertido;
}

console.log(invertNumber(370914));