// Comece criando constantes para armazenar
// o nome, peso, altura e sexo de uma pessoa
const nome = "Carlos"
const peso = 84
const altura = 1.88
const sexo = "Masculino"

// A partir desses dados armazene em uma constante
// chamada imc o cálculo do índice de massa corporal
const imc = peso / (altura * altura)

// SE o IMC maior ou igual a 30: Carlos você está acima do peso;
// SE o IMC menor que 29.9: Carlos você não está acima do peso;
if (imc >= 30) {
    console.log(`${nome} você está acima do peso.`)
} else {
    console.log(`${nome} você não está acima do peso.`)
}