import React from 'react'
type Todo = {
  todo:{
    title:string;
  };
}
type ButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  };
const Todo = ({ todo }:Todo) => {
  const {title} = todo;

  const handleClick = (id) => {
    todo.onRemoveTodo(id);
  }
  return (
    <div>
      <div>
        <p>{title}</p>
      </div>
      <div>
        <button
          className=""
          onClick={() => {
            handleClick(id);
          }}
        >
          <i className="fa fa-trash fa-2x"></i>
        </button>
      </div>
    </div>
  )
}

export default Todo