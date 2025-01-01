import React, { useEffect,useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
//     const [data,setdata]=useState([])
//     useEffect(() => {
//   fetch('https://api.github.com/users/anshikaa13').then(response=>response.json())
//   .then(data=>{
//     console.log(data);
//     setdata(data);
//   })
//     }, [])
const data = useLoaderData()
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers:{data.followers}
    <img src={data.avatar_url} alt='gitpicture' width={300}></img>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/anshikaa13')
    return response.json()
}//for loader api call krn da fxn