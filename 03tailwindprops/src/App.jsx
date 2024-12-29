import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
 const myobj={
  name:"anshika",
  age:20
 }
  return (
    <>
  <h1 className='bg-green-400 text-black p-4 rounded-xl'>tailwind test</h1>
  <Card username="chai or code" /*someobj={myobj} */  btntext='hello'/>
  <Card username="anshika" />
    </>
  )
}

export default App
