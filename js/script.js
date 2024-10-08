let listaAlunos = []

function cadastrarAluno() {
    // Captura dados da página
    let nome = document.getElementById("nome").value
    let dataNasc = document.getElementById("dataNasc").value
    let curso = document.getElementById("curso").value
    // Cria um novo aluno a partir dos dados capturados
    let aluno = {nome: nome, dataNasc: dataNasc, curso: curso}
    // Adiciona aluno na lista
    listaAlunos.push(aluno)
    // Notifica usuário
    console.log(listaAlunos)
    document.getElementById("msg").innerHTML = "<p>Aluno cadastrado com sucesso!</p>"
}

function mostrarAlunos() {
    // Percorrer a lista de alunos
    listaAlunos.forEach(aluno => {
        // Cria uma linha na tabela pra cada aluno
        document.getElementById("tabelaAlunos").innerHTML += `
            <tr>
                <td>${aluno.nome}</td>
                <td>${aluno.dataNasc}</td>
                <td>${aluno.curso}</td>
            <tr>
        `
    })
}

// Função tradicional
function minhafunction(num1, num2){
    console.log(Number(num1) + Number(num2))
}

// Função de seta (Arrow Function)
(num1, num2) => {
    console.log(Number(num1) + Number(num2))
}















