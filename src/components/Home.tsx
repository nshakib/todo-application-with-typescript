import React, { useState } from 'react'
import { v4 as uuidv4 } from "uuid";
import Navbar from './Navbar'

import style from '../module/Home.module.css'
import styleCard from '../module/Card.module.css'
import TodoList from './TodoList'
import Footer from './Footer'
import Form from './Form'
import { InitialData } from './InitialData';
import {TaskItem} from './Type'

const Home = () => {
  const [tasks, setTask] = useState(InitialData);
  const taskItem = tasks.length+1;
  const completeTask = tasks.filter(task =>  task.completed = true).length;
  
  const handleAddTask = (taskName:string) => {
    setTask((prevTask) => {
      return [...prevTask, { id: uuidv4(), title:taskName,completed:false}];
    });
  };

  return (
    <div className={style.home}>
        <Navbar />
        <div className={styleCard.card}>
          <Form addTasks={handleAddTask}/>
          <TodoList taskList={tasks}/>
          <Footer />
        </div>
    </div>
  )
}

export default Home