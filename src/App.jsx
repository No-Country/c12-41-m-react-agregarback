import { useState } from 'react'
import './App.css'
import Form from './components/Form/Form'
import Home from './components/HomePage/Home'
import Footer from './components/Footer/Footer'
import Sidenav from './components/Sidenav/Sidenav'
function App() {


  return (
    <>
      <Sidenav />
      <Form />
      <Home />
      <Footer />
    </>

  )
}

export default App
