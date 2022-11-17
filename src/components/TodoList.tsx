import React from 'react'
 import Todo from './Todo'
type Todos = {
  todos:{
    title: string;
    id: number;

  }[];
};

const TodoList = ({todos}: Todos) => {
  console.log(todos);
  return (
    <div>
      {
          todos.map((todo) => (
           <Todo todo={todo.title} key={todo.id} id={todo.id}/>
           ))
      }
    </div>
  )
}

export default TodoList