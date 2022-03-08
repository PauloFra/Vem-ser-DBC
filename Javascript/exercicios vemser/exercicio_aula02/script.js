// alert((1000/100)*1.5);
var salario = 1000.00;
var aumentoAnual = 1.5;
var salarioInicial = 0;

for(let i = 2018 ; i <= 2022; i++){
    salario = (salario/100)*aumentoAnual + salario;
    aumentoAnual = aumentoAnual*2;
    console.log('O salário do funcionario foi em um valor de '+ salario.toFixed(2) + ' em ' + i);
}