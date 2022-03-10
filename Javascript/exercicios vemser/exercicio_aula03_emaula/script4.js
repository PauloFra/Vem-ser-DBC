
function buscador(arrMain , elemento){
    if(arrMain.indexOf(elemento) > 0){
        var posicao = arrMain.indexOf(elemento);
        console.log("O elemento Existe na posicao " + posicao);
    }else{
        console.log("O elemento não existe no array");
    }
}
buscador(['a', 'cachorro', 255],'cachorro');
buscador( ['a', 'cachorro', 255], 'abacate');