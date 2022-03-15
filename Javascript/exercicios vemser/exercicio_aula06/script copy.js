let arrayColabora = [];
let add = [];

class Colaboradores {
    id;
    nome;
    marcacoesPonto;
  
    constructor( idParam , nomeParam, ) {
      this.id = idParam;
      this.nome = nomeParam;

    }
  }
  var idCount = 0;  
  const addNoColaboradores  = () =>{
    let nome = prompt('Nome do colaborador');
    idCount++;
    const add = new Colaboradores(idCount , nome );
    arrayColabora.push(add);
} 
  
  const marcarPontos = (id) => {
    let dia = prompt('dia do ponto');
    let hora = prompt('hora do pontO?')
    if(arrayColabora[id].marcacoesPonto === undefined){
      arrayColabora[id].marcacoesPonto = [];
    }
    arrayColabora[id].marcacoesPonto.push('dia do ponto ' + dia + ' hora do ponto '+ hora +' horas');
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
      console.log('Ponto marcado para o colaborador ' +   arrayColabora[id].nome); 
    }
    if(comandoPrompt == '3'){
     arrayColabora.forEach(element => {
       console.table('Colaborador(a) ' + element.nome);
     });
    }
    if(comandoPrompt == '4'){
      arrayColabora.forEach(element => {
        if(element.marcacoesPonto === undefined){
          return console.table('O colaborador ' + element.nome + ' ainda não marcou ponto')
        }
      });
    }

}while(comandoPrompt !== '9')
