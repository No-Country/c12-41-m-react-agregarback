import { useState } from 'react'
import './App.css'
import Form from './components/Form/Form'
import Home from './components/HomePage/Home'
import Footer from './components/Footer/Footer'
import Sidenav from './components/Sidenav/Sidenav'
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom'
import { Routers } from './router/router'

// import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
function App() {
  

  return (



    <div className='App'>
    <Routers/>
    </div>
 
  )
}

export default App
