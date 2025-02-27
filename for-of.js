// Limpa o console antes de executar o programa
console.clear();

// Definindo um array com as notas dos alunos
const notas = [10, 6.5, 8, 7.5];

// Inicializando a variável que irá armazenar a soma das notas
let somaDasNotas = 0;

// O loop for...of percorre cada elemento do array 'notas'
// A cada iteração, o valor do elemento atual é atribuído à variável 'nota'
for (let nota of notas) {
    // Soma o valor da nota atual ao acumulador somaDasNotas
    somaDasNotas += nota;
}

// Calcula a média dividindo a soma total pelo número de notas
const media = somaDasNotas / notas.length;

// Exibe a média das notas com uma mensagem explicativa
console.log(`A média das notas é ${media}`);