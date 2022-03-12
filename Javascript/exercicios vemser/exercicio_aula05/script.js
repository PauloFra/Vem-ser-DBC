let descricao = 'Arroz'
let preco = 12;
let count = 0;

var listaDeProduto = [];
let comandosDoPrompt;
do{
comandosDoPrompt = prompt('O que o senhor deseja: 1-Adicionar Itens a lista de produtos 2-Remover Itens da lista 3-Encontrar produto pelo código, 4-Imprimir no console em tabela ;  5-Verificar o total de patrimônio da loja (preço total de todos os produtos)  9-sair do programa ');

    if(comandosDoPrompt === '1' ){
        listaDeProduto[count] = {
            id:count ,
            descricao:prompt('Qual Seria o Nome do Produto?'),
            preco:parseInt(prompt('E Qual o valor?'))
        }
        count++;
    }
    if(comandosDoPrompt === '2' ){
        console.table(listaDeProduto);
        let indice = parseInt(prompt('Qual o indice(index) do registro que você deseja apagar?'))
        listaDeProduto.splice(indice,1)
        console.table(listaDeProduto);
    }
    if(comandosDoPrompt === '3'){
        let indice = parseInt(prompt('Qual o indice(index) do registro que você deseja encontrar?'));
        let valor = listaDeProduto[indice];
        console.table(valor);
    }
    if(comandosDoPrompt === '4'){
        let promptInterno = parseInt(prompt('Deseja imprimir em table: 1-Produtos Cadastrados , 2-Descrições dos produtos cadastrados ou 3-Somente um produto com a descrição desejada'));
        if(promptInterno == '1'){
            console.table(listaDeProduto);            
        }
        if(promptInterno == '2'){
            let exibeDesc = listaDeProduto.map(x => {
                return x.descricao
            })  
            console.table(exibeDesc);         
        }
        if(promptInterno == '3'){
            let str = prompt('Qual a descrição desejada?')
            const found = listaDeProduto.find(y =>{
                 y.descricao === str;
                 return y.descricao + y.preco;
            });
            console.table(found);
        }
    }
    if(comandosDoPrompt === '5'){
        var somaTotalDosProdutos = listaDeProduto.reduce((a, b) => a + b.preco, 0);
        if(isNaN(somaTotalDosProdutos)){
            console.log('ERRO! , algum produto não está com um valor válido')
        }else{
        console.table(`A soma total dos preços está no valor de $${somaTotalDosProdutos}`);
        }
    }    
}while(comandosDoPrompt !== '9')





