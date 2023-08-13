import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
 } from 'reactstrap';
 import './Navbar.css'

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
        <Navbar expand="md" className="navbar">
            <NavbarBrand href="/" className="brand">Dashboard</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink href="#" className="item">Contact</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#" className="item">About</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    </div>
  );
}

export default NavBar;
