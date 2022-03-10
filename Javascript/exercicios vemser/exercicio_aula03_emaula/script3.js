function soma(n1 , n2){
    resultado = n1 + n2;
    return resultado;
}
function testador(n1 , n2){   
if (!isNaN(soma(n1 , n2)) ){
    //callback here
    console.log(`${soma(n1 , n2)}`)
}else{
    console.log(`Algum número digitado foi inválido`)
}
}
testador('dsdd22',2);
testador(6,2);
