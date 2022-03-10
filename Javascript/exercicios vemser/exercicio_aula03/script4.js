var arrayComum =  [ 'a', 4, 'Tiago', 187 ];
function adiciona(element){
    return arrayComum.push(element);
}
function removePrimeiroDaLista(){
    return arrayComum.shift();
}
function removeUltimoDaLista(){
    return arrayComum.pop();
}
function removeDoArray(busca){
    if(arrayComum.indexOf(busca) > 0){
        let indice = arrayComum.indexOf(busca);
        arrayComum.splice(indice, 1);
        alert(arrayComum);
    }else{
        alert('Esse elemento não existe nesta lista')
    }
}
removeDoArray('Tiago');