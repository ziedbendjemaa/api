import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const NavBar = ({text,setText}) => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">workshop API</Navbar.Brand>
    <Nav className="me-auto">
        <form action="">
            <input type="text" placeholder="Recherche" value={text} onChange={e=>setText(e.target.value)} />
        </form>
      <Nav.Link href="#home"></Nav.Link>
      <Nav.Link href="#features"></Nav.Link>
      <Nav.Link href="#pricing"></Nav.Link>
    </Nav>
    </Container>
  </Navbar>
        </div>
    )
}

export default NavBar

