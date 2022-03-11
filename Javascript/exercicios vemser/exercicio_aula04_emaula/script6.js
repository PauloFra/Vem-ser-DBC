
// function imprimirCombinacoes(string) {
//     let possibilidades = [];
//     for(let i = 0; i < string.length; i++) {
//       let letra = string[i];
//       let letras = string.split(letra);
//       for(let j = 0; j < letras.length; j++) {
//         let possibilidade = letra + letras[j];
//         possibilidades.push(possibilidade);
//       }
//     }
//     return possibilidades;
//   }
  
//   console.log(imprimirCombinacoes("tri"));
const imprimirCombinacoes = str => {
  let arrayStr = str.split('');
  let arrayCombinations = [];
  let aux = '';
  for(let i = 0; i < arrayStr.length; i++) {
    aux += arrayStr[i];
    arrayCombinations.push(aux)
    for(let j = 0; j < arrayStr.length; j++) {
      if(i != j) {
        aux += arrayStr[j]
        arrayCombinations.push(aux)
      }
    }
    aux = arrayStr[i]
    for(let k = (arrayStr.length - 1); k >= 0; k--) {
      if(i != k) {
        aux += arrayStr[k]
        arrayCombinations.push(aux)
      }
    }
    aux = '';
  }
  return arrayCombinations;
}

console.log(imprimirCombinacoes("tri"));