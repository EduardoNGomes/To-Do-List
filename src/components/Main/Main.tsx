import style from './Main.module.css'

import { NewTaskBox } from '../NewTaskBox/NewTaskBox'
import { TaskBox } from '../TaskBox/TaskBox'

import { useEffect, useState } from 'react'
import {v4 as uuidv4} from 'uuid';


interface TaskProps{
  id:string;
  done:boolean;
  content: string;

}

export const Main = () => {
  const [allTask, setAllTask] = useState<TaskProps[]>(() => {
    const data = localStorage.getItem('@to-do_list')
    if(data){
      return JSON.parse(data)
    } else {
      return []
    }
  })
  const [taskDone, setTaskDone] = useState(0)
  

  const createNewTask = (value:string) => {
    const task = {
      id: uuidv4(),
      done:false,
      content:value
    }
    setAllTask(prevState => [...prevState, task])
  }

  const removeTask = (id:string) => {
    const filteredTask = allTask.filter(task => task.id !== id)

    setAllTask(filteredTask)
  }

  const changeTask = (id:string) => {
    const taskChanged = allTask.filter(task => {
      if(task.id == id){
        task.done= !task.done
      }
      return task
    })

    setAllTask(taskChanged)
  }

  useEffect(()=>{
    const task = allTask.filter(task => task.done ===true)
    setTaskDone(task.length)
  },[allTask])


  useEffect(()=>{
    localStorage.setItem('@to-do_list', JSON.stringify(allTask))
  },[allTask])

  return (
    <main className={style.main}>
      <NewTaskBox
        create={createNewTask}
      />

      <div className={style.content}>
        <div className={style.header}>
          <p>Tarefas criadas <span>{allTask.length}</span> </p>
          <p>Concluidas <span>{taskDone} de {allTask.length}</span> </p>
        </div>

        {allTask &&

          allTask.map(task => 
            <TaskBox
              key={task.id}
              id={task.id}
              done={task.done}
              content={task.content}
              remove={removeTask}
              change={changeTask}
            />
          )
        }
      </div>
    </main>
  )
}