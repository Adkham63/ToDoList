var newTodoInput = document.getElementById('newTodo');
var addNewTodoButton = document.getElementById('addNewTodo');
var todoList = document.getElementById('todoList');
var todoDoneList = document.getElementById('todoDoneList');


var todos = [
     { todo: "Buy bread", checked: false },
     { todo: "Buy milk", checked: false },
     { todo: "Buy cheese", checked: true }
 ];
    
 function addTodo(label) {
     if(label != "") {
     todos.push({ todo: label, checked: false });
     //updateTodos();
     }
 }
    
 addNewTodoButton.addEventListener('click', function(e) {
     e.preventDefault();
     addTodo(newTodoInput.value);
     newTodoInput.value = "";
     console.log(todos);
 });

 