import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import Layout from './Layout.jsx'
import About from './components/aboutus/About.jsx'
import Home from './components/home/Home'
import Contact from './components/contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { githubInfoLoader } from './components/github/Github.jsx'


// const router= createBrowserRouter([

//   {
//     path:'/',//top lwvel element kya render karega path mein children home aboutus
//     element:<Layout/>,
//     children:[
//       {
//         path:"",
//         element:<Home/>
//       },
//       {
//         path:"about",
//         element:<About/>
//       },

//       {
//         path:"contact",
//         element:<Contact/>
//       }
//     ]
//   }
// ])

const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
       <Route path='' element={<Home/>}/>
       <Route path='about' element={<About/>}/>
       <Route path='contact' element={<Contact/>}/>
       <Route path='user/:userid' element={<User/>}/>
       <Route 
      loader={githubInfoLoader}
       path='github' 
       element={<Github/>}/>
       
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
//loader helps to fetch data from apis directly mouse late hi fetching shuru ho jati hai or cache memory mein bhi store hota hai
