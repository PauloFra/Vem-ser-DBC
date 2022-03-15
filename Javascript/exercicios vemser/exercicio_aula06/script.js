let arrayColabora = [];
let add = [];

class Colaboradores {
    id;
    nome;
    marcacoesPonto = [];
  
    constructor( idParam , nomeParam, ) {
      this.id = idParam;
      this.nome = nomeParam;
    }
  }
  var idCount = 0;  
  const addNoColaboradores  = () =>{
    let nome = prompt('Nome do colaborador');
    if(nome.toLocaleUpperCase === nome.toLocaleLowerCase ){
      alert('Insira valores válidos')
    }else{
    idCount++;
    const add = new Colaboradores(idCount , nome );
    arrayColabora.push(add);
    }
  } 
  
  const marcarPontos = (id) => {
    let dia = parseInt(prompt('dia do ponto'));
    let hora = parseInt(prompt('hora do ponto?'));
    let colaborador = arrayColabora.find(colaborador => colaborador.id == id);
    colaborador.marcacoesPonto.push('dia: '+ dia +'hora: '+ hora);
    console.log('Ponto marcado para o colaborador ' + arrayColabora.find(colaborador => colaborador.id == id).nome); 
  } 



let comandoPrompt;
    do{
    comandoPrompt = prompt(' 1 - Cadastrar Colaborador;\n 2 - Marcar Ponto;\n 3 - Ver Lista de Colaboradores;\n4 - Ver Lista de Colaboradores Que Ainda Não Marcaram o Ponto; \n9 - Encerrar;');
    if(comandoPrompt == '1'){
        addNoColaboradores();    
        console.log('colaborador adicionado'); 
    }
    if(comandoPrompt == '2'){
      console.table(arrayColabora);
      let id; 
      id = parseInt(prompt('Qual o id do colaborador que deseja marcar ponto')) 
      marcarPontos(id);
    
    }
    if(comandoPrompt == '3'){
     arrayColabora.forEach(element => {
       console.table('Colaborador(a) ' + element.nome);
     });
    }
    if(comandoPrompt == '4'){

      let arrayFiltered = arrayColabora.filter(element => element.marcacoesPonto === undefined)
      console.log(arrayFiltered);
      }
             
      }
    
    while(comandoPrompt !== '9')
