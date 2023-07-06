import { useState } from 'react'
import './App.css'
import Form from './components/Form/Form'
import Home from './components/HomePage/Home'
import Footer from './components/Footer/Footer'
import Sidenav from './components/Sidenav/Sidenav'
import { Routers } from './router/router'
function App() {


  return (
    <>
      <Sidenav />
      <Routers/>
      <Footer />
    </>
  )
}

export default App
