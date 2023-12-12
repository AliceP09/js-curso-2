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

// 3 - Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.
alert('Bem-vindo ao calculo de conversão de dólar para reais');

let valorDolar = prompt('Digite o valor em dólar');
let cotacaoDolar = 4.80;
let resultReais;

alert(`O resultado da conversão de dólar para real é R$ ${converterDolarReais(valorDolar, cotacaoDolar)}`);

function converterDolarReais(valor, cotacao) {
    return parseFloat(valor * cotacao).toFixed(2);
}

// 4 - Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
alert('Bem-vindo ao calculo da area e do perímetro de uma sala retangular');
let alturaSala = 0;
let larguraSala = 0;

alturaSala = prompt('Digite a altura da sala');
larguraSala = prompt('Digite a largura da sala');

areaPerimetro(alturaSala, larguraSala);

function areaPerimetro(altura, largura) {
    let perimetro = 2 * (Number(altura) + Number(largura));
    let area = altura * largura;
    return alert(`O valor da área é de ${area} e o valor do perímetro é de ${perimetro}`);
}

// 5 - Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
alert('Bem-vindo ao calculo da área e perímetro de uma sala circular');
let raioSalaCircular = prompt('Digite o raio da sala');
let valorPI = 3.14;

areaPerimetroSalaCircular(raioSalaCircular, valorPI);

function areaPerimetroSalaCircular(raio, valorPI) {
    let areaCircular = valorPI * (raio * raio);
    let perimetroCirular = 2 * (valorPI * raio);
    
    return alert(`O valor da área é de ${areaCircular} e o valor do perímetro é de ${perimetroCirular}`);
}