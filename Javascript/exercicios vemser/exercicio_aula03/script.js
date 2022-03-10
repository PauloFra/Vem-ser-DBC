function funcaoRemoveCaracterDoArray(parametro, arr){
    var arrayResultante = [0];
    let count = 0;
    //necessidade do count para adicinar ao arrayresultante em posições exatas e nao dependetes do paramentro arr
    for(i = 0 ;i < arr.length ;i++){
        conteudo = arr[i];
        if(conteudo !== parametro){
            arrayResultante[count] = conteudo;
            count++
        }
    }
    console.log(arrayResultante);
}

funcaoRemoveCaracterDoArray('a',['c', 'a', 'texto', 'a'] );