var booleanDoEmail = false;
var booleanDoData = false;
var booleanDaSenha = false;
const validarEmail = (event) => {
    let spanEmail = document.getElementById('email-erro');
    let spanEmailAcerto = document.getElementById('email-acerto');
    spanEmail.classList.remove('d-none');
    const email = event.target.value;
    let arrEmail = [...email] 
    let validaPrimeiraLetra = (arrEmail[0].toLowerCase() !== arrEmail[0].toUpperCase() && isNaN(arrEmail[0])) ? true : false;
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
const validarCadastro = (event) => {
    event.preventDefault();
    if( booleanDoEmail && booleanDoData && booleanDaSenha){
        console.log('Este Cadastro é Válido Sr(a)')
    }else{
        console.log('Este Cadastro é Inválido Sr(a)')
    }
}