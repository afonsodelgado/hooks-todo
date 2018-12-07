import React, { useEffect, useReducer } from 'react'
import styled from '@emotion/styled'
import { todosReducer } from './reducers'
import InputField from './components/InputField'
import TodoList from './components/TodoList';

export const TodosDispatchContext = React.createContext(null);

const TODOS = [
  { todo: 'Learn React', isCompleted: true },
  { todo: 'Learn hooks', isCompleted: false },
  { todo: 'Do laundry', isCompleted: false },
]

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #FFEBD3;
  width: 100%;
  min-height: 97.5vh;
`

function App() {
  const [todos, dispatch] = useReducer(todosReducer, [])
  
  useEffect(() => {
    dispatch({ type: 'ADD_TODOS', payload: TODOS })
  }, [])

  return (
    <Container>
      <TodosDispatchContext.Provider value={dispatch}>
        <InputField />
        <TodoList todos={todos} />
      </TodosDispatchContext.Provider>
    </Container>
  )
}

export default App
