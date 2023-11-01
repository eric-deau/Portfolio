import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
// import Home from './pages/Home'

function App() {
  // const [count, setCount] = useState(0)

  const [links, setLinks] = useState([
    { to: '/', title: 'Home' },
    { to: '/contact', title: 'Contact' },
    { to: '/register', title: 'Register' },
    { to: '/leaderboard', title: 'Leaderboard' },
  ])

  return (
    <>
      {/* <Navbar navItems={links} />
      <div className="container">
        hello world
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<h1>Contact</h1>} />
          <Route path="/register" element={<h1>Register</h1>} />
          <Route path="/leaderboard" element={<h1>Leaderboard</h1>} />
        </Routes>
      </div> */}
    </>
  )
}

export default App
