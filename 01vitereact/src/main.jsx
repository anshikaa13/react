import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const anotheruser="chai"

const reactelement=React.createElement(
  'a',
  {href: 'hhtp://google.com',target:'_blank'},
  'click me to visit',
  anotheruser
)

createRoot(document.getElementById('root')).render(
//  <App/>
reactelement
)

function Myapp(){
  return (
    <div>
      <h1>custom app</h1>
    </div>
  )
}