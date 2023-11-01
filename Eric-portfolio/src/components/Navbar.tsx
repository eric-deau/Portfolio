import React from 'react'
import '../styles/Navbar.css'

export default function Navbar() {
    return (
        <>
            <nav className='nav'>
                <div className='nav-logo'>
                    <a href='/'>
                        {/* <img src={reactLogo} alt='React Logo' />
                        <img src={viteLogo} alt='Vite Logo' /> */}
                    </a>
                </div>
                <ul className='nav-menu'>
                    <li className='nav-item'>
                        <a href='/' className='nav-link'>
                            Home
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a href='/about' className='nav-link'>
                            About
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a href='/projects' className='nav-link'>
                            Projects
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a href='/contact' className='nav-link'>
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    )
}