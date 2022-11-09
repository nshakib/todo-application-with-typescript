import React from 'react'

import style from '../module/Footer.module.css'
const Footer = () => {
  return (
    <div className={style.footer}>
      <p>6 left</p>
      <ul>
        <li>All</li>
        <li>Incomplete</li>
        <li>Complete</li>
      </ul>
    </div>
  )
}

export default Footer