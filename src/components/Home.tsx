import React from 'react'
import Navbar from './Navbar'

import style from '../module/Home.module.css'
import styleCard from '../module/Card.module.css'
import TodoList from './TodoList'
import Footer from './Footer'
import Form from './Form'
const Home = () => {
  return (
    <div className={style.home}>
        <Navbar />
        <div className={styleCard.card}>
          <Form />
          <TodoList />
          <Footer />
        </div>
    </div>
  )
}

export default Home