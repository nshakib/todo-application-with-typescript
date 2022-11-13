import React from 'react'
import Navbar from './Navbar'

import style from '../module/Home.module.css'
import styleCard from '../module/Card.module.css'
import TodoList from './TodoList'
import Footer from './Footer'
import Form from './Form'
const Home = () => {

  const dummyTodo = [
    {
      id:1,
      title: 'title 1'
    },
    {
      id:2,
      title: 'title 2'
    },
    {
      id:3,
      title: 'title 3'
    }
  ]
  return (
    <div className={style.home}>
        <Navbar />
        <div className={styleCard.card}>
          <Form />
          <TodoList todos={dummyTodo }/>
          <Footer />
        </div>
    </div>
  )
}

export default Home