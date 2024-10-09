let listaAlunos = [];
let alunoEditIndex = null; // Armazena o índice do aluno em edição

function cadastrarAluno() {
    let nome = document.getElementById("nome").value;
    let dataNasc = document.getElementById("dataNasc").value;
    let curso = document.getElementById("curso").value;

    if (alunoEditIndex !== null) {
        // Atualiza o aluno existente
        listaAlunos[alunoEditIndex] = { nome, dataNasc, curso };
        alunoEditIndex = null; // Reseta o índice após a edição
        document.getElementById("msg").innerHTML = "<p>Aluno atualizado com sucesso!</p>";
    } else {
        // Adiciona um novo aluno
        listaAlunos.push({ nome, dataNasc, curso });
        document.getElementById("msg").innerHTML = "<p>Aluno cadastrado com sucesso!</p>";
    }

    limparCampos(); // Limpa os campos após o cadastro ou edição
}

function mostrarAlunos() {
    const tabelaAlunos = document.getElementById("tabelaAlunos");
    tabelaAlunos.innerHTML = ""; // Limpa a tabela antes de adicionar

    if (listaAlunos.length === 0) {
        tabelaAlunos.innerHTML = "<p>Nenhum aluno cadastrado.</p>";
        return;
    }

    listaAlunos.forEach((aluno, index) => {
        tabelaAlunos.innerHTML += `
            <div class="card" style="width: 18rem; margin: 10px;">
                <div class="card-body">
                    <h5 class="card-title">${aluno.nome}</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">${aluno.dataNasc}</h6>
                    <p class="card-text">${aluno.curso}</p>
                    <button class="btn btn-danger" onclick="excluirAluno(${index})"><i class="fa-regular fa-trash-alt"></i> Excluir</button>
                    <button class="btn btn-warning" onclick="editarAluno(${index})"><i class="fa-regular fa-edit"></i> Editar</button>
                </div>
            </div>
        `;
    });
}

function excluirAluno(index) {
    listaAlunos.splice(index, 1); // Remove o aluno da lista
    mostrarAlunos(); // Atualiza a lista exibida
}

function editarAluno(index) {
    alunoEditIndex = index; // Armazena o índice do aluno que será editado
    const aluno = listaAlunos[index];
    
    // Preenche os campos com as informações do aluno
    document.getElementById("nome").value = aluno.nome;
    document.getElementById("dataNasc").value = aluno.dataNasc;
    document.getElementById("curso").value = aluno.curso;

    document.getElementById("msg").innerHTML = "<p>Edite as informações e clique em 'Cadastrar' para salvar.</p>";
}

function limparCampos() {
    document.getElementById("nome").value = "";
    document.getElementById("dataNasc").value = "";
    document.getElementById("curso").selectedIndex = 0; // Reseta para o primeiro item do select
}
