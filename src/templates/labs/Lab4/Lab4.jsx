import Button from "../../../components/Button"
import ThemeContext from "../../../contexts/ThemeContext"
import { THEME_LIGHT, THEME_DARK } from "../../../contexts/ThemeContext"
import { useContext, useState, useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, setValue, selectCount } from "../../../features/counter/counterSlice"

const Lab4 = () => {
  const { theme, setTheme } = useContext(ThemeContext)
  const [count, setCount] = useState(0)
  const countRedux = useSelector(selectCount)
  const dispatch = useDispatch()

  useEffect(() => {
    setCount(0)
    dispatch(setValue(0))
  }, [theme, dispatch])

  return (
    <div className="lab4">
      <Button
        label="Light"
        color="blue"
        onClick={() => setTheme(THEME_LIGHT)}
      ></Button>

      <Button
        label="Dark"
        color="black"
        onClick={() => setTheme(THEME_DARK)}
      ></Button>

      <div className="lab4_clicker-wrapper">
        <span>Ты нажал раз {count} </span>
        <Button
          color="red"
          label="Click me"
          onClick={() => setCount(count + 1)}
        ></Button>
      </div>

      <div className="lab4_clicker-wrapper">
        <span>Ты нажал раз {countRedux} (Redux)</span>
        <Button
          color="green"
          label="+"
          onClick={() => dispatch(increment())}
        ></Button>

        <Button
          color="red"
          label="-"
          onClick={() => dispatch(decrement())}
        ></Button>
      </div>
    </div>
  )
}

export default Lab4