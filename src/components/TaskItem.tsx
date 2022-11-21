import React, { useContext } from 'react'
import { TaskItem} from './Type';
import style from '../module/TaskItem.module.css'
import Context from './Context';

interface TaskProps{
  task:TaskItem;
}

const Todo = ({ task}:TaskProps) => {
const {removeTask} = useContext(Context);
 
  return (
    <div className={style.taskItem}>
        <span>{task.title}</span>
      <div className={style.taskItemBtnGroup}>
        {/* star */}
        <button className={style.bg}>
          <i className='fa fa-star'></i>
        </button>

        {/* Delete */}
        <button className='btn-trash bg' type='button' onClick={() => removeTask(task.id)}>
          <i className='fa fa-trash'></i>
        </button>

        {/* Edit */}
        <button className='btn-edit bg'>
          <i className='fa fa-edit'></i>
        </button>
        {/* love */}
        <i className='fa fa-heart'></i>
      </div>
    </div>
  )
}

export default Todo