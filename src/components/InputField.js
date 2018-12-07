import React, { useState, useContext } from 'react'
import styled from '@emotion/styled'
import { TodosDispatchContext } from '../App'

const TodoInput = styled.input`
  width: 70%;
  border: none;
  border-radius: 4px;
  font-size: 2em;
  color: #666;
  padding: 8px;
  outline-color: #264e70;
  outline-width: 2px;
`

function InputField() {
  const [newTodo, setNewTodo] = useState('')
  const dispatch = useContext(TodosDispatchContext)

  function handleNewTodo(event) {
    setNewTodo(event.target.value)
  }

  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      dispatch({ type: 'ADD_TODOS', payload: [{ todo: newTodo, isCompleted: false }] })
      setNewTodo('')
    }
  }

  return (
    <TodoInput
      placeholder="What you really need to do?"  
      value={newTodo}
      onChange={handleNewTodo}
      onKeyPress={handleKeyPress}
    />
  )
}

export default React.memo(InputField)
