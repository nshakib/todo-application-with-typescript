import React from 'react'
import Todo from './Todo'

const TodoList = (props) => {
  return (
    <div>
      {
        props.todos.map((todo) => (
          <Todo todo={todo.todo} key={todo.id} id={todo.id}/>
          ))
      }
    </div>
  )
}

export default TodoList