import { useState } from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './App.css'
import { SignupForm } from './components/signUp'
import { SigninForm } from './components/signIn'

function App() {
 
  return (
    <>
    <Router>
    <Routes>
     <Route path="/" element={<SignupForm/>}/>
      <Route path="/signin" element={<SigninForm/>}/>
    </Routes>
   
      </Router>
    </>
  )
}

export default App
