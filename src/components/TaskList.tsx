import React from 'react'
import Todo from './TaskItem';
import { TaskItem } from './Type';
import style from '../module/TaskList.module.css'


interface TaskListProps{
  taskList:TaskItem[];
}

const TodoList = ({taskList}: TaskListProps) => {
  return (
    <div className={style.taskList}>
      {
        taskList.map(task => <Todo task={task}/>)
      }
    </div>
  )
}

export default TodoList