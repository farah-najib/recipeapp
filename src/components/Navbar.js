import React, { useState } from 'react'
import { Nav,NavLinks,Hamburger } from './styles/Navbar.styled'
import { SwitchButton } from './styles/SwitchButton'


const NavBar = ({checked,onChange}) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <Nav>
            <SwitchButton>
                <input
                    type="checkbox"
                    checked={checked} // Use the 'checked' prop here
                    onChange={onChange} // Use the 'onChange' prop here
                />
                <span className="slider round" />
            </SwitchButton>
            <Hamburger onClick={() => setIsOpen(!isOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </Hamburger>
            <NavLinks isOpen={isOpen}>
                <li>
                    <a href="#home">Home</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#services">Services</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </NavLinks>
        </Nav>
    )
}

export default NavBar
