import React from 'react'
import { Navbar, Container } from 'react-bootstrap'

const Cabecera = ({ funcionBuscar }) => {
  const handleSearchChange = (e) => {
    funcionBuscar(e.target.value)
  }

  return (
    <Navbar className='navbar-expand-lg bg-body-tertiary' expand='lg'>
      <Container fluid>
        <Navbar.Brand href='#'><img src='../src/img/Ninjas.png' style={{ width: '100px' }} /></Navbar.Brand>
        <Navbar.Toggle aria-controls='navbarSupportedContent' />
        <Navbar.Collapse id='navbarSupportedContent'> </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Cabecera
