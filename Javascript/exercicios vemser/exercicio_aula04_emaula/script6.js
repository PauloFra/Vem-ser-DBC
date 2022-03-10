
function imprimirCombinacoes(string) {
    let possibilidades = [];
    for(let i = 0; i < string.length; i++) {
      let letra = string[i];
      let letras = string.split(letra);
      for(let j = 0; j < letras.length; j++) {
        let possibilidade = letra + letras[j];
        possibilidades.push(possibilidade);
      }
    }
    return possibilidades;
  }
  
  console.log(imprimirCombinacoes("tri"));