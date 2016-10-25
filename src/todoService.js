export const loadTodos = () => {
  return fetch('http://localhost:8080/todos')
    .then(res => res.json())
}
