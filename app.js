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
let result = 0;
let contador = numero - 1;
let iniciar = true;

while (contador > 0){
    result = result == 0 ? numero * contador : result * contador;
    mensagem();
    contador = contador - 1;
    iniciar = false;
}

function mensagem() {
    return iniciar == true ? console.log(`Fatorial de !${numero}: ${numero} * ${contador} = ${result}`)
        :    console.log(`Fatorial de !${numero}: ${result} * ${contador} = ${result}`);
}

console.log(`Ao final o fatorial de !${numero} é ${result}`);