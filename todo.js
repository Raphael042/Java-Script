const inputTarefa = document.getElementById('inputTarefa');
const botaoAdicionar = document.getElementById('adicionarTarefa');
const listaTarefas = document.getElementById('listaTarefas');

// Função para adicionar uma tarefa
function adicionarTarefa() {
    const novaTarefa = navatarefa.value.trim();

    if(tarefaTexto !== "") {
        let li = document.createElement('li');
        li.textContent = tarefaTexto;

        // Adicionar a tarefa à lista
        listaTarefas.appendChild(li);

        inputTarefa.value = '';
    }
}

// Adicionar um evento de clique ao botão
botaoAdicionar.addEventListener('click', adicionarTarefa);

inputTarefa.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        adicionarTarefa();
    }
});