import styled from './NewTaskBox.module.css'

import { AiOutlinePlusCircle } from'react-icons/ai'

import { ChangeEvent, useState } from 'react'


interface NewTaskProps {
  create:(value: string) => void;
}


export const NewTaskBox = ({create}:NewTaskProps) => {
  const [newTask, setNewTask] = useState('')

  const handleWriteTask = (e:ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value)
  }

  const handleCreate = () =>{
    create(newTask)
    setNewTask('')
  }

  return(
    <div className={styled.box}>
      <input 
        type="text" 
        placeholder='Adicione uma nova tarefa' 
        onChange={handleWriteTask}
        value={newTask}
        />
      <button onClick={handleCreate}>
        Criar
        <AiOutlinePlusCircle
        size={18}
        />
      </button>
    </div>
  )
}