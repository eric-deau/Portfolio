import {useState} from 'react'
import { Link } from 'react-router-dom'
import NavLink from './Navlink'
import NavbarLogo from './NavbarLogo'
import '../styles/Navbar.css'

export interface NavBarProps {
    navItems: { to: string, title: string }[];
}

export default function Navbar({navItems}: NavBarProps) {
    return (
        <>
            <nav className="nav">
                <Link to ="/" className="nav__logo"><NavbarLogo></NavbarLogo></Link>
                <ul className="nav__links">
                    {navItems.map((link) => (
                        <NavLink key={link.title} to={link.to} title={link.title} />
                    ))}
            </ul>
        </nav>
        </>
    )
}