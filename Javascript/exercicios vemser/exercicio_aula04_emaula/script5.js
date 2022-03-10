function contaLetras(array){
    let arrLetra = array.split('');
    let countVogal = 0;
    let countConsoante = 0;
    for(let i = 0 ; i <arrLetra.length;i++){
        if(arrLetra[i].toLowerCase().charCodeAt() >= 97 && arrLetra[i].toLowerCase().charCodeAt() <= 122 ){
            if(arrLetra[i] === 'a' || arrLetra[i] === 'e' || arrLetra[i] === 'i' || arrLetra[i] === 'o' ||arrLetra[i] === 'u'){
                countVogal++;
            }else{
                countConsoante++;
            }
       }
    }
    return console.log(` A string '${array}' tem ${countVogal} vogal e ${countConsoante} consoantes`);
}
contaLetras('Oi, tenho 5 anos de idade!!! ;D');





// function contarVogaisConsoantes(string) {
//     let vogais = 0;
//     let consoantes = 0;
//     let lower = string.toLowerCase();
//     for(let i = 0; i < lower.length; i++) {
//       let letra = lower[i];
//      if((letra.charAtCode() > 65 && letra.charAtCode() < 90 )||(letra.charAtCode() > 65 && letra.charAtCode() < 172 )){
//         if(letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
//             vogais++;
//           } else {
//             consoantes++;
//           }

//      }
//     }
//     return `A string "${string}" tem ${vogais} vogais e ${consoantes} consoantes`;
//   }
  
//   console.log(contarVogaisConsoantes("Oi, tenho 5 anos de idade!!! ;D"));