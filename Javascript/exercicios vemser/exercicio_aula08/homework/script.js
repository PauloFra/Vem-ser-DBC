
const arrayDosFuncionario = [];
class funcionario{
    id;
    nome;
    nascimento;
    email;

    constructor(id , nome , nascimento ,email){
        this.id = id;
        this.nome = nome;
        this.nascimento = nascimento;
        this.email = email;
    }
}
var booleanDoEmail = false;
var booleanDoData = false;
var booleanDaSenha = false;
var booleanNome = false;
const validarEmail = (event) => {
    let spanEmail = document.getElementById('email-erro');
    let spanEmailAcerto = document.getElementById('email-acerto');
    spanEmail.classList.remove('d-none');
    const email = event.target.value;
    let arrEmail = [...email] 
    let validaPrimeiraLetra = (email[0] === email[0].toLowerCase())  ? true : false;
    let validaArroba = arrEmail.some(x => x === '@' );
    let validaPontoDepoisDoArroba = arrEmail.slice('@').some(x => x === '.');
    let validaPontoNoFim = (arrEmail[arrEmail.length-1] === '.') ? false : true ;
    let validaDominio = arrEmail.join('').includes('dbccompany')?true:false;
    let testeDaFuncao = validaPrimeiraLetra && validaArroba && validaPontoDepoisDoArroba && validaPontoNoFim && validaDominio;
    if(testeDaFuncao){
        spanEmailAcerto.classList.remove('d-none');
        spanEmail.classList.toggle('d-none');
    }else{
        spanEmailAcerto.classList.add('d-none');
        spanEmail.classList.remove('d-none'); 
    }
    booleanDoEmail = testeDaFuncao;
}
const validarSenha = (event) => {
    let spanSenha = document.getElementById('senha-erro');
    let spanSenhaAcerto = document.getElementById('senha-acerto');
    spanSenha.classList.remove('d-none');
    const input = event ? event.target : document.getElementById('senha-input');
    const { value: senha } = input;
    input.value = input.value.replaceAll(' ', '');
    let caracteresSenha = [...senha];
    let possuiLetraMinuscula = caracteresSenha.some( c => c.toLowerCase() === c);
    let possuiLetraMaiuscula = caracteresSenha.some( c => c.toUpperCase() === c);
    let possuiEspecial = caracteresSenha.some( c => c.toUpperCase() === c.toLowerCase() && isNaN(c));
    let possuiNumero = caracteresSenha.some( c => c.toUpperCase() === c.toLowerCase() && !isNaN(c));
    let peloMenosOito = senha.length >= 8;
    const ehValido = possuiLetraMinuscula && possuiLetraMaiuscula && possuiEspecial && possuiNumero && peloMenosOito;
    if(ehValido){
        spanSenhaAcerto.classList.remove('d-none');
        spanSenha.classList.toggle('d-none');
    }else{
        spanSenhaAcerto.classList.add('d-none');
        spanSenha.classList.remove('d-none');
    }
    booleanDoData = ehValido;
}
const adicionarMascaraData = (event) => {
    const dataDomEvent = event.target.value;
        const campoInput = document.getElementById('data-input');
        if(dataDomEvent.length === 2 ||dataDomEvent.length === 5){
            campoInput.value = campoInput.value + '/';
        }
        validarData(dataDomEvent);
}
const validarData = (data) => {
        let spanData = document.getElementById('data-erro');
        let spanDataAcerto = document.getElementById('data-acerto');
        spanData.classList.remove('data-erro');
        let hoje = moment(new Date); 
        let testaData = moment(data , 'DD/MM/YYYY');
        let testaDataFutura = testaData.isBefore(hoje);
        let dezoitoAnosAtras = moment().subtract(18 , 'years')
        let vinteEhSeisAnosAtras = moment().subtract(26 , 'years')
        let verificacaoIdade = (testaData.isBetween(vinteEhSeisAnosAtras , dezoitoAnosAtras))?true :false;
        const validadorGeralData = testaDataFutura && verificacaoIdade;
        if(validadorGeralData){
            spanDataAcerto.classList.remove('d-none');
            spanData.classList.toggle('d-none');
        }else{
            spanDataAcerto.classList.add('d-none');
            spanData.classList.remove('d-none');
        }
        booleanDaSenha = validadorGeralData;
    }
