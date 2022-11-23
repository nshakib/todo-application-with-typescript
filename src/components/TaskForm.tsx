import { title } from 'process';
import React, { useState } from 'react'

import style from '../module/Form.module.css'
import { AddTasks,UpdateTask } from './Type';

interface NewTaskProps {
    addTasks:AddTasks;
    updateTask:UpdateTask;
    
};

const Form = ({addTasks}:NewTaskProps) => {
   const [titleName, setTitleName] = useState<string>();
   const [EditTitleName, setEditTitleName] = useState<string>();


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const title = event.target.value;
    title && setTitleName(title);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) =>{
    event.preventDefault();
    titleName && addTasks(titleName);//if not empty
    setTitleName("");

  }
  return (
    <div>
      <form className={style.form} onSubmit={handleSubmit}>
        {edit?(<>
            <div className={style["form-field"]}>
              <label htmlFor='title'></label>
              <input 
                  type="text"
                  name='title' 
                  value={titleName}
                  onChange={handleChange}
                  placeholder='Type you todo' 
                  className='fa fa-plus-circle'
              />
              <i className="fa fa-circle-plus"></i>
              <button type='submit'>EDIT</button>
            </div>
        </>):(<>
          <div className={style["form-field"]}>
              <label htmlFor='title'></label>
              <input 
                  type="text"
                  name='title' 
                  value={titleName}
                  onChange={handleChange}
                  placeholder='Type you todo' 
                  className='fa fa-plus-circle'
              />
              <i className="fa fa-circle-plus"></i>
              <button type='submit'>+</button>
            </div>
        </>)}
      </form>
        <div className={style.form_section}>
          <div className={style.button_group}>
            <button className={style.btn}>Complete All Tasks</button>
            <button className={style.btn}>Clear completed</button>
          </div>
        </div>
    </div>
    
  )
}

export default Form