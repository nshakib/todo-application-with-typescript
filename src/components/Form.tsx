import React from 'react'

import style from '../module/Form.module.css'
const Form = () => {
  return (
    <div>
      <form className={style.form}>
        <div className={style["form-field"]}>
            <label htmlFor='title'></label>
            <input 
                type="text"
                name='title' 
                value=""
                // onChange={}
                placeholder='Type you todo' 
                className='fa fa-plus-circle'
            />
            <i className="fa fa-circle-plus"></i>
        </div>
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