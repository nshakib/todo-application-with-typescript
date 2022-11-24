import React from 'react'

import style from '../module/Footer.module.css'
import Context from './Context';
import {CountTask } from './Type'


const Footer = ({countTask}: CountTask) =>{
  return (
    <div className={style.footer}>
      <p>{countTask} left</p>
      <ul>
        <li>All</li>
        <li>|</li>
        <li>Incomplete</li>
        <li>|</li>
        <li>Complete</li>
      </ul>
    </div>
  )
}

export default Footer;