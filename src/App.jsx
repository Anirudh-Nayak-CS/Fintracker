import { useState } from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './App.css'
import { SignupForm } from './components/signUp'
import { SigninForm } from './components/signIn'
import { Dashboard } from './components/dashboard'
function App() {
 
  return (
    <>
    <Router>
    <Routes>
     <Route path="/" element={<SignupForm/>}/>
      <Route path="/signin" element={<SigninForm/>}/>
       <Route path="/dashboard" element={<Dashboard/>}/>
    </Routes>
   
      </Router>
    </>
  )
}

export default App
