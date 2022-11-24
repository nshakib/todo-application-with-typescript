import React, { Key, useState } from 'react'
import { v4 as uuidv4 } from "uuid";
import Navbar from './Navbar'

import style from '../module/Home.module.css'
import styleCard from '../module/Card.module.css'
import TodoList from './TaskList'
import Footer from './Footer'
import Form from './TaskForm'
import { InitialData } from './InitialData';
import {RemoveTask, UpdateTask} from './Type'
import Context from './Context';

const Home = () => {
  const [tasks, setTask] = useState(InitialData);
  const [tasksEdit, setEditTask] = useState(null);
  //const taskItem = tasks.length+1;
  const completeTask = tasks.filter(task =>  task.completed = true).length;
  
  const addTask = (taskName:string) => {
    setTask((prevTask) => {
      return [...prevTask, { id: uuidv4(), title:taskName,completed:false}];
    });
  };

  const removeTask: RemoveTask = (id:Key) => {
    setTask((prevTask) =>{
      const filteredTask = prevTask.filter((taskName) => taskName.id !== id);
      return filteredTask;
    })
  };


  const  updateTask = (taskName:string, id:Key) => {
    const currentItem = tasks.filter((item) => item.id === id);
    setTask(currentItem);

  };
  return (
    <div className={style.home}>
        <Navbar />
        <div className={styleCard.card}>
          <Form addTasks={addTask}/>
          <Context.Provider value={{removeTask, updateTask,}}>
            <TodoList taskList={tasks}/>
          </Context.Provider>
          
          <Footer countTask={countTask}/>
        </div>
    </div>
  )
}

export default Home