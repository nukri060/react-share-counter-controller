import { useState } from 'react'
import './App.css'
import { CounterControls } from './components/controlled-components/CounterControls'
import { CounterDisplay } from './components/controlled-components/CounterDisplay'
import { UncontrolledCounter } from './components/uncontrolled-components/uncontrolledCounter'

function App() {
  const [count, setCount] = useState(0)
  const [disabled, setDisabled] = useState(false)

  function increase() {
    if (!disabled) {
      setCount(prevCount => prevCount + 1)
    }
  }

  function decrease() {
    if (!disabled) {
      setCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0))
    }
  }

  function res() {
    if (!disabled) {
      setCount(0)
    }
  }

  function changePermission() {
    setDisabled(prevDisabled => !prevDisabled)
  }

  return (
    <>
      <div className="components-wrapper">
        <div className="controlled-components">
          <CounterDisplay value={count} />
          <CounterControls plus={increase} minus={decrease} reset={res} disabled={disabled} />
        </div>
        <div className="uncontrolled-components">
          <UncontrolledCounter permission={disabled} />
        </div>
        <button onClick={changePermission}>
          {disabled ? "Enable Buttons" : "Disable Buttons"}
        </button>
      </div>
    </>
  )
}

export default App
