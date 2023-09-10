// import { useState } from 'react'

import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import RLogin from './pages/Login'
import Home from './pages/Home'
import Donors from './pages/Donors'
import Recepients from './pages/Recepients'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/login/:user" element={<RLogin />} />
        <Route path="/" element={<Home />} />
        <Route path='/donors' element={<Donors />} />
        <Route path='/recepients' element={<Recepients/>} />
        
      </Routes>
    </Router>
  )
}

export default App
