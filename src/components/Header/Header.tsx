import style from './Header.module.css'
import logo from '../../assets/logo.png'
export const Header = () => {
  return(
    <header className={style.header}>
      <img src={logo} alt="logo image" />
      <h1 
        className={style.h1}
      >
        to<span>do</span>
      </h1>
    </header>
  )
}