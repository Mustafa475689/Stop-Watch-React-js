import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StopWatch from './StopWatch'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <div className="dt">
    <h1 className='title'>Stop Watch</h1>
    </div> <br />
      <StopWatch />
      <br />
      <StopWatch />
      
    </>
  )
}

export default App
