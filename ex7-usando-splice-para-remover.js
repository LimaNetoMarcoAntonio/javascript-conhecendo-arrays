// 7- Crie um array chamado numeros contendo números de 1 a 10. Utilize o método slice para criar um novo array chamado parteNumeros que contenha apenas os números de índice 3 a 7 de numeros.

// Criando o array numeros
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Utilizando o método slice para criar um novo array chamado parteNumeros que contenha apenas os números de índice 3 a 7 de numeros
const parteNumeros = numeros.slice(3, 8);

// Exibindo o novo array parteNumeros
console.log(parteNumeros);

