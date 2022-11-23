import style from './EmptyScreen.module.css'
import empty from '../../assets/empty.png'

export const  EmptyScreen = () => {
  return (
    <div className={style.emptyScreen}>
      <img src={empty} alt="empty image" />
      <p>Você ainda não tem tarefas cadastradas</p>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  )
}