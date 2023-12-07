// 1 - Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
let altura = 1.65;
let peso = 65;

function massaCorporal(altura, peso) {
    altura = altura * altura;
    return peso / altura;
}

console.log(massaCorporal(altura, peso));