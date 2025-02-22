import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

const Header = () => {
  return (
    <nav>
        <h1>Techystar</h1>
        <main>

            <HashLink to={"/#home"}>Home</HashLink>
            <HashLink to={"/#about"}>About Us</HashLink>
            <HashLink to={"/#brands"}>Our Brandings</HashLink>
            <Link to={"/services"}>Our Services</Link>
            <Link to={"/contact"}>Contact Us</Link>
        </main>
    </nav>
  )
}

export default Header