// 1 - Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
alert('Bem-vindo ao calculo de IMC');

let altura = prompt('Digite sua altura.');
let peso = prompt('Digite seu peso');

function massaCorporal(altura, peso) {
    altura = altura * altura;
    return peso / altura;
}

let resultadoIMC = massaCorporal(altura, peso);
console.log(resultadoIMC);
alert(`O resultado do calculo do IMC é ${resultadoIMC}`);

// 2 - Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
alert('Bem-vindo ao calculo de fatorial');

let numero = prompt('Digite um número de 1 a 20');
let result = numero;
let resultadoFatorial = 0;

while (numero > 0){
    result = result * (numero - 1);
    resultadoFatorial = (resultadoFatorial + result);
    console.log(`!${numero}`);
    console.log(resultadoFatorial);
    numero = numero - 1;
}