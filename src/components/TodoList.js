import React from 'react';
import styled from '@emotion/styled';
import Todo from './Todo'

const ListContainer = styled.ul`
  width: 70%;
  margin-top: 1em;
  border-radius: 4px;
  list-style: none;
  padding: 0;
  background: white;
`

function TodoList({ todos }) {
  return (
    <ListContainer>
      {todos.map(({ todo, isCompleted }, index) => (
        <Todo
          key={index}
          todo={todo}
          isCompleted={isCompleted}
          index={index}
        />
      ))}
    </ListContainer>
  )
}

export default React.memo(TodoList)
