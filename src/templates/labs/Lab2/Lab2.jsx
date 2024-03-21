import { useState } from 'react'
import imitLogo from './imit.png'
import asuLogo from './asu.png'
import './Lab2.css'
import Button from './Button'
import Container from './Container'

const Lab2 = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://www.math.asu.ru/" target="_blank">
          <img src={imitLogo} className="logo" alt="Immit logo" />
        </a>
        <a href="https://www.asu.ru/" target="_blank">
          <img src={asuLogo} className="logoasu" alt="Asu logo" />
        </a>
      </div>
      <h1>ASU с Vite + React</h1>
      <div className="card">
        <Button color="white" text ="+" onClick={()=>{setCount((count)=>count+1);}}/>
        <Button color="white" text ="-" onClick={()=>{setCount((count)=>count-1);}}/>
        <Button color="white" text ="0" onClick={()=>{setCount(0);}}/>
        <p> 
          Счетчик примерно {count}
        </p>
      </div>
      <Container> 
      <p className="read-the-docs">
        Кликните на логотип сайта, на который вы желаете перейти
      </p>
      </Container> 
    </>
  )
}

export default Lab2