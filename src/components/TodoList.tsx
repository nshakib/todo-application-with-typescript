import React from 'react'
// import Todo from './Todo'
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
            // <Todo todo={todo} key={todo.id} id={todo.id}/>
            <div key={todo.id}>
                <h2>{todo.title}</h2>
            </div>
           ))
      }
    </div>
  )
}

export default TodoList