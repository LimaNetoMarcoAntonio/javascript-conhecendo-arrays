// 22- Crie uma função que receba um array de números e retorne a soma de todos os elementos.

// Limpando o console
console.clear();

// Função para somar os elementos de um array
const somaArray = (array) => array.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0); 
// A função 'somaArray' recebe um array como parâmetro
// O método 'reduce' é usado para somar todos os elementos do array
// 'acumulador' é o valor acumulado da soma até o momento
// 'valorAtual' é o elemento atual do array sendo processado
// '0' é o valor inicial do acumulador

// Exemplo de uso da função somaArray

// Define um array de números e chama a função 'somaArray' com este array
const resultado = somaArray([1, 2, 3]); // Chama a função com um array de números

// Exibe o resultado da soma no console
console.log(resultado); // Exibe o resultado