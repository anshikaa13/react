import { useState } from 'react'
import {Todoprovider} from "./context"
import './App.css'
import { useEffect } from 'react'
import { Todoform, Todoitem } from './components'

function App() {
 const [todos,settodos]=useState([])
 
const addtodo=(todo)=>{
 settodos((prev)=>[{id:Date.now(),...todo},...prev])//prev se update krne se phle vale vale bhi srae elements aa jate hein
} 
const updatetodo=(id,todo)=>{
  settodos((prev)=>prev.map((prevtodo)=>(prevtodo.id===id?todo:prevtodo)))//prev pura array liya usme loop chlaya jo ki hr element excess kr rha hai to ek or callback lgake id se match kareenge
}

const deletetodo=(id)=>{
  settodos((prev)=>prev.filter((todo)=>todo.id!==id))//simply filter kr dena ko jiski id match hogyi vo ni ayega
}

const togglecomplete=(id)=>{
  settodos((prev)=>prev.map((prevtodo)=>prevtodo.id===id ?{...prevtodo,completed:!prevtodo.completed}:prevtodo))//whi phle id se match kiya or fir change krne ke liye spread ka use kiya baki sabhi value vhi just chnage in completed 
}

useEffect(() => {
   const todos= JSON.parse(localStorage.getItem("todos"))

   if(todos && todos.length>0){
    settodos(todos)
   }
}, [])

useEffect(()=>{
  localStorage.setItem("todos",JSON.stringify(todos))
},[todos])//store krne ke liye local storage mein agr todos mein koi change ho to

  return (
    <Todoprovider value={{todos,addtodo,updatetodo,deletetodo,togglecomplete}}>
      <div className="bg-[#172842] h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <Todoform/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo)=>(
                          <div key={todo.id} className='w-full'>
                            <Todoitem todo ={todo}/>

                          </div>
      
                        ))}
                    </div>
                </div>
            </div>
    </Todoprovider>
  )
}

export default App
