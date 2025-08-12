import { useState } from 'react'
import './App.css'
import { CounterControls } from './components/CounterControls'
import { CounterDisplay } from './components/CounterDisplay'

function App() {
  const [count, setCount] = useState(0)

  function increase(){
    setCount((prevCount) => prevCount+1)
  }

  function decrease(){
    setCount((prevCount) => prevCount > 0 ? prevCount-1 : 0)
  }

  return (

    <>

    <CounterDisplay value={count}/>
    <CounterControls plus={increase} minus={decrease}/>
    </>
  )
}

export default App
