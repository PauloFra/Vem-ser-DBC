
//json-server --watch db.json
class funcionario{
    nome;
    nascimento;
    email;
    senha;    

    constructor( nome , nascimento ,email,senha,){
        this.nome = nome;
        this.nascimento = nascimento;
        this.email = email;
        this.senha = senha;
    }
}
var testeLogin = false;
var booleanNome = false;
const arrayDosFuncionario = [];
//#region Validação Email
const validarEmail = () => {
    let emailDigitado = document.getElementById('email-input-registration').value;
    let listaCaracteres = emailDigitado.split(''); // [...emailDigitado]
  
    let emailSplit = emailDigitado.split('@');
    
    let possuiArroba = emailSplit.length > 1;
  
    let dominioEmail = possuiArroba ? emailSplit[1] : '';
    let dominioEmailSplit = dominioEmail.split('.');
  
    let possuiPontosNoDominio = dominioEmailSplit.length > 1;
  
    let possuiCaracteresEntrePontos = dominioEmailSplit.every( d => d.length > 1 );
  
    let comecaComLetra = listaCaracteres.length ? listaCaracteres[0].toUpperCase() !== listaCaracteres[0].toLowerCase() : false;
  
    let ehValido = possuiArroba && possuiPontosNoDominio && possuiCaracteresEntrePontos && comecaComLetra;
  
    // para setar o texto de erro em vermelho
    let erroEmail = document.getElementById('email-registration-error');
    erroEmail.setAttribute('class', ehValido ? 'd-none' : 'text-danger');
  
    return ehValido;
  }
  //#endregion Validação Email
  
  //#region Validação Senha
  const validarSenha = () => {
    let senhaDigitada = document.getElementById('password-input-registration').value;
    let listaCaracteres = senhaDigitada.split('');
  
    let letras = listaCaracteres.filter( char => char.toLowerCase() !== char.toUpperCase() );
  
    let possuiLetraMaiuscula = letras.some( l => l.toUpperCase() === l ); // "A".toUppercase() === "A"
    let possuiLetraMinuscula = letras.some( l => l.toLowerCase() === l );
  
    let possuiCharEspecial = listaCaracteres.some( char => char.toLowerCase() === char.toUpperCase() && isNaN(parseInt(char)) );
    let possuiNumero = listaCaracteres.some( char => char.toLowerCase() === char.toUpperCase() && !isNaN(parseInt(char)) );
  
    let possuiOitoCaracteres = senhaDigitada.length >= 8;
  
    let naoPossuiEspacos = !senhaDigitada.includes(' ');
  
    let ehValido = possuiOitoCaracteres && possuiLetraMaiuscula && possuiLetraMinuscula && 
        possuiCharEspecial && possuiNumero && naoPossuiEspacos;
  
    // para setar o texto de erro em vermelho
    let erroSenha = document.getElementById('password-registration-error');
    erroSenha.setAttribute('class', ehValido ? 'd-none' : 'text-danger');
  
    return ehValido;
  }
  //#endregion Validação Senha
  
  //#region Validação Data
  const validarData = () => { 
    let inputData = document.getElementById('date-input-registration');
    let dataDigitada = inputData.value;
  
    adicionarMascaraData(inputData, dataDigitada);
  
    let dataConvertida = moment(dataDigitada, 'DDMMYYYY');
  
    let dezoitoAnosAtras = moment().diff(dataConvertida, 'years') >= 18;
  
    // comparações de data - date1.isBefore(date2)  /  date1.isAfter(date2)  /  date1.isSameOrBefore(date2)  /  date1.isSameOrAfter(date2)
    let dataAnteriorHoje = dataConvertida.isBefore(moment());
  
    let ehValido = dataConvertida.isValid() && dataAnteriorHoje && dezoitoAnosAtras && dataDigitada.length === 10; // 10/05/2001
  
    // para setar o texto de erro em vermelho
    let erroData = document.getElementById('date-registration-error');
    erroData.setAttribute('class', ehValido ? 'd-none' : 'text-danger');
  
    return ehValido;
  }
  
  const adicionarMascaraData = (input, data) => {
    let listaCaracteres = [...data];
    
    let listaFiltrada = listaCaracteres.filter(c => !isNaN(parseInt(c)));
    if(listaFiltrada && listaFiltrada.length) {
        let dataDigitada = listaFiltrada.join('');
  
        const { length } = dataDigitada;
  
        switch(length) { 
            case 0: case 1: case 2:
                input.value = dataDigitada; 
                break;
            case 3: case 4:
                input.value = `${dataDigitada.substring(0, 2)}/${dataDigitada.substring(2, 4)}`;
                break;
            default:
                input.value = `${dataDigitada.substring(0, 2)}/${dataDigitada.substring(2, 4)}/${dataDigitada.substring(4, 8)}`;
        }
    }
  }
  //#endregion Validação Data
  
  
  const alternarClasses = (elemento, ...classes) => {
    classes.forEach( classe => {
      elemento.classList.toggle(classe);
    });
  }
  const validaNome = (event) =>{
    let spanNome = document.getElementById('nome-registration-error');
    spanNome.classList.remove('d-none');
    let nome = event.target.value;
    let str = [...nome];
    
    let validaNomeArr = str.some(a => !isNaN(a));
    let validaNomeParteDois = str.some(a => a.toLowerCase() === a.toUpperCase());
    let validadorNome = !validaNomeArr && !validaNomeParteDois;
    booleanNome = validadorNome;
    if(validadorNome){
        spanNome.classList.add('d-none');
        
    }else{
        spanNome.classList.remove('d-none');
    }
}
  
  const irPara = (origem, destino) => {
    const elementoOrigem = document.getElementById(origem);
    const elementoDestino = document.getElementById(destino);
  
    alternarClasses(elementoOrigem, 'd-none', 'd-flex');
    alternarClasses(elementoDestino, 'd-none', 'd-flex');
  }
  
  
  const validarLogin = () => {
    
    const valorEmail = document.getElementById('email-input-login').value;
    const valorSenha = document.getElementById('password-input-login').value;

    axios.get(`http://localhost:3000/colaboradores`)
    .then( (sucesso) =>
     sucesso.data.forEach(element =>{
      if(valorEmail == element.email && valorSenha == element.senha) {
      testeLogin = true;
      irPara('login', 'home');
      }

    })
    ).catch((erro) => {
      console.log('Ops Ocorreu um erro ');
    });
//    axios.get(`http://localhost:3000/colaboradores`)
//     .then( (sucesso) => {
//       sucesso.data.forEach( elemento => {
//         const div = document.createElement('div');
//         div.textContent = elemento.nome;
//         const container = document.getElementById('container');
//         container.append(div)
//       } )
//     }, (erro) => {
//       debugger
//     } );
  }
  const listarUsuarios = () => {
      const listaDeUsers = document.getElementById('user-list');
   
      
      axios.get('http://localhost:3000/colaboradores')
      .then((sucess) =>{
        

        sucess.data.forEach(element => {
        const Lista = document.createElement('ul');
        const ItemDaLista = document.createElement('li');
        const divNome = document.createElement('div');
        const divNacimento = document.createElement('div');
        const divEmail = document.createElement('div');
        const divPai = document.createElement('div')
        divPai.classList.add("pb-5" ,"flex-column" ,"d-flex", "align-items-center", "justify-content-center");
        Lista.classList.add("w-100", "border", "border-primary", "rounded", "flex-column", "d-flex", "align-items-center", "justify-content-center");
        ItemDaLista.classList.add("w-1000","mt-2" ,"p-3" , "align-items-center");
    
        const pFulano = document.createElement('p');
        const pNacimento = document.createElement('p');
        const pEmail = document.createElement('p');
        pFulano.textContent ='Nome: '+ element.nome;
        pNacimento.textContent ='dataDeNacimento: '+ element.nascimento ;
        pEmail.textContent = 'email: ' + element.email;

        // divNome.append(pFulano);
        // divNacimento.append(pNacimento);
        // divEmail.append(pEmail);
        ItemDaLista.append(pFulano,pNacimento,pEmail);
        Lista.append(ItemDaLista);
        divPai.append(Lista);
        listaDeUsers.append(divPai);
        console.log(element);
        console.log(element.nome);
      })
      }
      ).catch((erro) =>{
        console.log('Ops ,Encontramos algum erro')
      }
      )
    
      
    }  
  const validarCadastro = (event) => {
    event.preventDefault();
    let cadastroValido = validarData() && validarEmail() && validarSenha() && booleanNome;
    console.log(`Cadastro ${cadastroValido ? 'válido!' : 'inválido'}`);
  
    if(cadastroValido) {
      cadastrarUsuario(event);
    }
  }
  const excluirColaborador = () => {
  }
  var idC = 0;
  const cadastrarUsuario = (event) => {
    idC = idC + 1;
    // event.preventDefault();
    const valorNome = document.getElementById('nome-input-registration').value;
    const valorData = document.getElementById('date-input-registration').value;
    const valorEmail = document.getElementById('email-input-registration').value;
    const valorSenha = document.getElementById('password-input-registration').value;
    const instaciaFuncionario = new funcionario(valorNome,valorData,valorEmail,valorSenha);
    arrayDosFuncionario.push(instaciaFuncionario);
    axios.post('http://localhost:3000/colaboradores' , instaciaFuncionario)
    .then( (sucesso) =>{
        console.log('cadastrado com sucesso');
        sucesso.data.id
    })
    .catch((erro) => {
            console.log('Ops Ocorreu um erro ao cadastrar', erro);
        });
  }
    // AQUI PARA BAIXO SÃO SÓ EXEMPLOS DE COMO UTILIZAR O AXIOS
    // // PARA PUT E DELETE PRECISAMOS PASSAR TAMBÉM UM ID 
    // axios.put(`http://localhost:3000/colaboradores/1`, colaboradorAlterado)
    //   .then( (sucesso) => {
    //     debugger
    //   }, (erro) => {
    //     debugger
    //   } );
  
    // // DELETE exemplo
    // axios.delete(`http://localhost:3000/colaboradores/1`)
    //   .then( (sucesso) => {
    //     debugger
    //   }, (erro) => {
    //     debugger
    //   } );
  
  
//     axios.post(`http://localhost:3000/colaboradores`, colaborador)
//       .then( (sucesso) => {
//         // data possui o objeto inserido, no caso do post
//         sucesso.data.id
  
//         const li = document.createElement('li');
//         li.setAttribute('id', `colab-${sucesso.data.id}`);
//         // debugger
//       }, (erro) => {
//         // debugger
//       } );
//   }; 
  
  
  
//   // VOU FAZER UM GET INICIAL AQUI
//   axios.get(`http://localhost:3000/colaboradores`)
//     .then( (sucesso) => {
//       sucesso.data.forEach( elemento => {
//         const div = document.createElement('div');
//         div.textContent = elemento.nome;
//         const container = document.getElementById('container');
//         container.append(div)
//       } )
//     }, (erro) => {
//       debugger
//     } );
  
  