import { useState } from 'react'
import { Link } from 'react-router-dom'
import NavLink from './Navlink'
import BurgerNavlink from './BurgerNavlink'
import NavbarLogo from './NavbarLogo'
import { slide as Menu } from 'react-burger-menu'
import '../styles/Navbar.css'
import '../styles/bm.css'

export interface NavBarProps {
    navItems: { to: string, title: string }[];
}

export default function Navbar({ navItems }: NavBarProps) {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleStateChange = (state: any) => {
        return state.isOpen;
    }

    const closeMenu = () => {
        setMenuOpen(false)
    }

    return (
        <>
            {/* nav css class breaks when burger menu is open */}
            <nav className="navbar">
                <Link to="/" className="nav__logo"><NavbarLogo></NavbarLogo></Link>
                <div className="menu-visible">
                    <ul className="links">
                        {navItems.map((link) => (
                            <NavLink key={link.title} to={link.to} title={link.title} />
                        ))}
                    </ul>
                </div>
                <div className="burger-visible">
                    {/* <Menu isOpen={menuOpen} onStateChange={handleStateChange}>
                        {navItems.map((link) => (
                            <BurgerNavlink key={link.title} to={link.to} title={link.title} />
                        ))}
                    </Menu> */}
                    <Menu right>
                        <ul className="links">
                            {navItems.map((link) => (
                                <BurgerNavlink key={link.title} to={link.to} title={link.title} />
                            ))}
                        </ul>
                    </Menu>
                </div>
            </nav>
        </>
    )
}