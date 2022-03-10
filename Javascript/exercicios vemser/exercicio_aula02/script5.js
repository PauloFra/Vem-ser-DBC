var segundosCompletos = [0]
for(i = 0 ;i <=60 ;i++){
        if(i < 10){
        segundosCompletos[i] = "0"+ i;    
        }else{        
        segundosCompletos[i] = i;
    }   
 }
var contador = 0;
var key = setInterval(function() {
    contador++;
    console.log(segundosCompletos[contador]);   
    if(segundosCompletos[contador] === 60){
        clearInterval(key);
    } 
}, 1000);

