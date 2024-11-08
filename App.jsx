import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(4)

  const addValue = () => {
    setCounter(counter + 1)
  }

  const removeValue = () => {
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>Counter Value: {counter}</h1>
      <button onClick={addValue}>Add Value{counter}</button> <br />
      <button onClick={removeValue}>Remove Value{counter}</button>
 
    </>
  )
}

export default App
