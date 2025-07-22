import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Banner from './components/Banner'
import Home from './components/home/home'
import Team from './components/Team'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/testimonials" element={<div>Testimonios</div>} />
          <Route path="/projects" element={<div>Trabajos Realizados</div>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
