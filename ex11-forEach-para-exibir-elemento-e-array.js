// 11 - Utilize o método forEach para imprimir cada elemento de um array juntamente com seu índice.

// Limpa o console antes de executar o programa
console.clear();

// Definindo o array de números
const arrayNums = [1, 2, 3, 4];

// Usando o método forEach para imprimir cada elemento de um array juntamente com seu índice. (no forEach, o primeiro valor é o elemento, o segundo é o índice e o terceiro é o array completo)
arrayNums.forEach((num, i) => {
    // Imprimindo o elemento e o índice
    console.log(`Elemento: ${num}, índice: ${i}`);
});