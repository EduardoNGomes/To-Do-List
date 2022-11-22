import style from './TaskBox.module.css'
import { BiCircle, BiTrash } from 'react-icons/bi'
import {AiFillCheckCircle} from 'react-icons/ai'

interface TaskBoxProps {
  done:boolean;
  content: string;
}

export const TaskBox = ({done, content}:TaskBoxProps) => {
  return(
    <article className={style.article}>
      <button className={done ? style.active: ''}>
        {done ? 
          <AiFillCheckCircle size={18}/> 
          : 
          <BiCircle size={18}/>
        }
        
      </button>

      <p className={done ? style.active: ''}>
        {content}
      </p>


      <button>
        <BiTrash size={16}/>
      </button>

    </article>
  )
}