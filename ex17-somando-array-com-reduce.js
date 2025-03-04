//17- Crie um array de números chamado valores. Depois,escreva um programa que some todos os elementos deste array utilizando o método reduce.


// Limpa o console antes de executar o programa
console.clear();

// Define um array de valores
const valores = [10, 20, 30, 40, 50];

// Utiliza o método reduce para somar todos os valores do array
const valoresAtualizados = (valores.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0));

// Exibe o resultado da soma no console
console.log(valoresAtualizados);


