function soma(n1 , n2 , callback){
    if (isNaN(n1) || isNaN(n1)){
        callback();
    }else{        
     console.log(n1 + n2);
    }   
}
function testador(){   
    console.log(`Algum número digitado foi inválido`)
}
soma(1,3,testador);
soma('sd' , 3 , testador);
