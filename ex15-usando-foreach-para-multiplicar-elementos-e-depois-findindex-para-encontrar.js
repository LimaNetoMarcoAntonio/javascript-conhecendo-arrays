// Limpa o console antes de executar o programa
console.clear();

// Define um array de números
const numeros = [6, 9, 12, 15, 18, 21];

// Multiplica cada número do array por 3 e armazena o resultado em uma nova variável
resultado = numeros.map(numero => numero * 3);

// Imprime o array resultante no console
console.log(resultado);

// Define o número que estamos buscando no array original
const numeroBuscado = 21;

// Encontra o índice do número buscado no array original
indiceDoNumeroBuscado = numeros.findIndex(numero => numero === numeroBuscado);

// Imprime no console a posição do número buscado e a relação entre o número original e seu resultado multiplicado
console.log(`O número ${numeroBuscado} no array original está no índice ${indiceDoNumeroBuscado}, pois ${numeroBuscado} * 3 = ${resultado[indiceDoNumeroBuscado]}`);