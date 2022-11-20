import React from 'react'
import Todo from './Todo';
import { TaskItem } from './Type';


interface TaskListProps{
  taskList:TaskItem[];
}

const TodoList = ({taskList}: TaskListProps) => {
  return (
    <div>
      {
        taskList.map(task => <Todo task={task}/>)
      }
    </div>
  )
}

export default TodoList