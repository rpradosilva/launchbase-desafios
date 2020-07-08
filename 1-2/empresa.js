// Crie um programa que armazena dados da empresa Rocketseat dentro de um objeto chamado empresa. 
const empresa = {
    nome: "Rocketseat",
    cor: "Roxo",
    foco: "Programação",
    endereco: {
        rua: "Rua Guilherme Gembala",
        complemento: "260"
    }
}

// Imprima em tela utilizando console.log o nome da empresa e seu endereço
console.log(`A empresa ${empresa.nome} está localizada em ${empresa.endereco.rua}, ${empresa.endereco.complemento}`)