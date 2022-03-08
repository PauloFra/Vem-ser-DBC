var escolhaDoUsuario = prompt("Escolha uma das opções do menu: para Fazer Checkin digite 1 , para Fazer Checkout digite 2, para Estender hospedagem digite 3 , para Sair digite 4");
switch (escolhaDoUsuario){
    case '1':
        alert("Boas Vindas!");
    break
    case '2':
        let simDoUsuario = confirm("Voce tem certeza disso?");
            alert("Despedidas");
    break
    case '3':
        let quantosDias = parseInt(prompt("Quantos dias deseja estender sua hospetagem?"));
        if(!isNaN(quantosDias)){
            alert("Sucesso! sua hospedagem foi estendida em "+ quantosDias +" dias!");
        }else{
            alert("Informe corretamente os dias")
        }
    break
    case '4':
        alert("Ok")    
    break
    default:
    alert("Opção inválida");
}