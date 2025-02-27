// Array de arrays

// Definindo os nomes dos alunos
const nomesAlunos = ['João', 'Juliana', 'Ana', 'Caio'];

// Definindo as notas de cada aluno
const mediasAlunos = [10, 9, 8, 7, 6];

// Criando um array de arrays com as notas e os nomes dos alunos
const listaDeMediasEAlunos = [nomesAlunos, mediasAlunos];

// Exibindo o array de arrays
console.log(
    `Aluno(a): ${listaDeMediasEAlunos[0][0]}, Média: ${listaDeMediasEAlunos[1][0]}` // Primeiro diz o array e depois o índice
);

