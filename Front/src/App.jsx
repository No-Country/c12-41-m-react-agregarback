import { useState } from 'react'
import './App.css'
import Home from './components/Landing/Home'
import Footer from './components/Footer/Footer'
import Sidenav from './components/Sidenav/Sidenav'
import { Routes, Route, useLocation, useNavigate, Router } from "react-router-dom";
import Login from './components/Form/Login/Login'
import SignUp from './components/Form/SignUp/SignUp'
import { Routers } from './router/router'
import SideNavLanding from './components/SideNavLanding/SideNavLanding'
function App() {

  return (
    <div className='App'>
       <Routers/>
    </div>
  )
}

export default App;
