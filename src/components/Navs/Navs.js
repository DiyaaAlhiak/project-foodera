import React from 'react'
import './Navs.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../img/logo.png'

 function Navs() {
  return (
    <div>
       <Navbar  expand="lg">
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} title='logo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about us">about us</Nav.Link>
            <Nav.Link href="#about us">explor food</Nav.Link>
            <Nav.Link href="#about us">Review</Nav.Link>
            <Nav.Link href="#about us">faq</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link id='lastNav'>235678910</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}
export default Navs;