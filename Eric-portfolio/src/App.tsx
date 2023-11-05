import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Message from './components/Message'
import { NavBarProps } from './components/Navbar'

import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
// import Resume from './pages/Resume'
// import Projects from './pages/Projects'

function App() {
  // const [count, setCount] = useState(0)

  // const [links, setLinks] = useState([
  //   { to: '/', title: 'Home' },
  //   { to: '/contact', title: 'Contact' },
  //   { to: '/register', title: 'Register' },
  //   { to: '/leaderboard', title: 'Leaderboard' },
  // ])
  const navBarProps: NavBarProps = {
    navItems: [
      { to: '/', title: 'Home' },
      { to: '/about', title: 'About' },
      { to: '/resume', title: 'Resume' },
      { to: '/projects', title: 'Projects' },
    ],
  }

  return (
    <>
      <div className="App">
        <Navbar {...navBarProps} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/register" element={<Register />} /> */}
          {/* <Route path="/leaderboard" element={<Leaderboard />} /> */}
        </Routes>
      </div>
    </>
  )
}

export default App
