export const loadTodos = () => {
  return fetch('http://localhost:8080/todos')
    .then(res => res.json())
}

export const addTodo = (todo) => {
  return fetch('http://localhost:8080/todos', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(todo)
    })
    .then(res => res.json())
}
