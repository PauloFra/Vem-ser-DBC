var somaDosPares = 0;
for(let i = 1 ; i <= 100 ;i++){
    if(i % 2 === 0){
        somaDosPares = somaDosPares + i;
        console.log(i)
    }
}
alert(somaDosPares);