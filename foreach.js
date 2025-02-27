// Limpa o console antes de executar o programa
console.clear();

// Definindo o array de notas com valores numéricos
const notas = [10, 6.5, 8, 7.5]

// Inicializando a variável total com 0 para armazenar a soma das notas
let total = 0;

// Usando o método forEach para iterar sobre o array de notas
// A cada iteração, a nota atual é adicionada ao total
notas.forEach(nota => total += nota);

/* notas.forEach((nota) => {
    total += nota; // Alternativa para a mesma operação
}); */

// Calculando a média das notas dividindo o total pelo número de notas
let media = total / notas.length;

// Exibindo a média das notas no console
console.log(`A média das notas é ${media}`)
