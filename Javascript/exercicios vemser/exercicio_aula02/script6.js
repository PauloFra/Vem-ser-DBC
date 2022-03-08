
var array = [0];
var i = 0;
var somaTotal = 0;
var inserir = confirm("Inserir número / Finalizar");
if(inserir){
    var qtdNumero = parseInt(prompt("Deseja inserir quantos numeros?"));
    do{
        array[i] = parseInt(prompt("insira um numero"));
        i++
     }while( i < qtdNumero );
     for(numero of array){
         somaTotal = somaTotal + numero;        
     }
     console.log(somaTotal);     
}