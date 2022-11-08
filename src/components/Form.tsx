import React from 'react'

import style from '../module/Form.module.css'
import NewTodo from './NewTodo'
import TodoList from './TodoList'
const Form = () => {
  return (
    <div className={style.form_section}>
        <NewTodo />
        <div className={style.button_group}>
          <button className={style.btn}>Complete All Tasks</button>
          <button className={style.btn}>Clear completed</button>
        </div>
        <TodoList todos={todos}/>
    </div>
  )
}

export default Form