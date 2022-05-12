const todos = [
    { id: 'id1', body: 'Todos Body - 1', isCompleted: true }, 
    { id: 'id2', body: 'Todos Body - 2', isCompleted: false },
    { id: 'id3', body: 'Todos Body - 3', isCompleted: false }    
]

function showTodos(todos) {
    setTimeout(() => console.log(todos), 2000)
}
    
function createTodo(todo, callback) {
    todos.push(todo)
    callback()
}

createTodo( { id: 'id4', body: 'Todos Body - 4', isCompleted: true }, () => showTodos(todos) )