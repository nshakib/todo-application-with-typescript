import React, { useState } from 'react'
import Navbar from './Navbar'

import style from '../module/Home.module.css'
import styleCard from '../module/Card.module.css'
import TodoList from './TodoList'
import Footer from './Footer'
import Form from './Form'
const Home = () => {

  const [todos, setTodos] = useState([]);
  return (
    <div className={style.home}>
        <Navbar />
        <div className={styleCard.card}>
          <Form />
          <TodoList todos={todos}/>
          <Footer />
        </div>
    </div>
  )
}

export default Home