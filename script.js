const lista = document.getElementById('listaTarefas');
const input = document.getElementById('tarefaInput');

function adicionarTarefa() {
  const texto = input.value.trim();
  if (texto === '') return;

  const li = document.createElement('li');
  li.textContent = texto;

  const btnDel = document.createElement('button');
  btnDel.textContent = 'Excluir';
  btnDel.onclick = () => li.remove();

  li.appendChild(btnDel);
  lista.appendChild(li);
  input.value = '';
}
