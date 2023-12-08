import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from './pages/Home'
import ProfileSetup from './pages/ProfileSetup'
import Main from './pages/Main'
import Show from './components/Show'
function App() {


  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={
          <Home />
        } />

        <Route exact path='/profile' element={
          <ProfileSetup />
        } />

        <Route exact path='/main' element={
          <Main />
        } />
          <Route exact path='/main/show' element={
          <Show />
        } />


      </Routes>
      <Footer />
    </Router>
  )
}

export default App
