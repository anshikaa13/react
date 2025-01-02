import './App.css'

import Usercontextprovider from './context/Contextprovider'
import Login from './components/Login'
import Profile from './components/profile'

function App() {
  

  return (
    <Usercontextprovider>
      <h1>hello</h1>
      <Login/>
      <Profile/>
    </Usercontextprovider>
  )
}

export default App
