import style from './TaskBox.module.css'
import { BiCircle, BiTrash } from 'react-icons/bi'
import {AiFillCheckCircle} from 'react-icons/ai'

export const TaskBox = () => {
  return(
    <article className={style.article}>
      <button >
        <BiCircle size={18}/>
      </button>

      <p >
        Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
      </p>


      <button>
        <BiTrash size={16}/>
      </button>

    </article>
  )
}