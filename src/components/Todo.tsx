import React from 'react'
interface Todo{
  text: string,
  complete: boolean;
}

interface Props{
  todo: Todo;
}
const Todo = () => {
  // const {title} = props.todo; 
  return (
    <div>
      <div>
        <p></p>
      </div>
    </div>
  )
}

export default Todo