const usuarios = [
    { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
    { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
    { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
]

for (const usuario of usuarios) {

    const verificarUsuario = checaSeUsuarioUsaCSS(usuario)
    if (verificarUsuario) {
        console.log(`${usuario.nome} trabalha com CSS`);
    } else {
        console.log(`${usuario.nome} não trabalha com CSS, apenas com ${usuario.tecnologias.join(" + ")}`);
    }
}

function checaSeUsuarioUsaCSS(usuario) {
    // Percorra o array de tecnologias do usuário até encontrar se ele trabalha com CSS
    for (const tecnologia of usuario.tecnologias) {
        // SE encontrar, retorne true da função, caso contrário retorne false
        if (tecnologia == 'CSS') return true
    }
}