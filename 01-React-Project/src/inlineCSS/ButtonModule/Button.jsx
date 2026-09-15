import style from './Button.module.css'

const Button = () => {
  return (
    <div className={style.container}>
<form>
<input type='text' placeholder='Username'/>
<input type='password' placeholder='Password'/>
<button id={style.btn}>Login</button>


</form>



    </div>
  )
}

export default Button