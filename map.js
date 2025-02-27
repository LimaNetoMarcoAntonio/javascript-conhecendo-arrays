// Limpa o console antes de executar o programa
console.clear();

// Definindo o array de notas
const notas = [10, 6.5, 8, 9.5]

// Usando o método map para atualizar as notas
let notasAtualizadas = notas.map(nota => nota + 1 >= 10 ? 10 : nota + 1);

// Exibindo as notas atualizadas
console.log(notasAtualizadas);
