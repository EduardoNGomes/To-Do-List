import style from './Main.module.css'
import { NewTaskBox } from '../NewTaskBox/NewTaskBox'
export const Main = () => {
  return (
    <main className={style.main}>
      <NewTaskBox/>
    </main>
  )
}