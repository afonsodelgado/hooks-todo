export function todosReducer(todos, { type, payload }) {
  switch (type) {
    case 'ADD_TODOS':
      return [...todos, ...payload]
    case 'TOGGLE_TODO_COMPLETED':
      const newTodos = todos.map(item => ({ ...item }))
      newTodos[payload] = { ...newTodos[payload], isCompleted: !newTodos[payload].isCompleted }
      return newTodos
    default:
      return todos
  }
}