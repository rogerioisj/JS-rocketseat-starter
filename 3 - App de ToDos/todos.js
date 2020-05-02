var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderToDos(){
    listElement.innerHTML = '';

    todos.forEach(todo => {
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('a');

        linkElement.setAttribute('href', '#');

        var position = todos.indexOf(todo);

        var linkText = document.createTextNode('Excluir');

        linkElement.setAttribute('onclick', 'deleteTodos('+position+')');        

        linkElement.appendChild(linkText);

        todoElement.appendChild(todoText);
        listElement.appendChild(todoElement);
        listElement.appendChild(linkElement);
            
    });
}

function addToDo(){
    var todoText = inputElement.value;

    todos.push(todoText);
    console.log(todos);
    inputElement.value = '';
    saveToStorage();
    renderToDos();
}

renderToDos();

buttonElement.onclick = addToDo;

function deleteTodos(position){
    todos.splice(position, 1);
    saveToStorage();
    renderToDos();
}

function saveToStorage(){
    localStorage.setItem('list_todos', JSON.stringify(todos));
}