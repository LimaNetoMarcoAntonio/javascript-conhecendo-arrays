// 19- Crie um array de números chamado numeros. Depois,escreva um programa que filtre todos os números pares deste array utilizando o método filter.

// Limpa o console antes de executar o programa
console.clear();

// Define um array de números
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Utiliza o método filter para filtrar os números pares
const numerosPares = numeros.filter(numeros => numeros % 2 === 0);

// Exibe o resultado no console
console.log(numerosPares);