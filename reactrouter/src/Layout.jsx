import React from 'react'

import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import { Outlet } from 'react-router-dom'//layout ko as a base use akrega uper niche ki jo chizen hein unhe same rakhega


function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout

//use krne ka bhi ek syntax hai