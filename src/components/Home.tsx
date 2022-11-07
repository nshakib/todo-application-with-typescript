import React from 'react'
import Navbar from './Navbar'

import style from '../module/Home.module.css'
import Card from './Card'
const Home = () => {
  return (
    <div className={style.home}>
        <Navbar />
        <Card />
    </div>
  )
}

export default Home