const validaNome = (event) =>{
    let spanNome = document.getElementById('nome-erro');
    let spanNomeAcerto = document.getElementById('nome-acerto');
    spanNome.classList.remove('nome-erro');
    let nome = event.target.value;
    let str = [...nome];
    
    let validaNomeArr = str.some(a => !isNaN(a));
    let validaNomeParteDois = str.some(a => a.toLowerCase() === a.toUpperCase());
    let validadorNome = !validaNomeArr && !validaNomeParteDois;
    booleanNome = validadorNome;
    if(validadorNome){
        spanNomeAcerto.classList.remove('d-none');
        spanNome.classList.add('d-none');
        
    }else{
        spanNomeAcerto.classList.add('d-none');
        spanNome.classList.remove('d-none');
    }
}
const validarCadastro = (event) => {
    event.preventDefault();
    if( booleanDoEmail && booleanDoData && booleanDaSenha && booleanDaSenha){
        geraFuncionario()
        console.log('Este Cadastro é Válido Sr(a)')
    }else{
        console.log('Este Cadastro é Inválido Sr(a)')
    }
}
var countId = 0;
const geraFuncionario = () => {
    countId++
    let nome = document.getElementById('nome-input').value
    let dataNascimento = document.getElementById('data-input').value
    let email = document.getElementById('email-input').value
    const subindoNoArray = new funcionario(countId ,nome , dataNascimento , email);
    arrayDosFuncionario.push(subindoNoArray) 
    //DOM >>>>>
    //append 
    //document.createElement
    //setAtribute ->seta qualquer atributo de uma tag
    //classList.add -> adiciona varias classes as tags
    const h4DaPage = document.getElementById('titulo-colab')
    h4DaPage.textContent = 'Funcionarios Cadastrados:'
    const divDaPage = document.getElementById('content-agile');
    const divPai = document.createElement('div');
    const Lista = document.createElement('ul');
    const ItemDaLista = document.createElement('li');
    const divNome = document.createElement('div');
    const divNacimento = document.createElement('div');
    const divDivEmail = document.createElement('div');
    const pNome = document.createElement('p');
    pNome.textContent = 'Nome:'
    const pFulano = document.createElement('p');
    pFulano.textContent = nome;
    const pNacimento = document.createElement('p');
    pNacimento.textContent = 'Nascimento:'
    const pData = document.createElement('p');
    pData.textContent = dataNascimento;
    const pEmail = document.createElement('p');
    pEmail.textContent = 'Email:'
    const pEmailDescricao = document.createElement('p');
    pEmailDescricao.textContent = email;
    

    divPai.setAttribute('id', 'containerDasDivs');
    divPai.classList.add("pb-5" ,"flex-column" ,"d-flex", "align-items-center", "justify-content-center");
    Lista.classList.add("w-50", "border", "border-primary", "rounded", "flex-column", "d-flex", "align-items-center", "justify-content-center");
    ItemDaLista.classList.add("w-100" ,"mt-2" ,"p-3" ,"d-flex", "align-items-center", "justify-content-between");
    
    divNome.append(pNome , pFulano);
    divNacimento.append(pNacimento , pData);
    divDivEmail.append(pEmail , pEmailDescricao);

    ItemDaLista.append(divNome, divNacimento, divDivEmail);

    Lista.append(ItemDaLista);
    
    divPai.append(Lista);

    divDaPage.append(divPai);
}

const mostrarNoConsole = () =>{
    console.table(arrayDosFuncionario)
}