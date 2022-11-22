import style from './Main.module.css'
import { NewTaskBox } from '../NewTaskBox/NewTaskBox'
import { TaskBox } from '../TaskBox/TaskBox'
export const Main = () => {
  return (
    <main className={style.main}>
      <NewTaskBox/>

      <div className={style.content}>
        <div className={style.header}>
          <p>Tarefas criadas <span>5</span> </p>
          <p>Concluidas <span>2 de 5</span> </p>
        </div>

        <TaskBox/>
      </div>
    </main>
  )
}