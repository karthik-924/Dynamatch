// import { useState } from 'react'

import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import RLogin from './pages/Login'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/login/:user" element={<RLogin />}/>
      </Routes>
    </Router>
  )
}

export default App
