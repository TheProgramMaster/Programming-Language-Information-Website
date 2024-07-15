import React from "react";
import {
    Nav,
    NavLogo,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./NavbarElements.js";

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLogo>Programming Language Catalog</NavLogo>
                <Bars />
                <NavMenu>
                    <NavLink to="/" activeStyle={{ color:'black' }}>Home</NavLink>
                    <NavLink to="/programminglanguages" activeStyle={{ color: 'black' }}>Programming Languages</NavLink>
                    <NavLink to="/interestingfacts" activeStyle={{ color: 'black' }}>Interesting Facts</NavLink>
                </NavMenu>
            </Nav>
        </>
    )
}

export default Navbar;