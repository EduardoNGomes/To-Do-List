import style from './Main.module.css'

import { NewTaskBox } from '../NewTaskBox/NewTaskBox'
import { TaskBox } from '../TaskBox/TaskBox'

import { useState } from 'react'
import {UUID} from 'uuid-generator-ts';
import {v4 as uuidv4} from 'uuid';


// const task = {
//   id: 5,
//   done: true,
//   content:'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.'
// }


interface TaskProps{
  id:string;
  done:boolean;
  content: string;

}


export const Main = () => {
  const [allTask, setAllTask] = useState<TaskProps[]>([])
  

  const createNewTask = (value:string) => {
    const task = {
      id: uuidv4(),
      done:false,
      content:value
    }
    setAllTask(prevState => [...prevState, task])
    console.log(allTask)
  }

  return (
    <main className={style.main}>
      <NewTaskBox
        create={createNewTask}
      />

      <div className={style.content}>
        <div className={style.header}>
          <p>Tarefas criadas <span>5</span> </p>
          <p>Concluidas <span>2 de 5</span> </p>
        </div>

        {allTask &&

          allTask.map(task => 
            <TaskBox
              key={task.id}
              done={task.done}
              content={task.content}
            />
          )
        }
      </div>
    </main>
  )
}