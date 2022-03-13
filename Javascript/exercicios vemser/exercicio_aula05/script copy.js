let descricao = 'Arroz'
let preco = 12;
let count = 0;

var listaDeProduto = [];
let comandosDoPrompt;
do{
comandosDoPrompt = prompt('O que o senhor deseja:\n 1-Adicionar Itens a lista de produtos \n 2-Remover Itens da lista \n 3-Encontrar produto pelo código \n 4-Imprimir no console em tabela \n 5-Verificar o total de patrimônio da loja  \n 9-sair do programa ');

    if(comandosDoPrompt === '1' ){
        let nomeDaDescricao = prompt('Qual o nome do produto?');
        let valorDoPreco = parseFloat(prompt('Qual o valor do produto?'));
        if(!isNaN(valorDoPreco)){
        listaDeProduto[count] = {
            id:count ,
            descricao:nomeDaDescricao,
            preco:valorDoPreco
        }
        console.log('Produto Cadastrado com sucesso!');
        }else{
            alert('Ops, Cadastre valores válidos')
        }

        count++;
    }
    if(comandosDoPrompt === '2' ){
        if(listaDeProduto.length >= 1 ){
        console.table(listaDeProduto);
        let indice = parseInt(prompt('Qual o indice(id) do registro que você deseja apagar?'))
        listaDeProduto.splice(indice,1)
        console.log('Produto Excluído com sucesso!');
        }else{
        alert('Ops,Cadastre ao menos um produto para poder usar essa funcionalidade')
        }
    }
    if(comandosDoPrompt === '3'){
        let indice = parseInt(prompt('Qual o indice(id) do registro que você deseja encontrar?'));
        let valor = listaDeProduto[indice];
        console.table(valor);
    }
    if(comandosDoPrompt === '4'){
        let promptInterno = parseInt(prompt('Deseja imprimir em table:\n 1-Produtos Cadastrados \n 2-Descrições dos produtos cadastrados \n 3-pesquisar por descrição especifica'));
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
            let desc;
            let varDesc = [];
            let c = 0;
            for(i = 0;i<listaDeProduto.length; i++ ){
            if(listaDeProduto[i].descricao.includes(str)){
                varDesc[c] = {
                    desc:listaDeProduto[i].descricao,
                    preco:listaDeProduto[i].preco
                }
                c++
            }    
          }
          console.table(varDesc);
        }
        
    }
    if(comandosDoPrompt === '5'){
        var somaTotalDosProdutos = listaDeProduto.reduce((a, b) => a + b.preco, 0);
        if(listaDeProduto.length >= 2){
            if(isNaN(somaTotalDosProdutos)){
                console.log('ERRO! , algum produto não está com um valor válido')
            }else{
            console.table(`A soma total dos preços está no valor de $${somaTotalDosProdutos}`);
            }
        }else{
            alert('Cadastre ao menos 2 produtos para executar essa funcionalidade');
        }
    }  
   
}while(comandosDoPrompt !== '9')





