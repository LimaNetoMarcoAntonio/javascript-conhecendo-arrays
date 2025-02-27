// Limpa o console antes de executar o programa
console.clear();

// Definindo os nomes dos alunos
const nomesAlunos = ['João', 'Juliana', 'Ana', 'Caio'];

// Definindo as notas de cada aluno
const mediasAlunos = [10, 9, 8, 7, 6];

// Criando um array de arrays com as notas e os nomes dos alunos
const listaDeMediasEAlunos = [nomesAlunos, mediasAlunos];

// Função para exibir o nome e a nota do aluno
function exibeNomeENota(aluno) {
    if (listaDeMediasEAlunos[0].includes(aluno)) { // Verifica se o aluno está presente na lista de nomes
        const indice = listaDeMediasEAlunos[0].indexOf(aluno); // Encontra o índice do aluno na lista de nomes
        const mediaAluno = listaDeMediasEAlunos[1][indice]; // Encontra a nota do aluno na lista de notas
        console.log(`A média do aluno ${aluno} é ${mediaAluno}`);
    } else {
        console.log('O aluno não está presente na lista');
    }
}

// Exibindo a média do aluno Ana
exibeNomeENota('Ana');

// Exibindo a média do aluno Marco
exibeNomeENota('Marco');