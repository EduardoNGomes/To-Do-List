import styled from './NewTaskBox.module.css'
import { AiOutlinePlusCircle } from'react-icons/ai'
export const NewTaskBox = () => {
  return(
    <div className={styled.box}>
      <input type="text" placeholder='Adicione uma nova tarefa' />
      <button>
        Criar
        <AiOutlinePlusCircle
        size={16}
        />
      </button>
    </div>
  )
}