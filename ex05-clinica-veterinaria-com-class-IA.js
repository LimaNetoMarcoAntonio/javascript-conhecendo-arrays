// 5- Desenvolva um programa em Node.js que simule uma clínica veterinária. Crie um array vazio chamado clinica que representará a fila de animais na clínica. Em um primeiro momento, simule a chegada de três animais diferentes e exiba a lista de animais no console. Após a exibição, remova os animais da lista um por vez e, por fim, exiba no console o estado final da lista.

// Classe Animal: responsável por criar objetos que representam cada animal
// com suas características básicas (nome, espécie, idade e data de chegada)
class Animal {
    constructor(nome, especie, idade) {
        this.nome = nome;
        this.especie = especie;
        this.idade = idade;
        this.dataChegada = new Date(); // Registra automaticamente a data e hora que o animal chegou à clínica
    }
}

// Classe ClinicaVeterinaria: gerencia toda a lógica de atendimento
// incluindo adição, remoção e exibição dos animais na fila
class ClinicaVeterinaria {
    constructor() {
        this.fila = []; // Array para armazenar os animais
    }

    // Adiciona um novo animal à fila
    adicionarAnimal(animal) {
        this.fila.push(animal);
        console.log(`${animal.nome} (${animal.especie}) foi adicionado à fila.`);
    }

    // Remove e atende o próximo animal da fila
    atenderProximo() {
        if (this.fila.length === 0) {
            console.log("Não há animais na fila de espera.");
            return null;
        }
        // Remove o primeiro animal da fila (o mais antigo)
        const animal = this.fila.shift(); // shift() remove e retorna o primeiro elemento do array (primeiro animal da fila)
        console.log(`${animal.nome} (${animal.especie}) foi atendido.`);
        return animal;
    }

    // Exibe a fila atual de animais
    exibirFila() {
        if (this.fila.length === 0) {
            console.log("A fila está vazia.");
            return;
        }

        console.log("\nAnimais na fila:");
        this.fila.forEach((animal, index) => { // Percorre cada animal na fila, mostrando sua posição (index + 1) e informações
            console.log(`${index + 1}. ${animal.nome} - ${animal.especie} (${animal.idade} anos)`);
        });
    }
}

// Cria uma nova clínica vazia, pronta para receber animais
const clinica = new ClinicaVeterinaria();

// Criando alguns animais de teste para simular o funcionamento da clínica
// Cada animal é instanciado com nome, espécie e idade
clinica.adicionarAnimal(new Animal("Rex", "Cachorro", 5));
clinica.adicionarAnimal(new Animal("Miau", "Gato", 3));
clinica.adicionarAnimal(new Animal("Nemo", "Peixe", 1));

// Exibindo a fila inicial
clinica.exibirFila();

// Atendendo todos os animais
console.log("\nIniciando atendimentos:");

// Continua atendendo enquanto houver animais na fila
while (clinica.fila.length > 0) {
    clinica.atenderProximo();
    clinica.exibirFila();
}