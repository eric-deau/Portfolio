// import {useState} from 'react'
// import { Link } from 'react-router-dom'
// import NavLink from './Navlink'
// import '../styles/Navbar.css'

// interface NavBarProps {
//     navItems: { to: string, title: string }[];
// }

// export default function Navbar({navItems}: NavBarProps) {
//     return (
//         <>
//            <nav className="nav">
//             {/* <Link to="/" className="nav__logo">Logo</Link> */}
//                 <ul className="nav__links">
//                     {navItems.map((link) => (
//                         <NavLink to={link.to} title={link.title} />
//                     ))}
//                 {/* <NavLink to="/" title="Home" />
//                 <NavLink to="/contact" title="Contact" />
//                 <NavLink to="/register" title="Register" />
//                 <NavLink to="/leaderboard" title="Leaderboard" /> */}
//             </ul>
//         </nav>
//         </>
//     )
// }