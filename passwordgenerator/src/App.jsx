import { useState ,useCallback,useEffect,useRef} from 'react'


function App() {
  const [length, setlength] = useState(8)
  const [num, setnum] = useState(false)
  const [char,setchar] = useState(false)
  const [password,setpassword] = useState('')


  //useref
  const passwordref=useRef(null)

  const passwordgen=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(num) str+="0123456789";
    if(char) str+="!@#$%^&*+-=-{}[]~`_";
  for (let i = 1; i <= length; i++) {
    let char=Math.floor( Math.random()*str.length+1)
    pass+=str.charAt(char)
  }
  setpassword(pass)

  },[length,num,char,setpassword])

const copytocb= useCallback(()=>{
  passwordref.current?.select()//optionally select mtlb jo hmm copy kr rhe vo select hota bhi dekhe
  window.navigator.clipboard.writeText(password)},
[password])

  useEffect(()=>{
    passwordgen()
  },[length,num,char,passwordgen])

  return (
    <>
   <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordref}
            
        />
        <button onClick={copytocb} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' >copy</button>
    
        
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input type='range' min={6} max={100} value={length} className='cursor-pointer'
        onChange={(e) => {setlength(e.target.value)}}/>
        <label>Length:{length}</label>
        
      </div>
      <div className='flex items-center gap-x-1 '>
      <input
          type="checkbox"
          defaultChecked={num}
          id="numberInput"
          onChange={() => {
              setnum((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={char}
              id="characterInput"
              onChange={() => {
                  setchar((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
    </div>
    </>
  )
}

export default App
