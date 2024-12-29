import { use } from 'react'
import { useState } from 'react'


function App() {
 const [color,setcolor]=useState("olive")

  return (
<div className='w-full h-screen duration-200' style={{backgroundColor:color}}>
<div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
        <button onclick={()=>setcolor("orange")} className="outline-none px-4 rounded-full text-white shadow-lg" style={{background:"orange"}}>Orange</button>
          <button onclick={()=>setcolor("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{background:"red"}}>Red</button>
  <button onclick={()=>setcolor("pink")} className="outline-none px-4 rounded-full text-white shadow-lg" style={{background:"pink"}}>pink</button>
  <button onclick={()=>setcolor("green")} className="outline-none px-4 rounded-full text-white shadow-lg" style={{background:"green"}}>green</button>
  <button onclick={()=>setcolor("blue")} className="outline-none px-4 rounded-full text-white shadow-lg" style={{background:"blue"}}>e</button>
  <button onclick={()=>setcolor("black")} className="outline-none px-4 rounded-full text-white shadow-lg" style={{background:"black"}}>Black</button>
  </div>
  </div>
</div>
  )
}

export default App
