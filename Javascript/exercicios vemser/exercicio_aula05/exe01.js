let arrTeste = [34,12,4,2,12,3,3,3,2,1];
let arrString = ['AAA','VVV','BBB', 222];
let buscador = array.find( (n) => n > 2 );
function testaArray(array){
   let buscador = array.find( (n) => n > 2 );
   let inclui = array.includes(32);
   let adicionar = array.map((n) => n*2);    
   console.log(buscador);
   console.log(inclui);
   console.log(adicionar);
}

console.log(testaArray([0,34,12,4,2,12,3,3,3,2,1]));
let clientes = [{nome:'tiago'} , {nome:'Joãozinho'},{nome:'Josnel'}];
let tes = clientes.find( (nome) => nome == 'tiago' );

console.log(clientes[1]);
let users = clientes.map(cliente => {
        return cliente.nome
    })
    
    let ultimoIndice = arrTeste.length-1;
  
    console.log(ultimoIndice);
    console.log(users);
    arrTeste.forEach( (numero , i) =>{
    console.log('Esse é o valor do array :'+ numero +' e esse é o índice dele'+ i);
    })

arrTeste.splice(9,1);

    arrTeste.forEach((n ) =>{
        
    })

    let novoArrFilter = arrTeste.filter((numero) =>{
        return numero;
    });
    
 
    console.log(novoArrFilter);
    // alert(arrTeste.every(e => e > 0))

    for(caso of arrString){
        if(caso.toString().toLowerCase() === caso.toString().toUpperCase()){
            console.log(caso + ' Não é uma Letra');
        }
    }
    //soma de arrays
    var soma = arrTeste.reduce((valorAnterior , valorAtual) =>{
        return valorAnterior + valorAtual
    })
    console.log(soma)
    //soma de valores de um objeto
    let produtos = [{preco:522}, {preco:422}, {preco:222}];
    produtos.reduce( (valorAnt , valorAt) =>{ 
        return valorAnt + valorAt.preco
    }),0;

    