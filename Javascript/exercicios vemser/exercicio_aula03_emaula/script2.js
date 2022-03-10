function modificaTexto(str){
    return str.trim().toUpperCase();
}
console.log(modificaTexto('      Oi, essa é uma   string   qualquer   '));
// function ajustaTexto(texto){
//     let txt = modificaTexto(texto);
//     var array = [];
//     var novoArr = [];
//     txt = txt.split(" ");
//     for(i = 0;i < txt.length; i++){
//         if(txt[i] !== ' ' || txt[i] !== '' ){
//             novoArr[i] = txt[i] + ''; 
//         }
//     }
//     array = novoArr.filter(String).join(' ');
//     return console.log(array); 
// }
// ajustaTexto('      Oi, essa é uma   string     qualquer   ');
function ajustaTexto(str){
    let txt = str.trim();
    var novoArr = [];
    let contador = 0;
    txt = txt.split(" ");
    for(i = 0;i < txt.length; i++){
        if(txt[i] !== ''){
            contador++;
            novoArr[contador] = txt[i] ; 
        }
    }
   return console.log(novoArr.join(' '));
}
ajustaTexto('      Oi, essa é uma         string          qualquer   ');