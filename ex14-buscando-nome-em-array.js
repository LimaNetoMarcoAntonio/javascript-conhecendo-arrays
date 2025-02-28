// Limpa o console antes de executar o programa
console.clear();

// Define os nomes dos alunos da Turma A
const nomesTurmaA = [
    'João Silva',
    'Maria Santos',
    'Pedro Almeida'
];

// Define os nomes dos alunos da Turma B
const nomesTurmaB = [
    'Carlos Oliveira',
    'Ana Souza',
    'Lucas Fernandes'
];

// Combina os alunos das duas turmas em um único array usando concat, mas poderia usar spread operator const todosAlunos = [...nomesTurmaA, ...nomesTurmaB];
const todosAlunos = nomesTurmaA.concat(nomesTurmaB);

// Nome do aluno que estamos buscando
const nomeBuscado = 'João Almeida';

// Exibe o nome do aluno que está sendo procurado
console.log(`Aluno procurado: ${nomeBuscado}`);

// Usa o método find para localizar o aluno no array
const alunoEncontrado = todosAlunos.find(aluno => aluno === nomeBuscado);

// Verifica se o aluno foi encontrado e exibe a mensagem apropriada
if (alunoEncontrado) {
    console.log(`Aluno encontrado: ${alunoEncontrado}`); // Exibe o nome do aluno encontrado
} else {
    console.log('Aluno não encontrado'); // Mensagem caso o aluno não esteja no array
}