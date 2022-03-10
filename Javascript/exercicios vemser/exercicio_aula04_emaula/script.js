const isPositive = (number) => number >  0;
const randomNumber = () => Math.round( Math.random( ) * 10 );
let teste = setInterval(
    () => console.log('apenas uma mensagem 5 segundos atrasada')
    , 5000);
const criarMensagemDeOla = () => 'Olá, seja bem vindo!';

alert(isPositive(2));
alert(randomNumber());
alert(teste);
console.log(criarMensagemDeOla());