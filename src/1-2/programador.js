// Crie um programa com um objeto para armazenar dados de um programador como nome, idade e tecnologias que trabalha
const programador = {
    nome: "Rafael",
    idade: 26,
    tecnologias: [{
        nome: "Design",
        especialidade: "Digital"
    }, {
        nome: "C++",
        especialidade: "Desktop"
    }, {
        nome: "JavaScript",
        especialidade: "Web/Mobile"
    }]
}

// Imprima em tela o nome e especialidade da primeira tecnologia que o usuário utiliza
console.log(`O usuário ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${programador.tecnologias[0].nome} com especialidade em ${programador.tecnologias[0].especialidade}`)