// uncontrolledCounter.jsx
import { useState } from 'react'

export function UncontrolledCounter({ permission }) {
  const [val, setVal] = useState(0)

  function increase() {
    if (!permission) {
      setVal(prevCount => prevCount + 1)
    }
  }

  function decrease() {
    if (!permission) {
      setVal(prevCount => (prevCount > 0 ? prevCount - 1 : 0))
    }
  }

  function res() {
    if (!permission) {
      setVal(0)
    }
  }

  return (
    <>
      <p>Uncontrolled counter: {val}</p>

      <div className="buttons">
        <button onClick={increase} disabled={permission}>
          +
        </button>
        <button onClick={decrease} disabled={permission}>
          -
        </button>
        <button onClick={res} disabled={permission}>
          Reset
        </button>
      </div>
    </>
  )
}
