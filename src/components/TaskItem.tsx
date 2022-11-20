import React from 'react'
import { TaskItem} from './Type';
import style from '../module/TaskItem.module.css'

interface TaskProps{
  task:TaskItem;
}

const Todo = ({ task}:TaskProps) => {
 
  return (
    <div className={style.taskItem}>
        <span>{task.title}</span>
      <div className={style.taskItemBtnGroup}>
        {/* star */}
        <button className={style.bg}>
          <i className='fa fa-star'></i>
        </button>
        {/* Delete */}
        <button className='btn-trash bg'>
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