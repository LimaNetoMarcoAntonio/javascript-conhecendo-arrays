// Criando um array vazio para representar a fila da clínica
const clinica = [];

// Função para adicionar animal na fila
function adicionarAnimal(nome, especie) {
    // Cria um objeto simples com as informações do animal
    const animal = {
        nome: nome,
        especie: especie
    };
    clinica.push(animal);
    console.log(`${nome} (${especie}) foi adicionado à fila.`);
}

// Função para mostrar os animais na fila
function mostrarFila() {
    if (clinica.length === 0) {
        console.log("A fila está vazia.");
        return;
    }
    
    console.log("\nAnimais na fila:");
    clinica.forEach((animal, posicao) => {
        console.log(`${posicao + 1}. ${animal.nome} - ${animal.especie}`);
    });
}

// Função para atender o próximo animal
function atenderProximo() {
    if (clinica.length === 0) {
        console.log("Não há animais para atender.");
        return;
    }
    
    const animal = clinica.shift();
    console.log(`${animal.nome} (${animal.especie}) foi atendido.`);
}

// Adicionando alguns animais para teste
adicionarAnimal("Rex", "Cachorro");
adicionarAnimal("Miau", "Gato");
adicionarAnimal("Nemo", "Peixe");

// Mostrando a fila inicial
mostrarFila();

// Atendendo todos os animais
console.log("\nIniciando atendimentos:");
while (clinica.length > 0) {
    atenderProximo();
    mostrarFila();
}