// Limpar console
console.clear();

// Declarando arrays
const alunos = ['Ana', 'Marcos', 'Maria', 'Mauro']
const medias = [7, 4.5, 8, 7.5]

// Filtrando alunos reprovados
const reprovados = alunos.filter((_, i) => { // _ é o aluno, colocamos underline para indicar que não vamos usar, i é o índice
    return medias[i] < 7; // Retorna true se a média é menor que 7
});

// Exibindo alunos reprovados
console.log(reprovados); 