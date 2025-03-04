// 20- Crie uma função que filtre os números de um array que são múltiplos de 3 e maiores que 5

// Limpa o console antes de executar o programa
console.clear();

// Define um array de números
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numerosFiltrados = numeros.filter(numeros => numeros % 3 === 0 && numeros > 5);   

// Exibe o resultado no console
console.log(numerosFiltrados);



