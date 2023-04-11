import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../Components/Header.css'

function Header() {
  return (

  <>
  <div className='test'></div>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/"><span className='NavText'>Digital Academy</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="Home.html">Home</Nav.Link>


            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="/Login">Login</NavDropdown.Item>
              <NavDropdown.Item href="/Register">Register</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header;