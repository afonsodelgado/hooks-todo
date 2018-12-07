import React, { useContext } from 'react'
import styled from '@emotion/styled'
import { TodosDispatchContext } from '../App'

const TodoName = styled.li`
  padding: 0.5em;
  font-size: 1.5em;
  text-decoration: ${props => props.isCompleted ? 'line-through' : 'none'};
  font-style: ${props => props.isCompleted ? 'italic' : 'normal'};
  color: ${props => props.isCompleted ? '#ccc' : '#888'};
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  cursor: pointer;
`

function Todo({ todo, isCompleted, index }) {
  const dispatch = useContext(TodosDispatchContext)

  function handleTodoClick() {
    dispatch({ type: 'TOGGLE_TODO_COMPLETED', payload: index })
  }

  return (
    <TodoName
      isCompleted={isCompleted}
      onClick={handleTodoClick}
    >
      {todo}
    </TodoName>
  )
}

export default React.memo(Todo)
