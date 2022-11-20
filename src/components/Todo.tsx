import React from 'react'
import { TaskItem} from './Type';

interface TaskProps{
  task:TaskItem;
}

const Todo = ({ task}:TaskProps) => {
 
  return (
    <div>
      <div>
        <p>{task.title}</p>
      </div>
      <div>
        <button>
        </button>
      </div>
    </div>
  )
}

export default Todo