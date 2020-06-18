// Comece criando constantes para armazenar nome, sexo, idade e contribuicao(em anos)
const nome = "Silvana"
const sexo = "F"
const idade = 48
const contribuicao = 23

if (sexo === "M" && contribuicao >= 35 || sexo === "F" && contribuicao >= 30) {
    if (sexo === "M" && idade + contribuicao >= 95 || sexo === "F" && idade + contribuicao >= 85) {
        console.log(`${nome}, você pode se aposentar!`)
    } else {
        console.log(`${nome}, você ainda não pode se aposentar!`)
    }
} else {
    console.log(`${nome}, você ainda não pode se aposentar!`)
}