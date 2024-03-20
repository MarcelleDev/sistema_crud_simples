document.getElementById('addItem').addEventListener('click', addItem);

function addItem() {
  const itemInput = document.getElementById('itemInput');
  const itemValue = itemInput.value;
  
  if (itemValue) {
    const itemList = document.getElementById('itemList');
    const li = document.createElement('li');
    li.innerHTML = `${itemValue} <span class="edit">Editar</span> <span class="delete">Deletar</span>`;
    itemList.appendChild(li);

    li.querySelector('.edit').addEventListener('click', function() {
      const newValue = prompt('Edite o item:', itemValue);
      if (newValue) {
        li.firstChild.textContent = newValue + ' ';
      }
    });

    li.querySelector('.delete').addEventListener('click', function() {
      itemList.removeChild(li);
    });

    itemInput.value = '';
  } else {
    alert('Por favor, adicione um nome ao item.');
  }
}