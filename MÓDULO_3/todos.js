var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];
//se ele não conseguir retornar um valor aceitável, ele vai jogar um array vazio para dentro da variável todos

// var todos = [
//     'Fazer café',
//     'Estudar JavaScript',
//     'Acessar a comunidade Rocketseat'
// ];

function renderTodos() {
    listElement.innerHTML = ''; //excluindo o conteúdo da lista antes de colocar um novo conteúdo
    for (const todo of todos) {
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);
        todoElement.appendChild(todoText);
        listElement.appendChild(todoElement);

        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');
        var linkText = document.createTextNode('Excluir');
        linkElement.appendChild(linkText);
        todoElement.appendChild(linkElement);

        var pos = todos.indexOf(todo); //percorrendo o array "todos"
        linkElement.setAttribute('onclick', 'deleteTodos(' + pos + ')');//passandoa a posição do elemento no array
    }

}
renderTodos();  

function addTodo() {
    var todoText = inputElement.value; //recuperando o valor do input

    todos.push(todoText); //adicionando esse todoText no array
    inputElement.value = ''; //apaga o texto atual do input
    renderTodos();
    saveToStorage();

}

buttonElement.onclick = addTodo; 

function deleteTodos(pos) {
    todos.splice(pos, 1);//remove uma quantidade de itens no array baseado na posição que for passada
    renderTodos();
    saveToStorage();
}
function saveToStorage(){
    localStorage.setItem('list_todos', JSON.stringify(todos));//setando um valor no storage
    // o stringify vai transformar o vetor em uma string
    
}