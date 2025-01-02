import React ,{useContext}from 'react'
import Usercontext from '../context/Usercontext'


function Profile() {
    const {user}=useContext(Usercontext)

  
   if(!user) return<div>please login</div>
   
   return <div>welcome {user.username}</div>
}

export default Profile