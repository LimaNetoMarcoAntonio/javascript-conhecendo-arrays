// Limpa o console antes de executar o programa
console.clear();

// Definindo as notas dos alunos
const notas = [5, 7, 10, 10];

// Inicializando a soma das notas
let somaDasNotas = 0;

// Loop para somar as notas
for (i = 0; i < notas.length; i++) {
    somaDasNotas += notas[i];
}

// Calculando a média das notas
const media = somaDasNotas / notas.length;

// Exibindo a média das notas
console.log(`A média das notas é ${media}`);

