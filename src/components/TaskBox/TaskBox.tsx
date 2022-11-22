import style from './TaskBox.module.css'
import { BiCircle, BiTrash } from 'react-icons/bi'
import {AiFillCheckCircle} from 'react-icons/ai'

interface TaskBoxProps {
  id:string
  done:boolean;
  content: string;
  remove:(id:string)=> void
  change:(id:string)=> void
}

export const TaskBox = ({id,done, content, remove, change}:TaskBoxProps) => {

  const handleRemove = () =>{
    remove(id)
  }

  const handleChange = () => {
    change(id)
  }
  return(
    <article className={style.article}>
      <button 
        className={done ? style.active: ''}
        onClick={handleChange}
      >
        {done ? 
          <AiFillCheckCircle size={18}/> 
          : 
          <BiCircle size={18}/>
        }
        
      </button>

      <p className={done ? style.active: ''}>
        {content}
      </p>


      <button onClick={handleRemove}>
        <BiTrash size={16}/>
      </button>

    </article>
  )
}