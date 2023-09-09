// import { useState } from 'react'

import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import RLogin from './pages/Login'
import Home from './pages/Home'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/login/:user" element={<RLogin />} />
        <Route path="/Home/:active" element={<Home />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
