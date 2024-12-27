import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
let [counter, setcounter]=useState(15)

  // let counter=15

  const addvalue=()=>{
    
    // counter=counter+1
    if(counter>=20){
      alert("limit exceeded")
    }
    else 
    setcounter(counter+1)
  }

  const removevalue=()=>{
    if(counter<=0){
      alert("value is less than zero")
    }
    else
    setcounter(counter-1)
  }

  return (
    <>
    <h1>anshika or react</h1>
    <h2>counter value: {counter}</h2>

    <button onClick={addvalue}>add value{counter}</button>
    <br/>
    <button onClick={removevalue}>remove value{counter}</button>
    </>
  )
}

export default App
